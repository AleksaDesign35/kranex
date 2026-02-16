import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kranex prijevozi – Vaš pouzdan partner za prijevoz i dizanje tereta",
  description:
    "Kranex prijevozi – cestovni prijevoz, prijevoz građevinskog materijala, dizanje tereta kranom, utovar i istovar. Kontaktirajte nas za ponudu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
