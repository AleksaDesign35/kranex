import type { Metadata } from "next";
import { getAllTekstoviMeta } from "@/lib/korisni-tekstovi";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
    title: "Korisni tekstovi | Savjeti za prijevoz i dizanje tereta | Kranex",
    description:
        "Korisni članci i savjeti o prijevozu građevinskog materijala, kamionu s kranom, istovaru bez viljuškara i dizanju tereta u Zagrebu.",
    alternates: { canonical: "/korisni-tekstovi" },
};

export default function KorisniTekstoviPage() {
    const tekstovi = getAllTekstoviMeta();
    return (
        <main className="mx-auto max-w-[1280px] px-4 pb-16 pt-6 md:pt-10 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-zinc-900">Korisni tekstovi</h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
                Savjeti i korisne informacije o prijevozu tereta, kamionu s kranom, istovaru na gradilištu i dizanju tereta u Zagrebu i okolici.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tekstovi.map(({ slug, meta }) => (
                    <ArticleCard key={slug} slug={slug} meta={meta} />
                ))}
            </ul>
        </main>
    );
}
