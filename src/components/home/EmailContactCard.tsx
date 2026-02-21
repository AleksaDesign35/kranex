"use client";

import { Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { KONTAKT } from "@/lib/constants";

export default function EmailContactCard() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const base =
        "group rounded-2xl border-2 border-transparent bg-zinc-50 p-8 transition-colors hover:border-primary/20 hover:bg-primary/5 active:border-primary/20 active:bg-primary/5";

    return (
        <a href={mounted ? `mailto:${KONTAKT.email}` : "#"} className={base}>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFEDD4] transition-colors group-hover:bg-primary group-active:bg-primary">
                <Mail
                    className="h-7 w-7 text-primary transition-colors group-hover:text-white group-active:text-white"
                    strokeWidth={2}
                    aria-hidden
                />
            </div>
            <h3 className="mb-2 text-xl font-bold text-zinc-900">Email</h3>
            <p className="text-zinc-600">Pošaljite nam upit</p>
            <p className="mt-2 font-medium text-primary">
                {mounted ? KONTAKT.email : ""}
            </p>
        </a>
    );
}
