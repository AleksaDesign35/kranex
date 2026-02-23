"use client";

import { useEffect } from "react";
import { getConsent } from "@/lib/cookie-consent";
import { initGtagWithScript } from "@/lib/gtag";

export default function GtagWithConsent() {
    useEffect(() => {
        const consent = getConsent();
        initGtagWithScript(consent === "accepted");
    }, []);
    return null;
}
