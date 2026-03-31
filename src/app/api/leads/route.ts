import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { leadSchema } from '@/lib/validations/lead';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validar os dados de entrada usando Zod
    const parsedData = leadSchema.parse(body);

    // 2. Inserir no Supabase
    const { data: leadData, error: dbError } = await supabase
      .from('leads')
      .insert([parsedData])
      .select()
      .single();

    if (dbError) {
      console.error('Erro ao inserir lead no Supabase:', dbError);
      return NextResponse.json(
        { error: 'Falha ao processar solicitação no banco de dados.' },
        { status: 500 }
      );
    }

    // 3. Trigger do Webhook n8n (em background - não bloqueante)
    if (process.env.N8N_WEBHOOK_URL) {
      // Usando fetch assíncrono para não segurar a resposta
      fetch(process.env.N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Se o webhook do n8n precisar do token JWT de autenticação fornecido:
          'Authorization': `Bearer ${process.env.N8N_API_KEY}`,
        },
        body: JSON.stringify({
          ...parsedData,
          source: 'Website Neoeng',
          eventId: leadData.id,
        }),
      }).catch((webhookError) => {
        // Apenas logamos o erro, não queremos falhar a chamada do usuário se o n8n cair
        console.error('Falha ao acionar webhook n8n:', webhookError);
      });
    }

    return NextResponse.json({ success: true, lead: leadData }, { status: 201 });

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
