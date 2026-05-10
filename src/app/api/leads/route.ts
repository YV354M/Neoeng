import { NextResponse } from 'next/server';
import { leadSchema } from '@/lib/validations/lead';
import { z } from 'zod';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validar os dados de entrada usando Zod
    const parsedData = leadSchema.parse(body);

    // 2. Autenticar no Google Sheets
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID as string, serviceAccountAuth);
    await doc.loadInfo(); // carrega as informações da planilha
    const sheet = doc.sheetsByIndex[0]; // pega a primeira aba

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

    console.error('Erro na API leads:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor.' },
      { status: 500 }
    );
  }
}
