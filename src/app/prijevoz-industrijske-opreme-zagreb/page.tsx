import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Prijevoz industrijske opreme Zagreb | Kamion s kranom | Kranex",
    description:
        "Prijevoz industrijske opreme Zagreb – premještanje agregata, kompresora, generatora. Utovar i istovar dizalicom. Kranex.",
    alternates: { canonical: "/prijevoz-industrijske-opreme-zagreb" },
};

const intro = (
    <>
        <p>
            U dinamičnom poslovnom okruženju Zagreba, učinkovit prijevoz industrijske opreme ključan je za mnoge tvrtke. Bilo da se radi o premještanju agregata, kompresora ili generatora,{" "}
            <Link href="/" className="font-medium text-primary hover:underline">Kranex prijevozi</Link>
            {" "}nudi pouzdana rješenja za sve vaše potrebe. Naša specijalizirana usluga omogućava siguran i pravovremen transport industrijske opreme uz minimalne smetnje u vašem poslovanju.
        </p>
        <p>
            Naša flota kamiona s kranovima dizajnirana je da zadovolji sve zahtjeve vezane uz preseljenje opreme, bez obzira na njenu veličinu ili težinu. Uz profesionalni tim i kvalitetnu opremu, osiguravamo da vaš teret stigne do odredišta brzo i sigurno, bilo da se radi o{" "}
            <Link href="/prijevoz-strojeva-zagreb" className="font-medium text-primary hover:underline">prijevozu strojeva u Zagrebu</Link>
            {" "}ili specifičnom{" "}
            <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">prijevozu teške opreme</Link>.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Prijevoz industrijske opreme potreban je u raznim poslovnim situacijama. Tvrtke koje se bave proizvodnjom, energetikom ili građevinom često trebaju premještanje opreme poput velikih generatora ili kompresora. Ova usluga je idealna i za one koji se bave održavanjem industrijskih postrojenja, kao i za one koji se sele na nove lokacije.</p>
                <p>Usluga je namijenjena i malim i velikim tvrtkama koje traže pouzdan način za transport industrijske opreme. Osim toga, ona je neophodna za sve koji trebaju{" "}
                    <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">prijevoz agregata</Link>
                    {" "}ili bilo koje druge teške opreme unutar urbanih granica Zagreba. Naša stručnost osigurava da čak i najzahtjevniji zadaci budu izvedeni s lakoćom.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Prijevoz industrijske opreme s Kranexom uključuje sveobuhvatnu uslugu koja pokriva svaki aspekt transporta. Od planiranja do konačne isporuke, naš tim je tu da osigura da sve teče glatko. Naša usluga uključuje:</p>
                <ol>
                    <li><strong>Konzultacije i procjena:</strong> Prvi korak je procjena vaših specifičnih potreba i zahtjeva vezanih uz opremu.</li>
                    <li><strong>Planiranje rute:</strong> Odabiremo najoptimalniju rutu koja osigurava brz i siguran transport, uz minimalne zastoje.</li>
                    <li><strong>Utovar opreme dizalicom:</strong> Naše moderno dizalično vozilo omogućuje brz i siguran utovar bez potrebe za dodatnom opremom.</li>
                    <li><strong>Prijevoz i praćenje:</strong> Tijekom transporta, osiguravamo kontinuirano praćenje kako bismo osigurali da sve ide prema planu.</li>
                    <li><strong>Istovar opreme:</strong> Na odredištu, naša ekipa pažljivo vrši istovar, osiguravajući da vaša oprema stigne u besprijekornom stanju.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Naši klijenti često trebaju prijevoz specifične industrijske opreme koja zahtijeva posebnu pažnju i stručnost. Evo nekoliko primjera iz prakse:</p>
                <ul>
                    <li>Prijevoz velikih agregata za energetske tvrtke.</li>
                    <li>Premještanje kompresora za tvrtke koje se bave hlađenjem i klimatizacijom.</li>
                    <li>Transport generatora za hitne intervencije u gradilištima.</li>
                    <li>Preseljenje opreme za nova proizvodna postrojenja.</li>
                    <li>Utovar i istovar opreme na uskim gradskim lokacijama.</li>
                    <li>Prijevoz teške opreme za infrastrukturne projekte.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Korištenje kamiona s kranom za prijevoz industrijske opreme u Zagrebu donosi brojne prednosti. Naša usluga omogućava učinkovito rješavanje logističkih izazova koje postavlja urbano okruženje.</p>
                <ul>
                    <li><strong>Fleksibilnost:</strong> Mogućnost prilagodbe raznim vrstama tereta i lokacijama.</li>
                    <li><strong>Efikasnost:</strong> Brži utovar i istovar zahvaljujući hidrauličkom kranu.</li>
                    <li><strong>Sigurnost:</strong> Minimaliziranje rizika oštećenja opreme tijekom prijevoza.</li>
                    <li><strong>Pristupačnost:</strong> Mogućnost dolaska na teško dostupna mjesta u gradu.</li>
                    <li><strong>Kvaliteta:</strong> Oprema i vozila redovito se održavaju kako bi osigurali besprijekornu uslugu.</li>
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
                <p>Pravilna priprema lokacije ključna je za uspješan transport industrijske opreme. Prije dolaska, pobrinute se da su svi pristupni putevi slobodni i da je područje utovara i istovara jasno označeno. Također, osigurajte dovoljno prostora za manevriranje kamionom i kranom.</p>
                <p>Evo kratke checklist liste za pripremu:</p>
                <ul>
                    <li>Provjerite pristupne puteve i osigurajte da su slobodni.</li>
                    <li>Označite mjesto za utovar i istovar.</li>
                    <li>Osigurajte dovoljno prostora za rad kamiona s kranom.</li>
                    <li>Obavijestite nas o eventualnim posebnim zahtjevima.</li>
                    <li>Provjerite vremenske uvjete i planirajte prema tome.</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koliko unaprijed trebam rezervirati uslugu prijevoza?", a: "Preporučujemo rezervaciju barem nekoliko dana unaprijed, ali možemo organizirati i hitne usluge prema potrebi." },
    { q: "Mogu li pratiti status svog tereta tijekom transporta?", a: "Da, pružamo mogućnost praćenja statusa vašeg tereta u stvarnom vremenu." },
    { q: "Je li moguće organizirati prijevoz izvan Zagreba?", a: "Da, usluge pružamo i u okolici Zagreba prema dogovoru." },
    { q: "Koje vrste industrijske opreme možete prevoziti?", a: "Možemo prevoziti širok spektar opreme, uključujući agregate, kompresore i generatore." },
    { q: "Što ako je moja oprema oštećena tijekom transporta?", a: "U slučaju oštećenja, odmah nas kontaktirajte kako bismo riješili situaciju na obostrano zadovoljstvo." },
];

export default function PrijevozIndustrijskeOpremeZagreb() {
    return (
        <ServicePageLayout
            title="Prijevoz industrijske opreme Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate prijevoz industrijske opreme?"
            ctaSubtitle="Spremni ste za siguran i pouzdan prijevoz industrijske opreme u Zagrebu i okolici? Kontaktirajte nas danas. Bilo da trebate prijevoz strojeva u Zagrebu ili hitni prijevoz, naš tim je ovdje da vam pruži najbolju uslugu."
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="prijevoz-industrijske-opreme-zagreb"
        />
    );
}
