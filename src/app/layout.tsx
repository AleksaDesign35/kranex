import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { getOrganizationSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://kranexprijevozi.hr";

export const metadata: Metadata = {
    icons: {
        icon: "/favicon/favicon.svg",
    },
    manifest: "/favicon/site.webmanifest",
    title: "Kamion s kranom Zagreb | Prijevoz tereta i dizanje tereta | Kranex prijevozi",
    description:
        "Kamion s kranom Zagreb za prijevoz tereta, građevinskog materijala i dizanje tereta. Brz dolazak, siguran transport i fleksibilni termini. Kontaktirajte nas.",
    openGraph: {
        title: "Kamion s kranom Zagreb | Prijevoz tereta i dizanje tereta | Kranex prijevozi",
        description:
            "Kamion s kranom Zagreb za prijevoz tereta, građevinskog materijala i dizanje tereta. Brz dolazak, siguran transport i fleksibilni termini. Kontaktirajte nas.",
        url: BASE_URL,
        images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary",
        title: "Kamion s kranom Zagreb | Prijevoz tereta i dizanje tereta | Kranex prijevozi",
        description:
            "Kamion s kranom Zagreb za prijevoz tereta, građevinskog materijala i dizanje tereta. Brz dolazak, siguran transport i fleksibilni termini. Kontaktirajte nas.",
        images: [`${BASE_URL}/og-image.png`],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const schema = getOrganizationSchema();
    return (
        <html lang="hr">
            <body className={`${inter.className} min-h-screen bg-white text-zinc-900 antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <Header />
                <Breadcrumbs />
                {children}
                <Footer />
                <FloatingCallButton />
            </body>
        </html>
    );
}
