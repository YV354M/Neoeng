import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations/lead";
import { z } from "zod";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const formatOrigin = (source: "home" | "private-homes") =>
  source === "private-homes" ? "private-homes" : "home";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[leads] 1. Dados recebidos:", JSON.stringify(body));

    const parsedData = leadSchema.parse(body);
    console.log("[leads] 2. Validação OK");

    const sheetId = (process.env.GOOGLE_SHEET_ID ?? "").trim();
    const clientEmail = (process.env.GOOGLE_CLIENT_EMAIL ?? "").trim();
    console.log("[leads] 3. Sheet ID:", `"${sheetId}"`, "| Email:", `"${clientEmail}"`);

    let privateKey: string;
    const b64raw = (process.env.GOOGLE_PRIVATE_KEY_B64 ?? "").trim();
    if (b64raw) {
      privateKey = Buffer.from(b64raw, "base64").toString("utf-8");
      console.log("[leads] 4. Chave via BASE64 | tamanho:", privateKey.length);
    } else {
      let rawKey = (process.env.GOOGLE_PRIVATE_KEY ?? "").trim();
      rawKey = rawKey.replace(/^["']|["']$/g, "");
      privateKey = rawKey.replace(/\\n/g, "\n");
      console.log("[leads] 4. Chave via PRIVATE_KEY | tamanho:", privateKey.length);
    }
    console.log("[leads] 4b. Início:", privateKey.substring(0, 27), "| Fim:", privateKey.slice(-25).trim());

    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    console.log("[leads] 5. Carregando planilha...");
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();
    console.log("[leads] 6. Planilha carregada:", doc.title);

    const sheet = doc.sheetsByIndex[0];
    await sheet.loadHeaderRow();
    console.log("[leads] 7. Aba:", sheet.title, "| Headers:", sheet.headerValues);

    await sheet.addRow({
      Data: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
      Origem_Lead: formatOrigin(parsedData.source),
      Origem_Pagina: parsedData.source,
      Nome: parsedData.name,
      WhatsApp: parsedData.whatsapp,
      Email: parsedData.email,
      Cidade_Local_Obra: parsedData.location,
      Tipo_Projeto_Obra: parsedData.projectCategory,
      Estagio_Atual_Projeto: parsedData.currentStage,
      Servicos_Desejados: parsedData.requestedServices.join(" | "),
      Area_Aproximada_Obra: parsedData.approximateArea || "",
      Prazo_Desejado_Inicio: parsedData.timeline,
      Descricao_Necessidade: parsedData.details,
      Faixa_Investimento: parsedData.investmentRange || "",
    });
    console.log("[leads] 8. Linha inserida com sucesso");

    if (process.env.N8N_WEBHOOK_URL) {
      fetch(process.env.N8N_WEBHOOK_URL.trim(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${(process.env.N8N_API_KEY ?? "").trim()}`,
        },
        body: JSON.stringify({
          ...parsedData,
          sourceLabel: "Website Neoeng",
          requestedServicesLabel: parsedData.requestedServices.join(" | "),
        }),
      }).catch((webhookError) => {
        console.error("[leads] Falha no webhook n8n:", webhookError);
      });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Dados inválidos.", details: error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const msg = error instanceof Error ? error.message : String(error);
    console.error("[leads] ERRO CRÍTICO:", msg);
    if (error instanceof Error) console.error("[leads] Stack:", error.stack);

    return NextResponse.json(
      { error: "Erro interno no servidor.", detail: msg },
      { status: 500 },
    );
  }
}
