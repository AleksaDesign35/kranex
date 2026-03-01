export const GA_MEASUREMENT_ID = "G-7X42SW798B";

const CONSENT_DENIED = {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
} as const;

const CONSENT_GRANTED = {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
} as const;

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
    }
}

function getGtag(): Window["gtag"] | null {
    if (typeof window === "undefined") return null;
    return window.gtag ?? null;
}

export function initGtag(consentAccepted: boolean) {
    if (typeof window === "undefined") return;
    const id = GA_MEASUREMENT_ID;
    window.dataLayer = window.dataLayer || [];
    const gtag = function (...args: unknown[]) {
        window.dataLayer.push(args);
    };
    window.gtag = gtag;
    gtag("consent", "default", CONSENT_DENIED);
    gtag("js", new Date());
    gtag("config", id);
    if (consentAccepted) gtag("consent", "update", CONSENT_GRANTED);
}

function loadGtagScript() {
    if (typeof document === "undefined" || document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) return;
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);
}

export function initGtagWithScript(consentAccepted: boolean) {
    if (typeof window === "undefined") return;
    loadGtagScript();
    initGtag(consentAccepted);
}

export function grantConsent() {
    const gtag = getGtag();
    if (gtag) gtag("consent", "update", CONSENT_GRANTED);
}

export function denyConsent() {
    const gtag = getGtag();
    if (gtag) gtag("consent", "update", CONSENT_DENIED);
}

type GtagEventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params: GtagEventParams = {}) {
    const gtag = getGtag();
    if (gtag) gtag("event", eventName, params);
}
