"use client";

import { useEffect } from "react";
import { getConsent } from "@/lib/cookie-consent";
import { grantConsent } from "@/lib/gtag";

export default function GtagWithConsent() {
    useEffect(() => {
        if (getConsent() === "accepted") grantConsent();
    }, []);
    return null;
}
