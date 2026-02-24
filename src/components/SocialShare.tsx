"use client";

import { useState } from "react";
import { Facebook, Linkedin, Link2, Check, Twitter } from "lucide-react";

const BASE = "https://kranexprijevozi.hr";

type Props = { path: string; title: string };

function shareUrl(platform: string, url: string, title: string): string {
    const encoded = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    switch (platform) {
        case "facebook":
            return `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
        case "twitter":
            return `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`;
        case "linkedin":
            return `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`;
        default:
            return url;
    }
}

export default function SocialShare({ path, title }: Props) {
    const [copied, setCopied] = useState(false);
    const url = `${BASE}${path}`;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const linkClass =
        "flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 transition hover:border-primary hover:text-primary";

    return (
        <div className="flex flex-wrap items-center gap-3">
            <a
                href={shareUrl("facebook", url, title)}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label="Podijeli na Facebooku"
            >
                <Facebook className="size-5" aria-hidden />
            </a>
            <a
                href={shareUrl("twitter", url, title)}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label="Podijeli na X (Twitter)"
            >
                <Twitter className="size-5" aria-hidden />
            </a>
            <a
                href={shareUrl("linkedin", url, title)}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label="Podijeli na LinkedInu"
            >
                <Linkedin className="size-5" aria-hidden />
            </a>
            <button
                type="button"
                onClick={handleCopy}
                className={`${linkClass} ${copied ? "border-green-400 text-green-600" : ""}`}
                aria-label={copied ? "Kopirano" : "Kopiraj link"}
            >
                {copied ? (
                    <Check className="size-5" aria-hidden />
                ) : (
                    <Link2 className="size-5" aria-hidden />
                )}
            </button>
        </div>
    );
}
