import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "Prijevoz građevinskog materijala Zagreb | Kamion s kranom | Kranex prijevozi",
    description:
        "Prijevoz građevinskog materijala u Zagrebu kamionom s kranom. Siguran transport, utovar i istovar direktno na gradilištu. Brza dostupnost i profesionalna usluga.",
};

const FAQ = [
    {
        q: "Koliko košta prijevoz građevinskog materijala u Zagrebu?",
        a: "Cijena ovisi o udaljenosti, vrsti tereta i vremenu rada krana.",
    },
    {
        q: "Da li vršite utovar i istovar kranom?",
        a: "Da, kamion je opremljen dizalicom koja omogućuje kompletan utovar i istovar.",
    },
    {
        q: "Radite li dostavu direktno na gradilište?",
        a: "Da, materijal postavljamo direktno na željenu poziciju.",
    },
];

export default function PrijevozGradevinskogMaterijalaZagreb() {
    return (
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-0 md:pt-10 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-zinc-900">
                Prijevoz građevinskog materijala Zagreb
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                Kranex prijevozi pruža profesionalni prijevoz građevinskog materijala u
                Zagrebu i okolici koristeći{" "}
                <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">
                    kamion s kranom Zagreb
                </Link>{" "}
                koji omogućuje siguran utovar, transport i istovar materijala direktno na
                lokaciji. Specijalizirani smo za prijevoz cigle, blokova, paletiranog
                građevinskog materijala, montažnih elemenata i građevinske opreme za
                privatne investitore, građevinske firme i poslovne korisnike.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                Naša usluga prijevoza građevinskog materijala u Zagrebu omogućuje brzu i
                sigurnu dostavu bez potrebe za dodatnom mehanizacijom jer kamionska
                dizalica obavlja kompletan proces manipulacije teretom.
            </p>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Profesionalni prijevoz građevinskog materijala u Zagrebu
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Prijevoz građevinskog materijala zahtijeva preciznost, iskustvo i
                    odgovarajuću opremu. Naš kamion s kranom omogućuje transport
                    materijala na gradilišta, privatne objekte i poslovne lokacije uz
                    maksimalnu sigurnost i kontrolu tijekom cijelog procesa.
                </p>
                <p className="leading-relaxed text-zinc-700">
                    Organiziramo prijevoz materijala na gradilište u Zagrebu bez
                    dodatnih troškova najma dizalica ili dodatne radne snage, što
                    značajno ubrzava izvođenje građevinskih radova.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">Što prevozimo?</h2>
                <p className="leading-relaxed text-zinc-700">
                    Prevozimo različite vrste građevinskog materijala i opreme, uključujući:
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>ciglu i blokove</li>
                    <li>paletirani građevinski materijal</li>
                    <li>montažne građevinske elemente</li>
                    <li>metalne konstrukcije</li>
                    <li>građevinsku opremu i alate</li>
                    <li>velike i teške elemente za gradnju i renovaciju</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                    Zahvaljujući kamionskoj dizalici moguće je precizno postaviti materijal
                    direktno na željeno mjesto na gradilištu.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Kako izgleda proces prijevoza?
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Proces prijevoza građevinskog materijala organiziran je kako bi klijent
                    dobio kompletnu uslugu bez komplikacija:
                </p>
                <ol className="list-inside list-decimal space-y-2 text-zinc-700">
                    <li>Dogovor termina i procjena tereta</li>
                    <li>Dolazak kamiona s kranom na lokaciju</li>
                    <li>Siguran utovar materijala kranom</li>
                    <li>Transport do odredišta</li>
                    <li>Precizan istovar direktno na gradilištu</li>
                </ol>
                <p className="leading-relaxed text-zinc-700">
                    Ovakav način rada smanjuje vrijeme rada i povećava sigurnost
                    manipulacije materijalom.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Prednosti kamiona s kranom
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Kamion s kranom predstavlja idealno rješenje za prijevoz građevinskog
                    materijala u urbanim područjima poput Zagreba gdje je često ograničen
                    pristup gradilištu.
                </p>
                <p className="leading-relaxed text-zinc-700">Prednosti uključuju:</p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>utovar i istovar bez dodatne mehanizacije</li>
                    <li>brži rad na gradilištu</li>
                    <li>precizno postavljanje materijala</li>
                    <li>smanjenje troškova logistike</li>
                    <li>sigurniji transport teških elemenata</li>
                </ul>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Područje djelovanja Zagreb i okolica
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Uslugu prijevoza građevinskog materijala pružamo na području cijelog
                    Zagreba uključujući Novi Zagreb, Dubravu, Sesvete, Trešnjevku,
                    Črnomerec i Maksimir, kao i okolna mjesta Zaprešić, Velika Gorica i
                    Samobor.
                </p>
                <p className="leading-relaxed text-zinc-700">
                    Dolazak na lokaciju moguć je prema dogovoru, a u većini slučajeva
                    prijevoz je moguće organizirati isti dan.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Zašto odabrati Kranex prijevoze?
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Kranex prijevozi kombinira iskustvo, profesionalnu opremu i fleksibilan
                    pristup svakom projektu.
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>iskusan vozač kamiona s kranom</li>
                    <li>siguran transport materijala</li>
                    <li>dolazak isti dan prema dostupnosti</li>
                    <li>fleksibilni termini rada</li>
                    <li>pouzdana usluga za privatne i poslovne klijente</li>
                </ul>
            </section>

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

            <aside className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-8" aria-label="Poziv na akciju">
                <h2 className="text-xl font-bold text-zinc-900">
                    Trebate siguran prijevoz građevinskog materijala u Zagrebu?
                </h2>
                <p className="mt-3 text-zinc-700">
                    Kontaktirajte nas danas i dogovorite termin prijevoza kamionom s
                    kranom uz brzu i profesionalnu uslugu.
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
