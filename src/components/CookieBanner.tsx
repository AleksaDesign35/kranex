"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getConsent, setConsent } from "@/lib/cookie-consent";
import { loadGtag } from "@/lib/gtag";

export default function CookieBanner() {
    const [show, setShow] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const consent = getConsent();
        if (consent === null) setShow(true);
        if (consent === "accepted") loadGtag();
    }, [mounted]);

    const accept = () => {
        setConsent("accepted");
        loadGtag();
        setShow(false);
    };

    const reject = () => {
        setConsent("rejected");
        setShow(false);
    };

    if (!mounted || !show) return null;

    return (
        <div
            role="dialog"
            aria-label="Kolačići"
            className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:px-6"
        >
            <div className="mx-auto flex max-w-[1280px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-zinc-600">
                    Koristimo kolačiće za analitiku (Google Analytics). Ako odbijete, praćenje će biti isključeno.{" "}
                    <Link href="/pravila-privatnosti" className="font-medium text-primary hover:underline">
                        Pravila privatnosti
                    </Link>
                </p>
                <div className="flex shrink-0 gap-3">
                    <button
                        type="button"
                        onClick={reject}
                        className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
                    >
                        Odbij
                    </button>
                    <button
                        type="button"
                        onClick={accept}
                        className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95"
                    >
                        Prihvati
                    </button>
                </div>
            </div>
        </div>
    );
}
