const COOKIE_NAME = "kranex_consent";
const MAX_AGE = 365 * 24 * 60 * 60;

export type ConsentStatus = "accepted" | "rejected" | null;

export function getConsent(): ConsentStatus {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
    const value = match ? decodeURIComponent(match[1]) : null;
    if (value === "accepted" || value === "rejected") return value;
    return null;
}

export function setConsent(value: "accepted" | "rejected") {
    if (typeof document === "undefined") return;
    document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${MAX_AGE}; SameSite=Lax`;
}
