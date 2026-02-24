import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Impressum | Kranex prijevozi d.o.o. (Zagreb)",
    description:
        "Impressum i službeni podaci tvrtke KRANEX PRIJEVOZI d.o.o. (Zagreb): sjedište, OIB, MBS, sud upisa, zastupnik, temeljni kapital i IBAN.",
    alternates: { canonical: "/impressum" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Impressum | Kranex prijevozi d.o.o. (Zagreb)",
        description:
            "Službeni podaci tvrtke KRANEX PRIJEVOZI d.o.o.: sjedište, OIB, MBS, sud upisa, zastupnik, temeljni kapital i IBAN.",
        url: "/impressum",
        type: "website",
    },
};

const osnovni = [
    { label: "Naziv društva", value: "KRANEX PRIJEVOZI d.o.o. za usluge" },
    { label: "Skraćeni naziv", value: "Kranex prijevozi d.o.o." },
    { label: "Sjedište", value: "Ulica Hrvatskog proljeća 47, 10040 Zagreb" },
    { label: "Država", value: "Republika Hrvatska" },
    { label: "OIB", value: "20423153026" },
    { label: "MBS", value: "06183611" },
    { label: "Upisano u", value: "Trgovački sud u Zagrebu" },
];

const poslovni = [
    { label: "Temeljni kapital", value: "2.500 EUR" },
    { label: "Zastupnik", value: "Antonio Berišić, direktor" },
    { label: "IBAN", value: "HR8023400091111349129" },
    { label: "Banka", value: "PRIVREDNA BANKA d.d." },
];

function ListSection({
    title,
    rows,
}: {
    title: string;
    rows: { label: string; value: string }[];
}) {
    return (
        <section className="mt-8">
            <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
            <dl className="mt-4 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
                {rows.map(({ label, value }) => (
                    <div
                        key={label}
                        className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:gap-4"
                    >
                        <dt className="min-w-[190px] font-medium text-zinc-700">{label}</dt>
                        <dd className="text-zinc-900">{value}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}

export default function Impressum() {
    // JSON-LD: Organization (E-E-A-T / Trust)
    // Napomena: bez telefona/emaila jer ih niste dali u ovom snippet-u.
    const orgJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Kranex prijevozi d.o.o.",
        legalName: "KRANEX PRIJEVOZI d.o.o. za usluge",
        identifier: [
            { "@type": "PropertyValue", name: "OIB", value: "20423153026" },
            { "@type": "PropertyValue", name: "MBS", value: "06183611" },
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress: "Ulica Hrvatskog proljeća 47",
            postalCode: "10040",
            addressLocality: "Zagreb",
            addressCountry: "HR",
        },
    };

    return (
        <main className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6 md:pt-10 lg:px-8">
            <Script
                id="org-jsonld"
                type="application/ld+json"
                // @ts-ignore
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
            />

            <article className="prose prose-zinc max-w-none">
                <header>
                    <h1 className="mb-2 text-3xl font-bold text-zinc-900">Impressum</h1>
                    <p className="mt-0 text-zinc-600">
                        Službeni podaci o društvu <strong>Kranex prijevozi d.o.o.</strong>{" "}
                        Ova stranica služi radi transparentnosti i provjere identiteta
                        poslovnog subjekta.
                    </p>
                </header>

                <ListSection title="Osnovni podaci" rows={osnovni} />
                <ListSection title="Poslovni podaci" rows={poslovni} />

                <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        Povezane informacije
                    </h2>
                    <p className="mt-2 text-zinc-700">
                        Za upite o uslugama (kamion s kranom, prijevoz građevinskog materijala
                        i istovar na gradilištu), posjetite:
                    </p>
                    <ul className="mt-3 list-disc pl-5">
                        <li>
                            <a href="/kamion-s-kranom-zagreb">Kamion s kranom Zagreb</a>
                        </li>
                        <li>
                            <a href="/prijevoz-gradevinskog-materijala-zagreb">
                                Prijevoz građevinskog materijala Zagreb
                            </a>
                        </li>
                        <li>
                            <a href="/istovar-materijala-na-gradilistu-zagreb">
                                Istovar materijala na gradilištu Zagreb
                            </a>
                        </li>
                    </ul>
                </section>

                <p className="mt-8 text-sm text-zinc-500">
                    Zadnje ažuriranje: 2023-11-01
                </p>
            </article>
        </main>
    );
}