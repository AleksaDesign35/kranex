import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import SubpageGallery from "@/components/SubpageGallery";

export const metadata: Metadata = {
    title: "Kamion s kranom Zagreb | Najam krana i dizanje tereta | Kranex prijevozi",
    description:
        "Kamion s kranom Zagreb – dizanje tereta, utovar i transport. Profesionalna kamionska dizalica, dolazak isti dan i sigurna usluga.",
    alternates: { canonical: "/kamion-s-kranom-zagreb" },
};

const FAQ = [
    {
        q: "Kolika je cijena kamiona s kranom u Zagrebu?",
        a: "Cijena ovisi o vremenu rada, vrsti tereta i udaljenosti lokacije.",
    },
    {
        q: "Da li kamion s kranom može podizati teret na kat?",
        a: "Da, kamionska dizalica omogućuje podizanje materijala i namještaja na više etaže.",
    },
    {
        q: "Dolazite li isti dan?",
        a: "U većini slučajeva moguće je organizirati dolazak isti dan.",
    },
];

export default function KamionSKranomZagreb() {
    return (
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-6 md:pt-10 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-zinc-900">
                Kamion s kranom Zagreb
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-700">
                Kranex prijevozi nudi uslugu kamiona s kranom u Zagrebu za dizanje,
                utovar i transport različitih vrsta tereta. Naša kamionska dizalica
                omogućuje sigurno rukovanje teškim i glomaznim predmetima bez potrebe za
                dodatnom mehanizacijom ili najmom zasebnog krana.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
                Usluga je idealna za gradilišta,{" "}
                <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">
                    prijevoz građevinskog materijala Zagreb
                </Link>
                , prijevoz paleta, montažne elemente, selidbe većih predmeta i sve
                situacije gdje je potrebno precizno dizanje tereta kranom.
            </p>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Usluga kamiona s kranom u Zagrebu
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Kamion s dizalicom predstavlja praktično rješenje za transport i
                    manipulaciju teretom na jednoj lokaciji. Kombinacija prijevoza i dizanja
                    kranom omogućuje brži rad, niže troškove i veću sigurnost prilikom rada
                    na gradilištu ili privatnom objektu.
                </p>
                <p className="leading-relaxed text-zinc-700">
                    Naš kamion s kranom u Zagrebu koristi se za utovar, prijevoz i istovar
                    materijala direktno na željeno mjesto.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Što uključuje usluga kamionske dizalice?
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Usluga kamiona s kranom uključuje kompletnu logistiku:
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>dolazak kamiona na lokaciju</li>
                    <li>utovar kranom</li>
                    <li>siguran transport tereta</li>
                    <li>dizanje tereta kranom na visinu ili udaljenu poziciju</li>
                    <li>precizan istovar na gradilištu ili objektu</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                    Sve operacije izvodi iskusan vozač krana uz maksimalnu sigurnost rada.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Kada vam je potreban kamion s kranom?
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Kamionska dizalica najčešće se koristi za:
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>dostavu građevinskog materijala na gradilište</li>
                    <li>dizanje paleta cigle i blokova</li>
                    <li>postavljanje montažnih elemenata</li>
                    <li>prijevoz i podizanje namještaja kroz prozor ili balkon</li>
                    <li>manipulaciju teškim konstrukcijama</li>
                    <li>radove na teško dostupnim lokacijama</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                    Zahvaljujući fleksibilnosti, kamion za gradilište omogućuje rad i u
                    urbanim dijelovima Zagreba gdje klasični kranovi nisu praktični.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Prednosti najma kamiona s kranom
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Najam krana u Zagrebu često zahtijeva dodatnu logistiku i visoke troškove.
                    Kamion s kranom predstavlja ekonomičnije rješenje jer kombinira prijevoz
                    i dizanje u jednoj usluzi.
                </p>
                <p className="leading-relaxed text-zinc-700">Prednosti uključuju:</p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>brži početak rada</li>
                    <li>manji troškovi organizacije</li>
                    <li>dolazak isti dan prema dostupnosti</li>
                    <li>precizno pozicioniranje tereta</li>
                    <li>sigurniji utovar i istovar</li>
                </ul>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Područje djelovanja
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Uslugu kamiona s kranom pružamo na području cijelog Zagreba uključujući
                    Novi Zagreb, Dubravu, Sesvete, Trešnjevku, Črnomerec i Maksimir, kao i
                    okolna mjesta Zaprešić, Velika Gorica i Samobor.
                </p>
                <p className="leading-relaxed text-zinc-700">
                    Dolazak je moguć isti dan ovisno o raspoloživosti termina.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Zašto odabrati Kranex prijevoze?
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Kranex prijevozi pruža pouzdanu i profesionalnu uslugu dizanja tereta
                    kranom uz dugogodišnje iskustvo rada na gradilištima.
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>iskusan operater krana</li>
                    <li>siguran rad i stabilna oprema</li>
                    <li>fleksibilni termini</li>
                    <li>brza organizacija prijevoza</li>
                    <li>profesionalan pristup svakom projektu</li>
                </ul>
            </section>

            <SubpageGallery slug="kamion-s-kranom-zagreb" />

            <section className="mt-10 space-y-4" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="text-2xl font-bold text-zinc-900">
                    Često postavljana pitanja
                </h2>
                <div className="space-y-3">
                    {FAQ.map(({ q, a }) => (
                        <article key={q}>
                            <details
                                className="group rounded-lg border border-zinc-200 bg-zinc-50"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 font-semibold text-zinc-900 [&::-webkit-details-marker]:hidden">
                                    <span>{q}</span>
                                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" strokeWidth={2} />
                                </summary>
                                <p className="border-t border-zinc-200 px-4 py-3 text-zinc-700">{a}</p>
                            </details>
                        </article>
                    ))}
                </div>
            </section>

            <aside className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8" aria-label="Poziv na akciju">
                <h2 className="text-xl font-bold text-zinc-900">
                    Trebate kamion s kranom u Zagrebu?
                </h2>
                <p className="mt-3 text-zinc-700">
                    Kontaktirajte nas i dogovorite termin dizanja ili prijevoza tereta uz
                    sigurnu i profesionalnu uslugu.
                </p>
                <Link
                    href="/#kontakt"
                    className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-95"
                >
                    Zatražite ponudu
                </Link>
            </aside>
        </main>
    );
}
