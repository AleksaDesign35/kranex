"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

function getLinkText(link: HTMLAnchorElement) {
    const aria = link.getAttribute("aria-label")?.trim();
    if (aria) return aria;
    return link.textContent?.replace(/\s+/g, " ").trim() || "phone_link";
}

export default function PhoneLeadTracker() {
    useEffect(() => {
        function onClick(event: MouseEvent) {
            const target = event.target;
            if (!(target instanceof Element)) return;
            const link = target.closest('a[href^="tel:"]');
            if (!(link instanceof HTMLAnchorElement)) return;
            const href = link.getAttribute("href") || "";
            const linkText = getLinkText(link);
            trackEvent("generate_lead", {
                lead_type: "phone_call",
                method: "tel",
                page_path: window.location.pathname,
                link_url: href,
                link_text: linkText,
            });
        }

        document.addEventListener("click", onClick, true);
        return () => {
            document.removeEventListener("click", onClick, true);
        };
    }, []);

    return null;
}
