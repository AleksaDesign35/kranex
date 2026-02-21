import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Hitni prijevoz Zagreb – Dolazak isti dan | Kranex prijevozi",
    description:
        "Hitni prijevoz građevinskog materijala i tereta u Zagrebu. Dolazak isti dan, fleksibilni termini. Kontaktirajte nas odmah za brzu ponudu.",
};

export default function HitniPrijevozZagreb() {
    return (
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-0 md:pt-10 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-zinc-900">
                Hitni prijevoz Zagreb
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                Trebate hitan prijevoz građevinskog materijala ili tereta u Zagrebu?
                Kranex prijevozi nudi brzu uslugu – u većini slučajeva dolazak isti dan,
                ovisno o dostupnosti. Brzo organiziramo{" "}
                <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">
                    prijevoz na gradilište Zagreb
                </Link>
                {" "}kada je potrebno.
            </p>
            <section className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-zinc-900">
                    Brz odziv, fleksibilnost
                </h2>
                <p>
                    Razumijemo da gradilišta često zahtijevaju brzu reakciju. Zato
                    nastojimo odgovoriti na upite u najkraćem mogućem roku i organizirati
                    prijevoz čim prije. Fleksibilni termini i iskusan vozač osiguravaju
                    da vaš materijal stigne na vrijeme.
                </p>
                <h2 className="text-xl font-semibold text-zinc-900">
                    Što prevozimo hitno?
                </h2>
                <p>
                    Građevinski materijal (pijesak, šljunak, cigla, beton), palete,
                    metalne konstrukcije, građevinski alat i ostali teret. Kamion s kranom
                    obavlja utovar i istovar direktno na lokaciji. Nazovite nas za
                    besplatnu i brzu ponudu.
                </p>
                <h2 className="text-xl font-semibold text-zinc-900">
                    Hitni prijevoz materijala isti dan
                </h2>
                <p>
                    Gradilišta često zahtijevaju brzu reakciju kada nedostaje materijal
                    ili oprema. Hitni prijevoz u Zagrebu omogućuje organizaciju transporta
                    u kratkom roku, često isti dan, ovisno o dostupnosti.
                </p>
                <p>
                    Kamion s kranom omogućuje brzo rješenje jer obavlja utovar, transport
                    i istovar bez dodatne koordinacije više izvođača.
                </p>
                <h2 className="text-xl font-semibold text-zinc-900">
                    Kada koristiti hitni prijevoz?
                </h2>
                <p>
                    Hitni prijevoz koristi se kada:
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>nedostaje građevinski materijal na gradilištu</li>
                    <li>potrebno je brzo premjestiti opremu</li>
                    <li>kasni isporuka dobavljača</li>
                    <li>potrebno je hitno dizanje tereta kranom</li>
                </ul>
                <p>
                    Brza dostupnost i fleksibilni termini omogućuju nastavak radova bez
                    zastoja.
                </p>
            </section>
            <Link
                href="/#kontakt"
                className="mt-10 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-95"
            >
                Kontaktirajte nas za hitnu ponudu
            </Link>
        </main>
    );
}
