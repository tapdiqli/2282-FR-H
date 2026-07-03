import { type NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface ContactPayload {
  nom: string;
  email: string;
  message: string;
}

function isValid(p: ContactPayload): boolean {
  return (
    typeof p.nom === "string" &&
    p.nom.trim().length > 0 &&
    typeof p.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email) &&
    typeof p.message === "string" &&
    p.message.trim().length > 10
  );
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Corps JSON invalide." }, { status: 400 });
  }

  if (!isValid(payload)) {
    return NextResponse.json({ ok: false, error: "Champs manquants ou invalides." }, { status: 422 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "Nouveau message — TopPariGagnant",
              fields: [
                { name: "Nom", value: payload.nom, inline: true },
                { name: "E-mail", value: payload.email, inline: true },
                { name: "Message", value: payload.message },
              ],
              color: 0x4ade80,
            },
          ],
        }),
      });
    } catch {
      /* webhook failure is non-fatal */
    }
  }

  return NextResponse.json({ ok: true });
}
