import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Dizanje agregata i kompresora Zagreb | Prijevoz i podizanje | Kranex",
    description:
        "Dizanje agregata i kompresora Zagreb – prijevoz, utovar i istovar teške opreme. Dizanje na kat i krov. Kranex.",
    alternates: { canonical: "/dizanje-agregata-kompresora-zagreb" },
};

const intro = (
    <>
        <p>
            U urbanom okruženju kao što je Zagreb, potreba za specijaliziranim prijevozom i podizanjem teške opreme je svakodnevica. Naša usluga dizanja agregata i kompresora omogućava jednostavno premještanje i instalaciju ove opreme na teško dostupnim lokacijama. Bilo da se radi o{" "}
            <Link href="/prijevoz-industrijske-opreme-zagreb" className="font-medium text-primary hover:underline">prijevozu industrijske opreme u Zagrebu</Link>
            {" "}ili postavljanju generatora na krov, naš tim osigurava preciznost i sigurnost na svakom koraku.
        </p>
        <p>
            Rukovanje agregatima, kompresorima i generatorima zahtijeva pažljivo planiranje i stručnu izvedbu. Naš specijalizirani kamion s kranom osigurava da sve faze, od utovara do konačnog postavljanja, budu izvedene učinkovito i bez rizika za opremu ili ljude. Otkrijte kako možemo unaprijediti vaše projekte brzim i pouzdanim rješenjima.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Dizanje agregata i kompresora najpotrebnije je građevinskim tvrtkama, industrijskim postrojenjima i tvrtkama koje se bave održavanjem i instalacijom opreme. Posebice u slučajevima kada se oprema treba postaviti na visine, kao što su krovovi ili viši katovi zgrada. Usluga je također korisna u hitnim situacijama kada je potrebna brza reakcija zbog kvara ili potrebe za zamjenom opreme.</p>
                <p>Osim građevinskog sektora, naša usluga je idealna i za event menadžere koji trebaju instalirati agregate i kompresore za velike događaje. Dizanje na krov ili kat omogućava postavljanje opreme bez ometanja drugih aktivnosti na terenu. S obzirom na specifičnosti Zagreba, često radimo na lokacijama gdje je pristup ograničen, čime naša sposobnost preciznog pozicioniranja opreme dolazi do izražaja.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga dizanja agregata i kompresora uključuje sve korake potrebne za siguran i efikasan transport i pozicioniranje opreme. Od inicijalnog kontakta do završne inspekcije, svaki korak je pomno planiran kako bi se osigurala maksimalna učinkovitost.</p>
                <ol>
                    <li><strong>Konzultacije i planiranje:</strong> Prvi korak uključuje detaljan pregled zahtjeva klijenta i lokacije. Na temelju toga, izrađujemo plan dizanja koji uključuje sve tehničke specifikacije i sigurnosne mjere.</li>
                    <li><strong>Priprema opreme za transport:</strong> Prijevoz agregata i kompresora započinje adekvatnim pakiranjem i osiguranjem opreme za transport.</li>
                    <li><strong>Prijevoz i utovar:</strong> Naš{" "}
                        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom u Zagrebu</Link>
                        {" "}dolazi na lokaciju, gdje se oprema pažljivo utovara i osigurava za transport.</li>
                    <li><strong>Dizanje i pozicioniranje:</strong> Nakon dolaska na lokaciju, kranom se vrši dizanje na kat ili krov, prema potrebi, uz precizno pozicioniranje.</li>
                    <li><strong>Završna provjera i puštanje u rad:</strong> Na kraju, provodimo završnu provjeru postavljene opreme kako bismo osigurali njenu ispravnost i spremnost za korištenje.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Naša usluga obuhvaća širok spektar scenarija u kojima je potrebno dizanje teške opreme. Bez obzira na specifične zahtjeve, naš tim je spreman odgovoriti na svaki izazov.</p>
                <ul>
                    <li>Premještanje agregata za gradilišta u centru Zagreba.</li>
                    <li>Dizanje kompresora na krov industrijske hale.</li>
                    <li>Transport generatora za potrebe privremenih postrojenja.</li>
                    <li>Utovar teške opreme za koncerte i događaje.</li>
                    <li>Istovar teške opreme za renovaciju objekata.</li>
                    <li>Dizanje na kat za instalaciju opreme u poslovne zgrade.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Kamioni s kranom pružaju niz prednosti koje ih čine idealnim izborom za transport i dizanje teške opreme u Zagrebu.</p>
                <ul>
                    <li><strong>Prilagodljivost:</strong> Sposobnost prilagodbe različitim uvjetima na terenu.</li>
                    <li><strong>Efikasnost:</strong> Brzo i precizno premještanje opreme smanjuje vrijeme zastoja.</li>
                    <li><strong>Sigurnost:</strong> Smanjen rizik od oštećenja opreme i ozljeda.</li>
                    <li><strong>Dostupnost:</strong> Mogućnost rada u uskim ulicama i ograničenim prostorima.</li>
                    <li><strong>Fleksibilnost:</strong> Rješenja prilagođena specifičnim potrebama klijenata.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Tehničke specifikacije kamiona s kranom",
        children: (
            <>
                <p>Naša usluga izvedena je specijaliziranim kamionom s hidrauličkim kranom čije karakteristike omogućuju siguran i učinkovit prijevoz.</p>
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
                <p>Priprema lokacije ključna je za brzu i sigurnu izvedbu usluge. Prije dolaska, važno je označiti točno mjesto istovara i osigurati da je pristup slobodan od prepreka.</p>
                <ul>
                    <li>Provjerite dostupnost prilaznih puteva.</li>
                    <li>Osigurajte dovoljan prostor za manevriranje kamiona.</li>
                    <li>Potvrdite da su svi potrebni dozvoli i suglasnosti pribavljeni.</li>
                    <li>Osigurajte da je teren stabilan i prikladan za podizanje teške opreme.</li>
                    <li>Obavijestite nas o specifičnim zahtjevima ili mogućim preprekama.</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koliko traje proces dizanja agregata?", a: "Vrijeme potrebno za dizanje agregata ovisi o specifičnostima lokacije i zahtjevima projekta. Obično traje nekoliko sati uz prethodnu pripremu." },
    { q: "Možete li obaviti uslugu na teško dostupnim lokacijama?", a: "Da, naš kamion s kranom dizajniran je za rad u urbanim i ograničenim prostorima, omogućujući pristup i najtežim lokacijama." },
    { q: "Je li moguće izvršiti hitni prijevoz opreme?", a: <>Naravno, nudimo <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitni prijevoz u Zagrebu</Link> za situacije koje zahtijevaju brzu reakciju.</> },
    { q: "Koje mjere sigurnosti primjenjujete?", a: "Primjenjujemo sve potrebne sigurnosne mjere, uključujući osiguranje opreme tijekom transporta i dizanja, te pridržavanje svih relevantnih propisa." },
    { q: "Možete li raditi bez viljuškara?", a: <>Da, naš <Link href="/istovar-bez-viljuskara-zagreb" className="font-medium text-primary hover:underline">istovar bez viljuškara u Zagrebu</Link> omogućuje precizno rukovanje opremom bez potrebe za dodatnom opremom.</> },
];

export default function DizanjeAgregataKompresoraZagreb() {
    return (
        <ServicePageLayout
            title="Dizanje agregata i kompresora Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate dizanje agregata i kompresora?"
            ctaSubtitle="Ako trebate pouzdano i učinkovito dizanje agregata i kompresora u Zagrebu i okolici, obratite nam se. Naša usluga osigurava brzinu, preciznost i sigurnost. Kontaktirajte nas danas i zatražite ponudu."
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="dizanje-agregata-kompresora-zagreb"
        />
    );
}
