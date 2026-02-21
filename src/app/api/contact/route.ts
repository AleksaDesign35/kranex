import { NextRequest, NextResponse } from "next/server";
import { KONTAKT } from "@/lib/constants";

export async function POST(request: NextRequest) {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
        return NextResponse.json(
            { error: "Email servis nije konfiguriran" },
            { status: 500 }
        );
    }

    const body = await request.json();
    const { ime, email, telefon, naslov, poruka, website } = body;

    if (website) {
        return NextResponse.json({ success: true });
    }

    if (!ime || !email || !poruka) {
        return NextResponse.json(
            { error: "Ime, email i poruka su obavezni" },
            { status: 400 }
        );
    }

    const htmlContent = `
        <h2>Nova poruka s kontakt forme – Kranex prijevozi</h2>
        <p><strong>Ime i prezime:</strong> ${String(ime)}</p>
        <p><strong>Email:</strong> ${String(email)}</p>
        <p><strong>Telefon:</strong> ${telefon || "—"}</p>
        <p><strong>Naslov:</strong> ${naslov || "—"}</p>
        <p><strong>Poruka:</strong></p>
        <p>${String(poruka).replace(/\n/g, "<br>")}</p>
    `;

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            accept: "application/json",
            "api-key": apiKey,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            sender: {
                name: "Kranex prijevozi",
                email: KONTAKT.email,
            },
            to: [{ email: KONTAKT.contactFormRecipient, name: "Kranex prijevozi" }],
            replyTo: { email: String(email), name: String(ime) },
            subject: `Kontakt forma: ${naslov || "Bez naslova"} – ${String(ime)}`,
            htmlContent,
        }),
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        return NextResponse.json(
            { error: "Greška pri slanju poruke. Pokušajte ponovno.", details: err },
            { status: 500 }
        );
    }

    return NextResponse.json({ success: true });
}
