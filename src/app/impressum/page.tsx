import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum – Kranex prijevozi",
    description: "Impressum i osnovni podaci Kranex prijevozi d.o.o.",
    alternates: { canonical: "/impressum" },
};

const osobni = [
    { label: "Naziv društva", value: "KRANEX PRIJEVOZI d.o.o. za usluge" },
    { label: "Skraćeni naziv", value: "Kranex prijevozi d.o.o." },
    { label: "Sjedište", value: "Ulica Hrvatskog proljeća 47, 10040 Zagreb" },
    { label: "Država", value: "Republika Hrvatska" },
    { label: "OIB", value: "20423153026" },
    { label: "MBS", value: "06183611" },
    { label: "Upisano u", value: "Trgovački sud u Zagrebu" },
];

const dodatni = [
    { label: "Temeljni kapital", value: "2.500 EUR" },
    { label: "Zastupnik", value: "Antonio Berišić, direktor" },
    { label: "Računi", value: "HR8023400091111349129" },
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
            <dl className="mt-4 divide-y divide-zinc-200">
                {rows.map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-4">
                        <dt className="min-w-[180px] font-medium text-zinc-700">{label}</dt>
                        <dd className="text-zinc-900">{value}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}

export default function Impressum() {
    return (
        <main className="mx-auto max-w-3xl px-4 pb-12 pt-6 md:pt-10 sm:px-6 lg:px-8">
            <article>
                <h1 className="text-3xl font-bold text-zinc-900">Impressum</h1>
                <p className="mt-2 text-zinc-600">Osnovni podaci o društvu</p>
                <ListSection title="Osobni podaci" rows={osobni} />
                <ListSection title="Dodatni podaci" rows={dodatni} />
            </article>
        </main>
    );
}
