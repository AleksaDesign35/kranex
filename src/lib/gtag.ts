export const GA_MEASUREMENT_ID = "G-7X42SW798B";

export function loadGtag() {
    if (typeof window === "undefined") return;
    const id = GA_MEASUREMENT_ID;
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s);
    (window as unknown as { dataLayer: unknown[] }).dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer || [];
    const gtag = function (...args: unknown[]) {
        ((window as unknown as { dataLayer: unknown[] }).dataLayer).push(args);
    };
    (window as unknown as { gtag: typeof gtag }).gtag = gtag;
    (window as unknown as { gtag: typeof gtag }).gtag("js", new Date());
    (window as unknown as { gtag: typeof gtag }).gtag("config", id);
}
