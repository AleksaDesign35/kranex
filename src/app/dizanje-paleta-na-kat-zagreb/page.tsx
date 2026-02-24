import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Dizanje paleta na kat Zagreb | Kran i kamion s dizalicom | Kranex",
    description:
        "Dizanje paleta na kat Zagreb kranom. Dizanje na ploču, međukatnu konstrukciju, preko ograde. Podizanje paletirane robe – Kranex.",
    alternates: { canonical: "/dizanje-paleta-na-kat-zagreb" },
};

const intro = (
    <>
        <p>
            U dinamičnom urbanom okruženju Zagreba, gdje gradilišta često imaju ograničen prostor, dizanje paleta na kat predstavlja izazov koji zahtijeva preciznost i stručnost. Kroz našu uslugu, omogućujemo sigurno i učinkovito dizanje paleta kranom, čime osiguravamo brz i pouzdan transport građevinskog materijala na željeno mjesto, bilo da se radi o katovima, pločama ili međukatnim konstrukcijama.
        </p>
        <p>
            Bez obzira na to radite li u uskim ulicama ili preko ograda, naš specijalizirani{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
            {" "}čini svako podizanje tereta na visinu jednostavnim. Oslobodite se briga oko logistike i fokusirajte se na ono što je zaista važno – napredak vašeg projekta.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Usluga dizanja paleta na kat idealna je za gradilišta gdje klasični viljuškari i druga oprema nisu opcija zbog ograničenog prostora ili pristupa. Ovo je posebno korisno za dizanje materijala na kat u centrima gradova kao što je Zagreb, gdje su ulice često uske i zakrčene. Naš tim je specijaliziran za dizanje na ploču te na međukatne konstrukcije, omogućujući time kontinuiran rad bez zastoja.</p>
                <p>Namijenjena je građevinskim tvrtkama, majstorima, ali i privatnim investitorima koji trebaju brzo i sigurno rješenje za podizanje paletirane robe. Također, dizanje preko ograde omogućuje pristup mjestima koja su inače teško dostupna, čime se štedi vrijeme i resursi.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga uključuje sve potrebne korake za sigurno i efikasno dizanje paleta kranom. Proces je osmišljen kako bi se zadovoljile specifične potrebe svakog klijenta, od početne procjene do konačne isporuke materijala.</p>
                <ol>
                    <li><strong>Procjena lokacije:</strong> Prvo, naš stručni tim dolazi na lokaciju kako bi procijenio uvjete i planirao najbolji pristup za{" "}
                        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">dizanje tereta na visinu</Link>.</li>
                    <li><strong>Priprema opreme:</strong> Naši tehničari pripremaju kamion i kran, prilagođavajući ga specifičnostima terena i zahtjevima projekta.</li>
                    <li><strong>Sigurnosne provjere:</strong> Provodimo detaljne sigurnosne provjere kako bismo osigurali da su svi materijali ispravno učvršćeni i spremni za dizanje.</li>
                    <li><strong>Dizanje i isporuka:</strong> Izvodimo dostavu materijala kranom, osiguravajući precizno pozicioniranje tereta na željeni kat ili konstrukciju.</li>
                    <li><strong>Završna evaluacija:</strong> Nakon isporuke, provodimo završnu evaluaciju kako bismo osigurali zadovoljstvo klijenta i sigurnost na gradilištu.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Naša usluga je savršeno prilagođena za razne situacije koje zahtijevaju podizanje tereta na visinu. Evo nekoliko tipičnih primjera gdje se može primijeniti:</p>
                <ul>
                    <li>Podizanje paleta građevinskog materijala na drugi i treći kat zgrade.</li>
                    <li>Dostava i dizanje u uskim ulicama gdje je pristup ograničen.</li>
                    <li>Dizanje preko ograde za isporuku materijala u unutarnje dvorište.</li>
                    <li>Pružanje podrške kod{" "}
                        <Link href="/istovar-materijala-na-gradilistu-zagreb" className="font-medium text-primary hover:underline">istovara materijala na gradilištu Zagreb</Link>.</li>
                    <li>Podizanje paletirane robe na međukatnu konstrukciju skladišta.</li>
                    <li><Link href="/dostava-cigle-ytonga-kranom-zagreb" className="font-medium text-primary hover:underline">Dostava cigle i Ytonga kranom Zagreb</Link> za završne radove na gradilištu.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Koristimo specijalizirani kamion s kranom koji nudi brojne prednosti za dizanje materijala na kat u Zagrebu. Naša oprema omogućuje jednostavno i sigurno manevriranje u urbanim uvjetima.</p>
                <ul>
                    <li><strong>Efikasnost:</strong> Ubrzava proces isporuke i postavljanja materijala.</li>
                    <li><strong>Fleksibilnost:</strong> Pristup teško dostupnim mjestima poput uskih ulica i visokih katova.</li>
                    <li><strong>Sigurnost:</strong> Minimizira rizik od ozljeda i oštećenja.</li>
                    <li><strong>Preciznost:</strong> Omogućuje točno postavljanje tereta na željeno mjesto.</li>
                    <li><strong>Isplativost:</strong> Smanjuje potrebu za dodatnom opremom i radnom snagom.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Tehničke specifikacije kamiona s kranom",
        children: (
            <>
                <p>Usluga je izvedena specijaliziranim kamionom s hidrauličkim kranom čije karakteristike omogućuju siguran i učinkovit prijevoz.</p>
                <ul>
                    <li><strong>Nosivost vozila:</strong> do 12 tona – stabilan transport građevinskog materijala i paleta bez više transportnih faza.</li>
                    <li><strong>Maksimalni doseg krana:</strong> do 20 m – kran doseže materijal na većim udaljenostima i teško dostupnim mjestima.</li>
                    <li><strong>Maksimalna visina dizanja:</strong> do 20 m – omogućuje podizanje materijala i na više katove bez dodatnih dizalica.</li>
                    <li><strong>Dimenzije tovarnog prostora:</strong> 6,20 m × 2,50 m – prostrana platforma za više paleta i veće elemente.</li>
                    <li><strong>Ravna platforma:</strong> osigurava stabilan i siguran prijevoz osjetljivih ili nepravilnih tereta.</li>
                    <li><strong>Hidraulički kran:</strong> omogućuje utovar i istovar bez viljuškara ili dodatne opreme.</li>
                    <li><strong>Prilagođeno rukovanje:</strong> idealno za palete, ciglu, blokove, montažne elemente i druge građevinske materijale.</li>
                </ul>
                <p>Ove specifikacije čine uslugu idealnom za urbane gradilišne izazove, gdje je pristup blokiran ili ograničen, i gdje je precizna dostava ključna za učinkovit tijek radova.</p>
            </>
        ),
    },
    {
        title: "Kako pripremiti lokaciju i što nam javiti prije dolaska",
        children: (
            <>
                <p>Kako bismo osigurali glatku isporuku, važno je pripremiti lokaciju prije našeg dolaska. Ovo uključuje nekoliko ključnih koraka:</p>
                <ul>
                    <li><strong>Provjerite pristupne puteve:</strong> Osigurajte da su pristupne ceste slobodne i dovoljno prostrane za kamion.</li>
                    <li><strong>Pripremite mjesto istovara:</strong> Očistite prostor gdje će se materijal podići ili isporučiti.</li>
                    <li><strong>Obavijestite susjede:</strong> Ako je potrebno, informirajte susjede o planiranim aktivnostima kako bi izbjegli moguće smetnje.</li>
                </ul>
                <p className="font-semibold">Checklist:</p>
                <ul>
                    <li>Osigurana slobodna ruta za kamion</li>
                    <li>Pripremljen prostor za istovar</li>
                    <li>Obaviješteni susjedi (ako je potrebno)</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Kolika je maksimalna visina na koju možete podići palete?", a: "Naš kran može podići teret do 20 metara visine." },
    { q: "Kako osiguravate sigurnost tijekom dizanja?", a: "Provodimo detaljne sigurnosne provjere prije svakog dizanja i koristimo opremu visoke kvalitete." },
    { q: "Možete li izvoditi uslugu u centru Zagreba?", a: "Da, specijalizirani smo za rad u urbanim područjima, uključujući centar Zagreba." },
    { q: "Je li potrebno dodatno osiguranje tijekom usluge?", a: "Naša usluga uključuje sve potrebne sigurnosne mjere, no dodatno osiguranje je opcionalno." },
    { q: "Možete li podići teret preko visoke ograde?", a: "Da, naš kran omogućuje dizanje tereta preko visokih ograda." },
];

export default function DizanjePaletaNaKatZagreb() {
    return (
        <ServicePageLayout
            title="Dizanje paleta na kat Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate dizanje paleta na kat?"
            ctaSubtitle="Ako vam je potrebna pouzdana usluga dizanja paleta kranom u Zagrebu i okolici, kontaktirajte nas za detaljnu ponudu. Zatražite ponudu danas i uvjerite se u kvalitetu naše usluge."
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="dizanje-paleta-na-kat-zagreb"
        />
    );
}
