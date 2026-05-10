import { NextResponse } from 'next/server';
import { leadSchema } from '@/lib/validations/lead';
import { z } from 'zod';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[leads] 1. Dados recebidos:', JSON.stringify(body));

    // 1. Validar os dados de entrada usando Zod
    const parsedData = leadSchema.parse(body);
    console.log('[leads] 2. Validação OK');

    // 2. Ler env vars — .trim() obrigatório pois Easypanel inclui espaços ao redor do "="
    const sheetId = (process.env.GOOGLE_SHEET_ID ?? '').trim();
    const clientEmail = (process.env.GOOGLE_CLIENT_EMAIL ?? '').trim();
    console.log('[leads] 3. Sheet ID:', `"${sheetId}"`, '| Email:', `"${clientEmail}"`);

    // Suporta GOOGLE_PRIVATE_KEY_B64 (preferencial, sem problemas de escaping)
    // ou GOOGLE_PRIVATE_KEY como fallback
    let privateKey: string;
    const b64raw = (process.env.GOOGLE_PRIVATE_KEY_B64 ?? '').trim();
    if (b64raw) {
      privateKey = Buffer.from(b64raw, 'base64').toString('utf-8');
      console.log('[leads] 4. Chave via BASE64 | tamanho:', privateKey.length);
    } else {
      let rawKey = (process.env.GOOGLE_PRIVATE_KEY ?? '').trim();
      rawKey = rawKey.replace(/^["']|["']$/g, '');
      privateKey = rawKey.replace(/\\n/g, '\n');
      console.log('[leads] 4. Chave via PRIVATE_KEY | tamanho:', privateKey.length);
    }
    console.log('[leads] 4b. Início:', privateKey.substring(0, 27), '| Fim:', privateKey.slice(-25).trim());

    // 3. Autenticar no Google Sheets
    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    console.log('[leads] 5. Carregando planilha...');
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();
    console.log('[leads] 6. Planilha carregada:', doc.title);

    const sheet = doc.sheetsByIndex[0];
    await sheet.loadHeaderRow(); // obrigatório na v5 antes de addRow()
    console.log('[leads] 7. Aba:', sheet.title, '| Headers:', sheet.headerValues);

    // 4. Inserir a linha na planilha
    await sheet.addRow({
      Nome: parsedData.name,
      Email: parsedData.email,
      Empresa: parsedData.company,
      Whatsapp: parsedData.whatsapp,
      Servicos: parsedData.services.join(', '),
      Prazo: parsedData.timeline,
      Detalhes: parsedData.details || '',
      Data: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    });
    console.log('[leads] 8. Linha inserida com sucesso');

    // 5. Trigger do Webhook n8n (em background — não bloqueia a resposta)
    if (process.env.N8N_WEBHOOK_URL) {
      fetch(process.env.N8N_WEBHOOK_URL.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${(process.env.N8N_API_KEY ?? '').trim()}`,
        },
        body: JSON.stringify({ ...parsedData, source: 'Website Neoeng' }),
      }).catch((webhookError) => {
        console.error('[leads] Falha no webhook n8n:', webhookError);
      });
    }

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos.', details: error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const msg = error instanceof Error ? error.message : String(error);
    console.error('[leads] ERRO CRÍTICO:', msg);
    if (error instanceof Error) console.error('[leads] Stack:', error.stack);

    // detail exposto para diagnóstico — remover após estabilização em produção
    return NextResponse.json(
      { error: 'Erro interno no servidor.', detail: msg },
      { status: 500 }
    );
  }
}
