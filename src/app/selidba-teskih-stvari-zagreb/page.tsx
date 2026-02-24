import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Selidba teških stvari Zagreb | Kamion s kranom | Kranex",
    description:
        "Selidba teških stvari u Zagrebu – prijevoz sefova, strojeva, glomaznog namještaja. Dizanje kroz prozor i preko balkona. Kamion s kranom – Kranex.",
    alternates: { canonical: "/selidba-teskih-stvari-zagreb" },
};

const intro = (
    <>
        <p>
            Selidba teških stvari u urbanim sredinama poput Zagreba može biti izazovan zadatak, pogotovo kada se radi o velikim i glomaznim predmetima poput sefova, strojeva ili masivnog namještaja. U takvim slučajevima, kamion s kranom postaje nezamjenjiv alat. Naša usluga omogućuje prijevoz teških predmeta na brzi i učinkovit način, osiguravajući da vaši predmeti stignu na odredište bez oštećenja. Osim što pružamo sigurnost i efikasnost, naš tim stručnjaka osigurava da cijeli proces bude što manje stresan za klijente. Bez obzira na složenost zadatka, naš pristup je uvijek profesionalan i prilagođen specifičnim potrebama svakog klijenta.
        </p>
        <p>
            Bilo da se radi o dizanju teških stvari kroz prozor ili podizanju preko balkona, naši stručnjaci koriste naprednu opremu kako bi osigurali sigurno i precizno preseljenje opreme. Oslonite se na nas za sve selidbe koje zahtijevaju posebnu pažnju i stručnost.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Usluga selidbe teških stvari posebno je korisna za tvrtke i privatne osobe koje se suočavaju s izazovom premještanja predmeta koji su preteški ili preglomazni za tradicionalne metode selidbe. Ako vaš objekt nema lift ili ako je lift premali za potrebne predmete, selidba bez lifta uz pomoć kamiona s kranom postaje nužnost. Ova usluga je ključna i za one koji se suočavaju s vremenskim ograničenjima, jer omogućuje brže i efikasnije preseljenje u usporedbi s konvencionalnim metodama.</p>
                <p>Podizanje sefova, transport glomaznih predmeta i selidba strojeva su uobičajeni zadaci u industrijama kao što su bankarstvo, proizvodnja i IT sektor. Ova usluga je također idealna za one koji trebaju preseliti velike komade namještaja u stambenim zgradama ili poslovnim prostorima s ograničenim pristupom. Naši klijenti često uključuju muzeje i galerije koji trebaju premjestiti osjetljive umjetnine bez rizika od oštećenja.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga obuhvaća kompletan proces preseljenja teških stvari, od početne procjene do konačnog postavljanja. Evo kako to izgleda:</p>
                <ol>
                    <li><strong>Procjena</strong> – Naš tim dolazi na lokaciju kako bi procijenio zahtjeve selidbe i utvrdio najbolji pristup. Ova faza uključuje detaljno ispitivanje svih potencijalnih prepreka i specifičnih zahtjeva klijenta.</li>
                    <li><strong>Planiranje</strong> – Razvijamo detaljan plan selidbe, uključujući rute i metode dizanja. Planiranje je ključno za izbjegavanje nepredviđenih problema i osiguranje glatkog tijeka operacije.</li>
                    <li><strong>Priprema</strong> – Osiguravamo potrebnu opremu i osposobljavamo prostor za siguran pristup i manevriranje. Priprema uključuje i osiguravanje svih potrebnih dozvola i obavještavanje lokalnih vlasti ako je potrebno.</li>
                    <li><strong>Izvođenje</strong> –{" "}
                        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">Kamion s kranom Zagreb</Link>
                        {" "}koristi se za sigurno dizanje i transport predmeta. Naši operateri su iskusni i obučeni za rukovanje najmodernijom opremom.</li>
                    <li><strong>Postavljanje</strong> – Predmeti se pažljivo postavljaju na odredište prema uputama klijenta. Naš tim osigurava da sve bude postavljeno prema vašim željama i potrebama.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Mnogi se klijenti oslanjaju na nas za rješavanje specifičnih izazova pri selidbi teških i glomaznih predmeta. Evo nekoliko primjera:</p>
                <ul>
                    <li>Podizanje sefova iz podruma banke na gornje katove, što zahtijeva precizno planiranje i koordinaciju.</li>
                    <li>Transport velikih industrijskih strojeva na nova proizvodna mjesta, često u uskim i teško dostupnim prostorima.</li>
                    <li>Selidba klavira kroz prozor zbog uskih hodnika, što zahtijeva posebnu pažnju kako bi se izbjegla oštećenja.</li>
                    <li>Dizanje namještaja na visoke katove u zgradama bez dizala, gdje je brzina ključna za minimaliziranje ometanja stanara.</li>
                    <li>Preseljenje IT opreme u visoke poslovne zgrade, gdje je sigurnost opreme od najveće važnosti.</li>
                    <li>Prijevoz masivnih skulptura u muzeje ili galerije, gdje je potrebna posebna pažnja kako bi se očuvala umjetnička vrijednost predmeta.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Selidba teških stvari u Zagrebu uz pomoć kamiona s kranom nudi niz prednosti koje olakšavaju ovaj zahtjevan proces:</p>
                <ul>
                    <li><strong>Fleksibilnost pristupa</strong> – Omogućuje pristup teško dostupnim mjestima, što je često slučaj u starijim dijelovima grada gdje su ulice uske.</li>
                    <li><strong>Sigurnost</strong> – Minimalizira rizik od oštećenja predmeta i ozljeda, što je posebno važno kod premještanja osjetljive opreme ili umjetnina.</li>
                    <li><strong>Brzina</strong> – Ubrzava proces selidbe u usporedbi s tradicionalnim metodama, omogućujući klijentima da se brzo vrate svojim svakodnevnim aktivnostima.</li>
                    <li><strong>Preciznost</strong> – Omogućava precizno pozicioniranje predmeta na željeno mjesto, što je ključno za zadovoljstvo klijenata.</li>
                    <li><strong>Ušteda resursa</strong> – Smanjuje potrebu za dodatnom radnom snagom i opremom, čime se smanjuju ukupni troškovi selidbe.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Tehničke specifikacije kamiona s kranom",
        children: (
            <>
                <p>Naša usluga selidbe teških stvari izvedena je specijaliziranim kamionom s hidrauličkim kranom čije karakteristike omogućuju siguran i učinkovit prijevoz.</p>
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
                <p>Priprema lokacije za selidbu teških stvari ključna je za uspjeh operacije. Evo nekoliko savjeta:</p>
                <ul>
                    <li><strong>Osigurajte slobodan pristup</strong> – Provjerite ima li kamion dovoljno prostora za manevriranje. Ovo je posebno važno u uskim ulicama ili dvorištima.</li>
                    <li><strong>Obavijestite susjede</strong> – Ako se selidba odvija u stambenoj zgradi, obavijestite susjede o mogućim smetnjama kako biste izbjegli nesporazume.</li>
                    <li><strong>Provjerite infrastrukturu</strong> – Osigurajte da nema prepreka koje bi mogle ometati proces dizanja, poput niskih grana ili kablova.</li>
                </ul>
                <p className="font-semibold">Checklist:</p>
                <ul>
                    <li>Provjerite dimenzije ulaza i izlaza.</li>
                    <li>Osigurajte parkirno mjesto za kamion.</li>
                    <li>Pripremite sve potrebne dozvole za rad.</li>
                    <li>Provjerite vremenske uvjete na dan selidbe.</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Kako se obavlja selidba bez lifta?", a: "Koristimo kamion s kranom za podizanje i spuštanje predmeta kroz prozore ili balkone." },
    { q: "Koliko unaprijed trebam rezervirati uslugu?", a: "Preporučujemo rezervaciju barem tjedan dana unaprijed kako bismo osigurali dostupnost." },
    { q: "Kakve predmete možete preseliti?", a: <>Od sefova do industrijske opreme – uključujući <Link href="/prijevoz-namjestaja-i-dizanje-kranom-zagreb" className="font-medium text-primary hover:underline">prijevoz namještaja i dizanje kranom Zagreb</Link>.</> },
    { q: "Koji su sigurnosni standardi?", a: "Naša oprema i postupci su u skladu s najvišim sigurnosnim standardima, što osigurava sigurnost vaših predmeta i našeg osoblja." },
    { q: "Možete li obaviti hitne selidbe?", a: <>Da, pružamo i <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitni prijevoz Zagreb</Link> prema potrebi.</> },
];

export default function SelidbaTeskihStvariZagreb() {
    return (
        <ServicePageLayout
            title="Selidba teških stvari Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate selidbu teških stvari?"
            ctaSubtitle="Kontaktirajte nas i dogovorite termin već danas."
            faqHeading="Često postavljana pitanja – selidba teških stvari"
            faq={faq}
            gallerySlug="selidba-teskih-stvari-zagreb"
        />
    );
}
