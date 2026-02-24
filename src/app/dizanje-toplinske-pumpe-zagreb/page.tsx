import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Dizanje toplinske pumpe Zagreb | Precizno podizanje kranom | Kranex",
    description:
        "Dizanje toplinske pumpe Zagreb – podizanje na krov ili terasu, transport HVAC uređaja. Usluga dizalice – Kranex.",
    alternates: { canonical: "/dizanje-toplinske-pumpe-zagreb" },
};

const intro = (
    <>
        <p>
            Usluga dizanja toplinske pumpe u Zagrebu zahtijeva preciznost, stručnost i pouzdanu opremu. Bilo da se radi o podizanju toplinske pumpe na krov ili terasu, ili o transportu teške opreme na gradilište, naši{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamioni s kranom Zagreb</Link>
            {" "}osiguravaju da se posao obavi sigurno i učinkovito. Naše iskustvo u dizanju HVAC uređaja i vanjskih jedinica osigurava da sve teče glatko, bez obzira na složenost zadatka.
        </p>
        <p>
            Ako ste suočeni s izazovom postavljanja toplinske pumpe kranom na nepristupačno mjesto, naša usluga dizalice u Zagrebu je vaš najbolji izbor. Nudimo rješenja prilagođena vašim potrebama, bilo da je riječ o dizanju na krov, terasu ili bilo kojoj drugoj lokaciji. Naša usluga je fleksibilna i prilagodljiva, osiguravajući da vaše HVAC jedinice budu pozicionirane točno tamo gdje trebate.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Dizanje toplinske pumpe i HVAC uređaja najčešće je potrebno prilikom postavljanja novih sustava grijanja i hlađenja, ili zamjene starih jedinica. Vlasnici kuća, zgrada i poslovnih prostora u Zagrebu često se suočavaju s izazovom dizanja vanjske jedinice na teško dostupna mjesta poput krova ili terase.</p>
                <p>Ova usluga je posebno korisna za instalatere i građevinske tvrtke koje trebaju precizno i sigurno postavljanje toplinske pumpe kranom. Ako radite na projektu koji uključuje dizanje teške opreme, naš tim će osigurati da se posao izvrši bez zastoja i sigurnosnih rizika.</p>
                <p>Za sve koji planiraju nadogradnju HVAC sustava, pravovremeno angažiranje stručne usluge može značajno smanjiti vrijeme instalacije i rizik od oštećenja opreme.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Usluga dizanja toplinske pumpe uključuje sve od planiranja do završnog postavljanja. Naša ekipa osigurava da svaki korak bude izveden prema najvišim standardima sigurnosti i učinkovitosti. Proces uključuje sljedeće korake:</p>
                <ol>
                    <li><strong>Konzultacija i procjena lokacije:</strong> Naš tim dolazi na vašu lokaciju kako bi procijenio uvjete i planirao najučinkovitiji pristup.</li>
                    <li><strong>Planiranje i koordinacija:</strong> Razvijamo detaljan plan koji uključuje sve aspekte podizanja i postavljanja.</li>
                    <li><strong>Dizanje i transport:</strong> Koristimo specijalizirani{" "}
                        <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">prijevoz kamionom Zagreb</Link>
                        {" "}za siguran transport toplinske pumpe i dizanje na željeno mjesto.</li>
                    <li><strong>Postavljanje na lokaciju:</strong> Postavljanje toplinske pumpe kranom na krov, terasu ili drugo dogovoreno mjesto.</li>
                    <li><strong>Završna provjera i osiguranje:</strong> Pregled i osiguranje da je oprema ispravno postavljena i sigurna za korištenje.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Dizanje toplinske pumpe i slične teške opreme često se odvija u raznim situacijama gdje je preciznost ključna. Evo nekoliko primjera iz naše prakse:</p>
                <ul>
                    <li>Podizanje vanjske jedinice HVAC sustava na krov stambene zgrade.</li>
                    <li>Transport toplinske pumpe kroz uske gradske ulice do mjesta instalacije.</li>
                    <li>Dizanje teške opreme za industrijske objekte.</li>
                    <li>Postavljanje toplinske pumpe kranom na terasu visokokatnice.</li>
                    <li>Dizanje na krov poslovne zgrade za klimatizaciju prostora.</li>
                    <li><Link href="/istovar-materijala-na-gradilistu-zagreb" className="font-medium text-primary hover:underline">Istovar preko ograde</Link> kod privatnih kuća u gusto naseljenim područjima.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Korištenje kamiona s kranom donosi niz prednosti, posebno u urbanom okruženju poput Zagreba:</p>
                <ul>
                    <li><strong>Fleksibilnost:</strong> Mogućnost rada u ograničenim i teško dostupnim prostorima.</li>
                    <li><strong>Efikasnost:</strong> Brzo i precizno postavljanje bez dodatne opreme.</li>
                    <li><strong>Sigurnost:</strong> Minimaliziranje rizika od oštećenja opreme i objekata.</li>
                    <li><strong>Isplativost:</strong> Smanjenje troškova rada zahvaljujući smanjenju potrebne radne snage.</li>
                    <li><strong>Brzina:</strong> Brže dovršavanje projekata uz manje zastoje.</li>
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
                <p>Priprema lokacije ključno je za brzo i sigurno dizanje HVAC uređaja. Evo što je potrebno:</p>
                <ul>
                    <li>Osigurajte dovoljan prostor za pristup kamiona s kranom.</li>
                    <li>Provjerite ima li prepreka poput drveća ili žica koje mogu ometati rad.</li>
                    <li>Najavite sve posebne uvjete lokacije koji bi mogli utjecati na proces.</li>
                    <li>Pripremite sve potrebne dozvole za rad na javnim površinama.</li>
                    <li>Osigurajte prisutnost odgovorne osobe koja će koordinirati s našim timom.</li>
                </ul>
                <p className="font-semibold">Checklist za pripremu:</p>
                <ul>
                    <li>Prostor za kamion i kran je očišćen i dostupan.</li>
                    <li>Svi potrebni dokumenti i dozvole su osigurani.</li>
                    <li>Kontakt osoba je dostupna na dan dolaska.</li>
                    <li>Provjereni su svi sigurnosni uvjeti.</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koliko traje proces dizanja toplinske pumpe?", a: "Vrijeme potrebno za dizanje ovisi o kompleksnosti lokacije, ali obično traje nekoliko sati." },
    { q: "Možete li raditi u uskim ulicama Zagreba?", a: "Da, naši kamioni s kranom su prilagođeni za rad u urbanim područjima." },
    { q: "Je li potrebna posebna dozvola za dizanje na krov?", a: "Da, često su potrebne dozvole, osobito ako se radi na javnim površinama." },
    { q: "Možete li dizati opremu na više od 20 metara visine?", a: "Naš kran ima maksimalnu visinu dizanja od 20 metara. Za veće visine, kontaktirajte nas za dodatne informacije." },
    { q: "Kako osiguravate sigurnost tijekom dizanja?", a: "Koristimo najmoderniju opremu i provodimo sve potrebne sigurnosne mjere." },
];

export default function DizanjeToplinskePumpeZagreb() {
    return (
        <ServicePageLayout
            title="Dizanje toplinske pumpe Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate dizanje toplinske pumpe?"
            ctaSubtitle="Ako trebate pouzdanu uslugu dizanja toplinske pumpe u Zagrebu i okolici, naš tim je spreman pomoći. Kontaktirajte nas danas kako bismo dogovorili konzultaciju i osigurali preciznu ponudu. Posjetite i stranicu za prijevoz industrijske opreme Zagreb za dodatne informacije."
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="dizanje-toplinske-pumpe-zagreb"
        />
    );
}
