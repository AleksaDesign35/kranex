import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import SubpageGallery from "@/components/SubpageGallery";

export const metadata: Metadata = {
    title: "Prijevoz kamionom Zagreb | Kamionski transport i dostava – Kranex",
    description:
        "Pouzdan prijevoz kamionom u Zagrebu. Transport robe, građevinskog materijala i dostava uz mogućnost utovara kranom. Brza i sigurna usluga.",
    alternates: { canonical: "/prijevoz-kamionom-zagreb" },
};

const FAQ = [
    {
        q: "Kako naručiti prijevoz kamionom?",
        a: "Kontaktirajte nas telefonski ili putem obrasca. Dogovorit ćemo vrstu tereta, lokaciju i termin. Ponuda je besplatna.",
    },
    {
        q: "Kolika je cijena prijevoza?",
        a: "Cijena ovisi o udaljenosti, vrsti i količini tereta te vremenu rada. Na temelju vaših podataka damo vam jasnu ponudu bez obveze.",
    },
    {
        q: "Može li kamion doći isti dan?",
        a: "U većini slučajeva da, ovisno o dostupnosti. Za hitan prijevoz nazovite nas što prije kako bismo provjerili raspored.",
    },
    {
        q: "Da li nudite utovar kranom?",
        a: "Da. Nudimo prijevoz kamionom s kranom – utovar i istovar obavljamo direktno na lokaciji bez dodatne mehanizacije.",
    },
];

export default function PrijevozKamionomZagreb() {
    return (
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-6 md:pt-10 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-zinc-900">
                Prijevoz kamionom Zagreb – Brza i sigurna dostava tereta
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
                Ako vam je potreban pouzdan prijevoz kamionom u Zagrebu i okolici, Kranex Prijevozi nudi profesionalnu uslugu transporta robe, građevinskog materijala i teških tereta uz siguran utovar i istovar. Dugogodišnje iskustvo i moderna oprema omogućuju nam brz, efikasan i siguran prijevoz za privatne osobe i tvrtke.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
                Obavljamo kamionski prijevoz na gradilišta, poslovne lokacije i privatne adrese, uz fleksibilne termine i dolazak prema dogovoru.
            </p>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Profesionalni kamionski prijevoz za firme i privatne klijente
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Naša usluga prijevoza kamionom prilagođena je različitim vrstama tereta. Bez obzira trebate li dostavu građevinskog materijala, transport paletirane robe ili prijevoz većih predmeta, osiguravamo sigurno rukovanje i pravovremenu isporuku.
                </p>
                <p className="leading-relaxed text-zinc-700">
                    Najčešće usluge uključuju:
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>
                        <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">
                            prijevoz građevinskog materijala
                        </Link>
                    </li>
                    <li>transport robe na paletama</li>
                    <li>dostavu materijala na gradilište</li>
                    <li>prijevoz strojeva i opreme</li>
                    <li>selidbe težih predmeta</li>
                    <li>kamion prijevoz po Zagrebu i okolici</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                    Radimo s privatnim investitorima, građevinskim firmama, trgovinama i proizvodnim tvrtkama.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Prijevoz kamionom uz utovar i istovar kranom
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Po potrebi nudimo i{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">
                        prijevoz kamionom s kranom
                    </Link>
                    , što omogućuje jednostavan transport tereta koji nije moguće ručno utovariti ili istovariti.
                </p>
                <p className="leading-relaxed text-zinc-700">
                    Kran omogućuje:
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>dizanje materijala na visinu</li>
                    <li>istovar direktno na gradilište</li>
                    <li>podizanje paleta preko prepreka</li>
                    <li>sigurno rukovanje teškim predmetima</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                    Ova usluga značajno ubrzava radove i smanjuje potrebu za dodatnom mehanizacijom.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Usluga prijevoza Zagreb – brzo, fleksibilno i pouzdano
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Znamo koliko je u građevini i logistici važna točnost. Zato nudimo brzu organizaciju prijevoza i mogućnost dolaska u kratkom roku.
                </p>
                <p className="leading-relaxed text-zinc-700">
                    Prednosti naše usluge:
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>dogovor termina bez čekanja</li>
                    <li>pouzdan kamionski transport</li>
                    <li>siguran prijevoz robe</li>
                    <li>iskustvo rada na gradilištima</li>
                    <li>profesionalni vozači i oprema</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                    Usluga prijevoza dostupna je na području Zagreba i okolnih naselja. Za{" "}
                    <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">
                        hitni prijevoz Zagreb
                    </Link>
                    {" "}kontaktirajte nas za brzu ponudu.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Kada vam je potreban prijevoz kamionom?
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Naši klijenti nas najčešće angažiraju za:
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>dostavu cigle, blokova i građevinskog materijala</li>
                    <li>transport konstrukcija i opreme</li>
                    <li>prijevoz velikih kupnji iz trgovina</li>
                    <li>selidbu teških predmeta</li>
                    <li>prijevoz industrijske robe</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                    Ako niste sigurni je li vaš teret pogodan za kamionski prijevoz, slobodno nas kontaktirajte — savjetovat ćemo najbolje rješenje.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Područje rada
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Prijevoz kamionom obavljamo na području:
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>Zagreb</li>
                    <li>Novi Zagreb</li>
                    <li>Sesvete</li>
                    <li>Velika Gorica</li>
                    <li>Zaprešić</li>
                    <li>Samobor</li>
                    <li>okolica Zagreba</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                    Po dogovoru moguće su i šire relacije.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Zašto odabrati Kranex Prijevoze?
                </h2>
                <p className="leading-relaxed text-zinc-700">
                    Kombinacija iskustva, moderne opreme i fleksibilnog pristupa čini nas pouzdanim partnerom za kamionski prijevoz u Zagrebu.
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>dugogodišnje iskustvo u transportu</li>
                    <li>specijalizacija za građevinski prijevoz</li>
                    <li>mogućnost transporta kranom</li>
                    <li>brza komunikacija i dogovor</li>
                    <li>sigurna dostava bez oštećenja</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                    Naš cilj je jednostavan — omogućiti klijentima brz i siguran transport bez komplikacija.
                </p>
            </section>

            <aside className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8" aria-label="Poziv na akciju">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Trebate prijevoz kamionom u Zagrebu?
                </h2>
                <p className="mt-2 text-base leading-relaxed text-zinc-700">
                    Kontaktirajte nas i dogovorite termin prijevoza već danas.
                </p>
                <ul className="mt-4 space-y-2 text-base text-zinc-700">
                    <li>Nazovite nas</li>
                    <li>Pošaljite upit</li>
                    <li>Brzi dolazak na lokaciju</li>
                </ul>
                <Link
                    href="/#kontakt"
                    className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-95"
                >
                    Kontaktirajte nas za ponudu
                </Link>
            </aside>

            <section className="mt-12 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">
                    Često postavljana pitanja – prijevoz kamionom
                </h2>
                <div className="space-y-4">
                    {FAQ.map(({ q, a }) => (
                        <details
                            key={q}
                            className="group rounded-2xl border-2 border-zinc-100 bg-zinc-50 transition-colors hover:border-primary/20 open:border-primary/20 open:bg-white"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-semibold text-zinc-900 [&::-webkit-details-marker]:hidden">
                                <span>{q}</span>
                                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" strokeWidth={2} />
                            </summary>
                            <p className="border-t border-zinc-200 px-5 py-3 text-base text-zinc-600">{a}</p>
                        </details>
                    ))}
                </div>
            </section>

            <SubpageGallery slug="prijevoz-kamionom-zagreb" />
        </main>
    );
}
