import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Dizanje vanjske jedinice klime Zagreb | Kamion s dizalicom | Kranex",
    description:
        "Dizanje vanjske jedinice klime Zagreb – podizanje na krov, fasadu ili terasu. Dizanje HVAC opreme kranom. Kranex.",
    alternates: { canonical: "/dizanje-klima-uredaja-vanjske-jedinice-zagreb" },
};

const intro = (
    <>
        <p>
            U potrazi ste za profesionalnim rješenjem za dizanje vanjske jedinice klime u Zagrebu? Naša usluga podrazumijeva precizno i sigurno podizanje klima uređaja na krovove, fasade ili terase uz pomoć specijaliziranog{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamiona s kranom Zagreb</Link>
            . Bez obzira na zahtjevnost lokacije, osiguravamo siguran transport i postavljanje klima opreme uz minimalne smetnje.
        </p>
        <p>
            Naša stručnost u dizanju teške opreme osigurava da će vaša vanjska jedinica klime biti postavljena brzo i efikasno. Naš tim ima iskustvo u radu s raznim vrstama zgrada i terena, bilo da se radi o obiteljskim kućama ili poslovnim zgradama u užem centru Zagreba.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Dizanje klima uređaja često je potrebno tijekom obnove ili ugradnje novih sustava klimatizacije. Ako planirate instalaciju klima uređaja na teško dostupnim mjestima, poput visokih krovova ili uskih terasa, naša usluga je idealna za vas. Vlasnici stambenih zgrada, poslovni subjekti i instalateri često nas angažiraju kako bi osigurali sigurno i precizno pozicioniranje vanjskih jedinica.</p>
                <p>U urbanim područjima, gdje je prostor ograničen, dizanje HVAC opreme zahtijeva specijaliziranu opremu i stručnost. Naš{" "}
                    <Link href="/kamion-dizalica-zagreb" className="font-medium text-primary hover:underline">kamion dizalica Zagreb</Link>
                    {" "}omogućuje pristup lokacijama s ograničenim prilazom, gdje tradicionalne metode jednostavno nisu izvedive.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga dizanja vanjske jedinice klime uključuje sve korake potrebne za sigurno i brzo postavljanje. Proces počinje konzultacijama i pregledom lokacije kako bismo razumjeli specifične potrebe vašeg projekta.</p>
                <ol>
                    <li><strong>Procjena lokacije:</strong> Naši stručnjaci dolaze na lice mjesta kako bi procijenili uvjete i planirali pristup.</li>
                    <li><strong>Planiranje operacije:</strong> Razrađujemo detaljni plan podizanja, uključujući potrebne dozvole i sigurnosne mjere.</li>
                    <li><strong>Pozicioniranje opreme:</strong> Naš tim postavlja kran i priprema klima uređaj za podizanje.</li>
                    <li><strong>Podizanje i pozicioniranje:</strong> Izvodimo sigurno podizanje na željenu lokaciju, bilo da je riječ o{" "}
                        <Link href="/dizanje-toplinske-pumpe-zagreb" className="font-medium text-primary hover:underline">podizanju na fasadu</Link>
                        , krovu ili terasi.</li>
                    <li><strong>Završna kontrola:</strong> Osiguravamo pravilno montiranje i funkcionalnost uređaja nakon postavljanja.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Dizanje vanjske jedinice klime može biti izazovno, osobito u urbanim sredinama kao što je Zagreb. Naša usluga pokriva razne situacije i terete:</p>
                <ul>
                    <li>Instalacija vanjske jedinice na visoke stambene zgrade.</li>
                    <li><Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">Podizanje na krov</Link> poslovnih objekata.</li>
                    <li><Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">Dizanje na terasu</Link> u uskim dvorištima.</li>
                    <li>Premještanje klima jedinice s jedne strane zgrade na drugu.</li>
                    <li>Dizanje teške opreme u uvjetima ograničenog prostora.</li>
                    <li>Transport klima opreme na lokacije s kompliciranim prilazom.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Koristeći uslugu krana Zagreb, naš specijalizirani kamion s kranom nudi brojne prednosti:</p>
                <ul>
                    <li><strong>Fleksibilnost pristupa:</strong> Pristup teško dostupnim lokacijama.</li>
                    <li><strong>Precizno pozicioniranje:</strong> Sigurno postavljanje na visoke ili nepristupačne lokacije.</li>
                    <li><strong>Brzina i efikasnost:</strong> Brza realizacija projekta bez dodatnih kašnjenja.</li>
                    <li><strong>Sigurnost operacije:</strong> Profesionalno rukovanje kako bi se izbjegle štete.</li>
                    <li><strong>Ušteda vremena i resursa:</strong> Bez potrebe za dodatnom opremom ili radnom snagom.</li>
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
                <p>Prije dolaska našeg tima, važno je pripremiti lokaciju kako bi operacija prošla bez problema. Evo što trebate učiniti:</p>
                <ul>
                    <li>Osigurajte dovoljan prostor za pristup kamiona.</li>
                    <li>Uklonite sve prepreke koje bi mogle ometati putanju krana.</li>
                    <li>Provjerite jesu li sve potrebne dozvole i suglasnosti pribavljene.</li>
                    <li>Obavijestite nas o svim specifičnim zahtjevima ili ograničenjima.</li>
                </ul>
                <p className="font-semibold">Checklist prije dolaska:</p>
                <ul>
                    <li>Osiguran pristup za kamion i kran</li>
                    <li>Uklonjene prepreke</li>
                    <li>Pribavljene potrebne dozvole</li>
                    <li>Komunikacija specifičnih zahtjeva</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koliko traje postupak dizanja vanjske jedinice klime?", a: "Vrijeme potrebno za dizanje ovisi o kompleksnosti lokacije, ali obično traje između 1 i 3 sata." },
    { q: "Trebam li posebne dozvole za podizanje klime u Zagrebu?", a: "Da, u većini slučajeva bit će potrebne odgovarajuće dozvole. Naš tim vam može pomoći u tom procesu." },
    { q: "Koje su dimenzije i težine limita za transport klima opreme?", a: "Naš kamion može podići do 12 tona, što pokriva većinu klima uređaja." },
    { q: "Mogu li zakazati hitnu uslugu dizanja?", a: <>Da, nudimo <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitni prijevoz Zagreb</Link> prema dogovoru, ovisno o dostupnosti.</> },
    { q: "Je li moguće podizanje klima uređaja u uskim gradskim ulicama?", a: "Da, naš kamion s kranom dizajniran je za pristup uskim i ograničenim prostorima." },
];

export default function DizanjeKlimaUredajaVanjskeJediniceZagreb() {
    return (
        <ServicePageLayout
            title="Dizanje klima uređaja (vanjske jedinice) Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate dizanje vanjske jedinice klime?"
            ctaSubtitle="Ako vam je potrebna pouzdana usluga dizanja vanjske jedinice klime u Zagrebu i okolici, kontaktirajte nas danas. Posjetite naše stranice za dizanje toplinske pumpe Zagreb ili prijevoz kamionom Zagreb za više informacija."
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="dizanje-klima-uredaja-vanjske-jedinice-zagreb"
        />
    );
}
