import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { getOrganizationSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kamion s kranom Zagreb | Prijevoz tereta i dizanje tereta | Kranex prijevozi",
    description:
        "Kamion s kranom Zagreb za prijevoz tereta, građevinskog materijala i dizanje tereta. Brz dolazak, siguran transport i fleksibilni termini. Kontaktirajte nas.",
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
