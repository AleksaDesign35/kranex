import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Prijevoz namještaja i dizanje kranom Zagreb – Kranex prijevozi",
    description:
        "Siguran prijevoz namještaja uz mogućnost dizanja kranom na više katova ili teško dostupne lokacije. Idealno za selidbe, dostavu kuhinja i velikih komada namještaja u Zagrebu i okolici.",
};

export default function PrijevozNamjestajaIDizanjeKranomZagreb() {
    return (
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-0 md:pt-10 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-zinc-900">
                Prijevoz namještaja i dizanje kranom Zagreb
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                Kranex prijevozi nudi siguran prijevoz namještaja uz mogućnost dizanja
                kranom na više katove ili teško dostupne lokacije. Naš{" "}
                <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">
                    kamion s kranom Zagreb
                </Link>
                {" "}omogućuje precizan istovar bez oštećenja. Idealno za selidbe, dostavu
                kuhinja i velikih komada namještaja u Zagrebu i okolici.
            </p>
            <section className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-zinc-900">
                    Zašto kamion s kranom za namještaj?
                </h2>
                <p>
                    Pri dostavi velikih komada namještaja – ormara, kuhinja, soba –
                    dizalica omogućuje precizan istovar direktno kroz prozor ili na balkon,
                    bez potrebe za ručnim nošenjem stepenicama. Štedi vrijeme i štiti
                    namještaj od oštećenja.
                </p>
                <h2 className="text-xl font-semibold text-zinc-900">
                    Selidbe i dostave
                </h2>
                <p>
                    Pokrivamo Zagreb i okolicu. Iskusan vozač, pažljiv pristup teretu.
                    Kontaktirajte nas za besplatnu ponudu – idealno za planirane selidbe,
                    dostavu nove kuhinje ili ostalih velikih komada namještaja.
                </p>
                <h2 className="text-xl font-semibold text-zinc-900">
                    Dizanje namještaja kranom u Zagrebu
                </h2>
                <p>
                    Dizanje namještaja kranom predstavlja sigurno rješenje za transport
                    velikih komada kroz prozor ili balkon, posebno u zgradama bez lifta ili
                    s uskim stubištima.
                </p>
                <p>
                    Kamionska dizalica omogućuje precizan istovar bez rizika od oštećenja
                    namještaja ili zidova.
                </p>
                <h2 className="text-xl font-semibold text-zinc-900">
                    Kada je potreban kamion s kranom za namještaj?
                </h2>
                <p>
                    Usluga je idealna za:
                </p>
                <ul className="list-inside list-disc space-y-1 text-zinc-700">
                    <li>selidbe velikih ormara i kuhinja</li>
                    <li>dostavu namještaja na više katove</li>
                    <li>unos teških elemenata u poslovne prostore</li>
                    <li>montažu kuhinja i velikih instalacija</li>
                </ul>
                <p>
                    Kamion s kranom značajno skraćuje vrijeme selidbe i povećava sigurnost
                    transporta.
                </p>
            </section>
            <Link
                href="/#kontakt"
                className="mt-10 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-95"
            >
                Kontaktirajte nas za ponudu
            </Link>
        </main>
    );
}
