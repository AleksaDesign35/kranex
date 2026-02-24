import type { Metadata } from "next";
import Link from "next/link";
import { getUslugeHubGroups } from "@/lib/usluge-hub";

const BASE_URL = "https://kranexprijevozi.hr";

export const metadata: Metadata = {
    title: "Usluge prijevoza i dizanja kranom Zagreb | Kranex",
    description:
        "Pregled svih usluga Kranex prijevozi: kamion s kranom, prijevoz građevinskog materijala, hitni prijevoz, dizanje na kat, istovar bez viljuškara, logistika gradilišta i više.",
    alternates: { canonical: "/usluge" },
};

function getItemListSchema() {
    const groups = getUslugeHubGroups();
    const allItems = groups.flatMap((g) => g.items);
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Usluge prijevoza i dizanja kranom Zagreb",
        description: "Kompletna ponuda usluga Kranex prijevozi za Zagreb i okolicu.",
        numberOfItems: allItems.length,
        itemListElement: allItems.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            url: `${BASE_URL}/${item.slug}`,
        })),
    };
}

export default function UslugePage() {
    const groups = getUslugeHubGroups();
    const schema = getItemListSchema();
    return (
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-6 md:pt-10 sm:px-6 lg:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <h1 className="text-4xl font-bold text-zinc-900">
                Usluge prijevoza i dizanja kranom u Zagrebu
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
                Kranex nudi širok raspon usluga kamiona s kranom za Zagreb i okolicu: prijevoz građevinskog materijala, dostavu na gradilište, hitni prijevoz, dizanje tereta na kat, istovar bez viljuškara te logistiku i opskrbu gradilišta. Odaberite uslugu za detalje i ponudu.
            </p>
            <div className="mt-10 space-y-10">
                {groups.map(({ category, items }) => (
                    <section key={category}>
                        <h2 className="text-2xl font-bold text-zinc-900">{category}</h2>
                        <ul className="mt-4 space-y-2">
                            {items.map(({ slug, label }) => (
                                <li key={slug}>
                                    <Link
                                        href={`/${slug}`}
                                        className="font-medium text-primary hover:underline"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
            <aside className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8" aria-label="Poziv na akciju">
                <h2 className="text-2xl font-bold text-zinc-900">Trebate ponudu?</h2>
                <p className="mt-2 text-base leading-relaxed text-zinc-700">
                    Kontaktirajte nas za bilo koju od naših usluga. Brzi odgovor i fleksibilni termini.
                </p>
                <Link
                    href="/#kontakt"
                    className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-95"
                >
                    Kontaktirajte nas za ponudu
                </Link>
            </aside>
        </main>
    );
}
