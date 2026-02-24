import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getUslugeHubGroups } from "@/lib/usluge-hub";
import { KONTAKT } from "@/lib/constants";

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

const linkListClass =
    "group flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-left font-medium text-zinc-800 transition hover:border-primary hover:bg-primary/5 hover:text-primary";

function UslugaLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Link href={href} className={linkListClass}>
            <span className="min-w-0">{children}</span>
            <ArrowRight className="shrink-0 size-5 text-zinc-400 transition group-hover:text-primary" aria-hidden />
        </Link>
    );
}

export default function UslugePage() {
    const schema = getItemListSchema();
    return (
        <main className="mx-auto max-w-[1000px] px-4 pb-16 pt-6 md:pt-10 sm:px-6 lg:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <h1 className="text-4xl font-bold text-zinc-900">
                Usluge prijevoza i dizanja tereta u Zagrebu
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
                Kranex pruža profesionalne usluge prijevoza i dizanja tereta u Zagrebu i okolici, uključujući kamion s kranom, prijevoz građevinskog materijala, istovar bez viljuškara, dizanje tereta na kat te hitni prijevoz isti dan. Pokrivamo potrebe gradilišta, privatnih investitora, obrtnika i industrijskih pogona kojima je potrebna sigurna, precizna i pravovremena usluga.
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-700">
                Bez obzira trebate li prijevoz kamionom na gradilište, dostavu materijala na višu etažu, podizanje teških predmeta kroz prozor ili hitnu intervenciju bez čekanja, organiziramo transport i istovar u skladu s realnim uvjetima na terenu. Radimo u užem i širem području Zagreba, uključujući gradske četvrti i okolna naselja.
            </p>

            <section className="mt-12">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Prijevoz građevinskog materijala i dostava na gradilište
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    Građevinski projekti zahtijevaju pouzdanu logistiku i točnu koordinaciju. Nudimo prijevoz građevinskog materijala Zagreb, kao i organizirani prijevoz na gradilište Zagreb uz mogućnost istovara kranom ili bez dodatne mehanizacije.
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-600">Usluge uključuju:</p>
                <ul className="mt-3 grid gap-4 sm:grid-cols-2">
                    <li><UslugaLink href="/prijevoz-gradevinskog-materijala-zagreb">Prijevoz građevinskog materijala Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/prijevoz-na-gradiliste-zagreb">Prijevoz na gradilište Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/prijevoz-kamionom-zagreb">Prijevoz kamionom Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/dostava-cigle-ytonga-kranom-zagreb">Dostava cigle i Ytonga kranom Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/dostava-drvene-grade-kranom-zagreb">Dostava drvene građe kranom Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/dostava-izolacije-kranom-zagreb">Dostava izolacije kranom Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/prijevoz-armature-i-zeljeza-zagreb">Prijevoz armature i željeza Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/prijevoz-knauf-ploca-zagreb">Prijevoz knauf ploča Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/prijevoz-oplate-salunga-zagreb">Prijevoz oplate (šalunga) Zagreb</UslugaLink></li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-zinc-700">
                    Prevozimo paletirani materijal, metalne elemente, drvenu građu, izolaciju, suhomontažni materijal i druge terete potrebne za nesmetan tijek gradnje. U dogovoru s investitorom organiziramo fazne dostave kako bi se izbjegla zagušenja na lokaciji i nepotrebni zastoji.
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Kamion s kranom, dizanje i istovar tereta
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    Kada je potreban precizan istovar ili podizanje tereta na visinu, na raspolaganju je kamion s kranom Zagreb. Ova usluga posebno je korisna na gradilištima bez viljuškara ili u situacijama kada je potrebno podizanje preko prepreka.
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-600">Usluge dizanja i istovara:</p>
                <ul className="mt-3 grid gap-4 sm:grid-cols-2">
                    <li><UslugaLink href="/kamion-s-kranom-zagreb">Kamion s kranom Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/istovar-materijala-na-gradilistu-zagreb">Istovar materijala na gradilištu Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/istovar-bez-viljuskara-zagreb">Istovar bez viljuškara Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/dizanje-paleta-na-kat-zagreb">Dizanje paleta na kat Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/dostava-materijala-na-kat-zagreb">Dostava materijala na kat Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/kamion-s-kranom-zagreb">Istovar preko ograde Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/dizanje-kroz-prozor-zagreb">Dizanje kroz prozor Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/dizanje-preko-balkona-zagreb">Dizanje preko balkona Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/kamion-dizalica-zagreb">Kamion dizalica Zagreb</UslugaLink></li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-zinc-700">
                    Izvodimo istovar paleta, dizanje na ploču, podizanje materijala na kat bez lifta, kao i precizno pozicioniranje tereta u uskim ulicama ili dvorištima. Posebno pazimo na sigurnost tereta i okolnog prostora, uključujući parkirana vozila, fasade i ograde.
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Selidba teških predmeta i industrijski transport
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    Osim građevinskih materijala, specijalizirani smo za prijevoz teških i glomaznih predmeta, kao i industrijsku opremu.
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-600">Usluge uključuju:</p>
                <ul className="mt-3 grid gap-4 sm:grid-cols-2">
                    <li><UslugaLink href="/selidba-teskih-stvari-zagreb">Selidba teških stvari Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/podizanje-sefova-zagreb">Podizanje sefova Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/prijevoz-strojeva-zagreb">Prijevoz strojeva Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/prijevoz-industrijske-opreme-zagreb">Prijevoz industrijske opreme Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/dizanje-toplinske-pumpe-zagreb">Dizanje toplinske pumpe Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/dizanje-klima-uredaja-vanjske-jedinice-zagreb">Dizanje klima uređaja (vanjske jedinice) Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/dizanje-agregata-kompresora-zagreb">Dizanje agregata i kompresora Zagreb</UslugaLink></li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-zinc-700">
                    Obavljamo transport strojeva, premještanje opreme, podizanje HVAC uređaja na krov ili terasu te selidbu radioničke i industrijske opreme. U svakom projektu planiramo pristup, nosivost podloge i sigurnost manipulacije teretom.
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Logistika gradilišta i organizacija opskrbe
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    Za veće projekte nudimo cjelovitu logistiku gradilišta Zagreb – od planiranja dopreme do fazne organizacije isporuka.
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-600">Povezane usluge:</p>
                <ul className="mt-3 grid gap-4 sm:grid-cols-2">
                    <li><UslugaLink href="/logistika-gradilista-zagreb">Logistika gradilišta Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/opskrba-gradilista-materijalom-zagreb">Opskrba gradilišta materijalom Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/preuzimanje-robe-iz-skladista-zagreb">Preuzimanje robe iz skladišta i dostava Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/transport-paleta-robe-zagreb">Transport paleta robe Zagreb</UslugaLink></li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-zinc-700">
                    Preuzimamo robu iz skladišta ili trgovina, organiziramo transport paletirane robe i koordiniramo isporuke prema dinamici gradnje. Time se smanjuju zastoje, nepotrebni troškovi i gužve na lokaciji.
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Hitni prijevoz i intervencije isti dan
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    U situacijama kada je potrebna brza reakcija, dostupne su usluge hitnog prijevoza i dolaska bez dugog čekanja.
                </p>
                <ul className="mt-3 grid gap-4 sm:grid-cols-2">
                    <li><UslugaLink href="/hitni-prijevoz-zagreb">Hitni prijevoz Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/kamion-odmah-zagreb">Kamion odmah Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/interventni-prijevoz-zagreb">Interventni prijevoz Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/prijevoz-isti-dan-zagreb">Prijevoz isti dan Zagreb</UslugaLink></li>
                    <li><UslugaLink href="/brzi-istovar-zagreb">Brzi istovar Zagreb</UslugaLink></li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-zinc-700">
                    Organiziramo hitan istovar, brzu dopremu materijala i interventni prijevoz kada je potrebno reagirati bez odgode. Dostupnost ovisi o trenutnom rasporedu, ali cilj nam je omogućiti što kraće vrijeme dolaska na lokaciju.
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Područje djelovanja
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    Usluge pružamo na području Zagreba i okolice, uključujući gradske četvrti poput Sesveta, Dubrave, Novog Zagreba, Trešnjevke, Črnomerca te okolna mjesta prema dogovoru. Radimo na privatnim gradilištima, poslovnim objektima, industrijskim zonama i stambenim zgradama.
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Kako naručiti uslugu
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    Za organizaciju prijevoza ili dizanja tereta potrebno je navesti:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-base leading-relaxed text-zinc-700">
                    <li>vrstu tereta</li>
                    <li>procijenjenu težinu i dimenzije</li>
                    <li>lokaciju preuzimanja i istovara</li>
                    <li>treba li istovar kranom ili samo transport</li>
                    <li>željeni termin</li>
                </ul>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    Na temelju tih informacija predlažemo optimalno rješenje i dogovaramo termin izvođenja.
                </p>
            </section>

            <aside className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8" aria-label="Poziv na akciju">
                <h2 className="text-2xl font-bold text-zinc-900">Zatražite ponudu</h2>
                <p className="mt-2 text-base leading-relaxed text-zinc-700">
                    Ako vam je potreban kamion s kranom u Zagrebu, prijevoz građevinskog materijala, istovar bez viljuškara ili hitna dostava isti dan, kontaktirajte nas za dogovor. Svaki projekt planiramo prema stvarnim uvjetima na lokaciji, uz fokus na sigurnost i učinkovitost izvedbe.
                </p>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    Za detalje o pojedinoj usluzi odaberite jednu od navedenih stranica ili nas izravno kontaktirajte putem početne stranice.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                        href="/#kontakt"
                        className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-95"
                    >
                        Kontaktirajte nas za ponudu
                    </Link>
                    <a
                        href={KONTAKT.telHref}
                        className="inline-block rounded-lg border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-800 transition hover:bg-zinc-50"
                    >
                        Pozovi odmah
                    </a>
                </div>
            </aside>
        </main>
    );
}
