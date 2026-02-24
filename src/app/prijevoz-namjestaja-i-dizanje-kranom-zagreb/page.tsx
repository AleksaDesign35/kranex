import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Prijevoz namještaja i dizanje kranom Zagreb – Kranex prijevozi",
    description:
        "Siguran prijevoz namještaja uz mogućnost dizanja kranom na više katova ili teško dostupne lokacije. Idealno za selidbe, dostavu kuhinja i velikih komada namještaja u Zagrebu i okolici.",
    alternates: { canonical: "/prijevoz-namjestaja-i-dizanje-kranom-zagreb" },
};

const intro = (
    <p>
        Kranex prijevozi nudi siguran prijevoz namještaja uz mogućnost dizanja kranom na više katove ili teško dostupne lokacije. Naš{" "}
        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
        {" "}omogućuje precizan istovar bez oštećenja. Idealno za selidbe, dostavu kuhinja i velikih komada namještaja u Zagrebu i okolici.
    </p>
);

const sections: ServicePageSection[] = [
    {
        title: "Zašto kamion s kranom za namještaj?",
        children: (
            <p>
                Pri dostavi velikih komada namještaja – ormara, kuhinja, soba – dizalica omogućuje precizan istovar direktno kroz prozor ili na balkon, bez potrebe za ručnim nošenjem stepenicama. Štedi vrijeme i štiti namještaj od oštećenja.
            </p>
        ),
    },
    {
        title: "Selidbe i dostave",
        children: (
            <p>
                Pokrivamo Zagreb i okolicu. Iskusan vozač, pažljiv pristup teretu. Kontaktirajte nas za besplatnu ponudu – idealno za planirane selidbe, dostavu nove kuhinje ili ostalih velikih komada namještaja.
            </p>
        ),
    },
    {
        title: "Dizanje namještaja kranom u Zagrebu",
        children: (
            <>
                <p>
                    Dizanje namještaja kranom predstavlja sigurno rješenje za transport velikih komada kroz prozor ili balkon, posebno u zgradama bez lifta ili s uskim stubištima.
                </p>
                <p>
                    Kamionska dizalica omogućuje precizan istovar bez rizika od oštećenja namještaja ili zidova.
                </p>
            </>
        ),
    },
    {
        title: "Kada je potreban kamion s kranom za namještaj?",
        children: (
            <>
                <p>Usluga je idealna za:</p>
                <ul>
                    <li>selidbe velikih ormara i kuhinja</li>
                    <li>dostavu namještaja na više katove</li>
                    <li>unos teških elemenata u poslovne prostore</li>
                    <li>montažu kuhinja i velikih instalacija</li>
                </ul>
                <p>
                    Kamion s kranom značajno skraćuje vrijeme selidbe i povećava sigurnost transporta.
                </p>
            </>
        ),
    },
];

export default function PrijevozNamjestajaIDizanjeKranomZagreb() {
    return (
        <ServicePageLayout
            title="Prijevoz namještaja i dizanje kranom Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate prijevoz namještaja kranom?"
            ctaSubtitle="Kontaktirajte nas za besplatnu ponudu – idealno za planirane selidbe i dostavu velikih komada."
            faqHeading="Često postavljana pitanja"
            faq={[]}
            gallerySlug="prijevoz-namjestaja-i-dizanje-kranom-zagreb"
        />
    );
}
