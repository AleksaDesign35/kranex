"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const honeypot = formData.get("website");
        if (honeypot) return;

        const data = {
            ime: formData.get("ime"),
            email: formData.get("email"),
            telefon: formData.get("telefon"),
            naslov: formData.get("naslov"),
            poruka: formData.get("poruka"),
        };

        setStatus("loading");
        setErrorMsg("");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const json = await res.json();

        if (!res.ok) {
            setStatus("error");
            setErrorMsg(json.error || "Greška pri slanju");
            return;
        }

        setStatus("success");
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div
                className="absolute -left-[9999px] opacity-0"
                aria-hidden
            >
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="ime" className="mb-2 block text-sm font-medium text-zinc-900">
                        Ime i prezime
                    </label>
                    <input
                        type="text"
                        id="ime"
                        name="ime"
                        required
                        placeholder="Unesite vaše ime"
                        className="w-full rounded-lg border-2 border-zinc-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-900">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="vasa@email.com"
                        className="w-full rounded-lg border-2 border-zinc-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="telefon" className="mb-2 block text-sm font-medium text-zinc-900">
                        Telefon
                    </label>
                    <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        placeholder="+385 (91) 234 5678"
                        className="w-full rounded-lg border-2 border-zinc-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="naslov" className="mb-2 block text-sm font-medium text-zinc-900">
                        Naslov
                    </label>
                    <input
                        type="text"
                        id="naslov"
                        name="naslov"
                        required
                        placeholder="Naslov poruke"
                        className="w-full rounded-lg border-2 border-zinc-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="poruka" className="mb-2 block text-sm font-medium text-zinc-900">
                    Poruka
                </label>
                <textarea
                    id="poruka"
                    name="poruka"
                    required
                    rows={5}
                    placeholder="Unesite vašu poruku..."
                    className="w-full resize-none rounded-lg border-2 border-zinc-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                />
            </div>
            {status === "success" && (
                <p className="rounded-lg bg-green-50 p-4 text-green-800">
                    Poruka je uspješno poslana. Javlit ćemo vam se uskoro.
                </p>
            )}
            {status === "error" && (
                <p className="rounded-lg bg-red-50 p-4 text-red-800">{errorMsg}</p>
            )}
            <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-95 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {status === "loading" ? "Šaljem..." : "Pošalji poruku"}
            </button>
        </form>
    );
}
