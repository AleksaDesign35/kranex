import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import FloatingCallButton from "@/components/FloatingCallButton";
import CookieBanner from "@/components/CookieBanner";
import GtagWithConsent from "@/components/GtagWithConsent";
import { getSchemaGraph } from "@/lib/schema";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const inter = Inter({ subsets: ["latin"] });

const gtagInlineScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied'});
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`;

const BASE_URL = "https://kranexprijevozi.hr";

export const metadata: Metadata = {
    metadataBase: new URL("https://kranexprijevozi.hr"),
    icons: {
        icon: "/favicon/favicon.svg",
        apple: "/favicon/apple-touch-icon.png",
        other: [
            { rel: "icon", url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
            { rel: "icon", url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
        ],
    },
    manifest: "/favicon/site.webmanifest",
    title: "Kamion s kranom Zagreb | Prijevoz tereta i dizanje tereta | Kranex prijevozi",
    description:
        "Kamion s kranom Zagreb za prijevoz tereta, građevinskog materijala i dizanje tereta. Brz dolazak, siguran transport i fleksibilni termini.",
    openGraph: {
        title: "Kamion s kranom Zagreb | Prijevoz tereta i dizanje tereta | Kranex prijevozi",
        description:
            "Kamion s kranom Zagreb za prijevoz tereta, građevinskog materijala i dizanje tereta. Brz dolazak, siguran transport i fleksibilni termini.",
        url: BASE_URL,
        images: [{ url: `${BASE_URL}/images/kamion-s-kranom-zagreb-prijevoz-tereta-i-dizanje-tereta-kranex-prijevozi.png`, width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kamion s kranom Zagreb | Prijevoz tereta i dizanje tereta | Kranex prijevozi",
        description:
            "Kamion s kranom Zagreb za prijevoz tereta, građevinskog materijala i dizanje tereta. Brz dolazak, siguran transport i fleksibilni termini.",
        images: [`${BASE_URL}/images/kamion-s-kranom-zagreb-prijevoz-tereta-i-dizanje-tereta-kranex-prijevozi.png`],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const schema = getSchemaGraph();
    return (
        <html lang="hr">
            <body className={`${inter.className} min-h-screen bg-white text-zinc-900 antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <script
                    dangerouslySetInnerHTML={{ __html: gtagInlineScript }}
                />
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                />
                <GtagWithConsent />
                <Header />
                <Breadcrumbs />
                {children}
                <MapSection />
                <Footer />
                <FloatingCallButton />
                <CookieBanner />
            </body>
        </html>
    );
}
