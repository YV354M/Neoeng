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

    // 2. Autenticar no Google Sheets
    // A chave pode ter \\n (literal) ou \n (real) dependendo do ambiente — normalizamos para sempre usar \n real
    const rawKey = process.env.GOOGLE_PRIVATE_KEY ?? '';
    const privateKey = rawKey.includes('\\n') ? rawKey.replace(/\\n/g, '\n') : rawKey;
    console.log('[leads] 3. Chave privada carregada, tamanho:', privateKey?.length, '| Começa com:', privateKey?.substring(0, 30));

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    console.log('[leads] 4. JWT criado, carregando planilha:', process.env.GOOGLE_SHEET_ID);
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID as string, serviceAccountAuth);
    await doc.loadInfo(); // carrega as informações da planilha
    console.log('[leads] 5. Planilha carregada:', doc.title);

    const sheet = doc.sheetsByIndex[0]; // pega a primeira aba
    console.log('[leads] 6. Aba selecionada:', sheet.title, '| Cabeçalhos:', sheet.headerValues);

    // 3. Inserir a linha na planilha
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
    console.log('[leads] 7. Linha inserida com sucesso');

    // 4. Trigger do Webhook n8n (em background - não bloqueante)
    if (process.env.N8N_WEBHOOK_URL) {
      // Usando fetch assíncrono para não segurar a resposta
      fetch(process.env.N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.N8N_API_KEY}`,
        },
        body: JSON.stringify({
          ...parsedData,
          source: 'Website Neoeng',
        }),
      }).catch((webhookError) => {
        console.error('Falha ao acionar webhook n8n:', webhookError);
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

    console.error('Erro na API leads:', error instanceof Error ? error.message : error);
    if (error instanceof Error) console.error('Stack:', error.stack);
    return NextResponse.json(
      { error: 'Erro interno no servidor.' },
      { status: 500 }
    );
  }
}
