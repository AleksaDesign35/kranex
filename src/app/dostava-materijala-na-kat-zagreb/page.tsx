import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Dostava materijala na kat Zagreb | Kamion s kranom | Kranex",
    description:
        "Dostava materijala na kat Zagreb – na višu etažu, ploču ili krov. Doprema paleta, cigle, Ytonga kranom. Kamion s kranom – Kranex.",
    alternates: { canonical: "/dostava-materijala-na-kat-zagreb" },
};

const intro = (
    <>
        <p>
            U urbanim područjima poput Zagreba, gradilišta često zahtijevaju specijalizirane usluge za dostavu građevinskog materijala na više etaže. Naša usluga „Dostava materijala na kat” idealna je za sve koji trebaju pouzdanu i preciznu dostavu paleta, cigle, Ytonga i drugih materijala na višu etažu, ploču ili krov. Bez obzira na kompleksnost zadatka, naš{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
            {" "}omogućuje sigurno i brzo dizanje materijala, eliminirajući potrebu za dodatnom mehanizacijom.
        </p>
        <p>
            Kada je potrebno podići teret na nepristupačna mjesta ili visoke etaže, naš tim stručnjaka dolazi u pomoć sa specijaliziranom opremom. Ako ste u potrazi za učinkovitom i preciznom dostavom na višu etažu, naši iskusni operateri osigurat će da vaš projekt teče bez zastoja.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Usluga dostave materijala na kat je ključna kada se radi o izgradnji ili renovaciji objekata u Zagrebu, pogotovo onih u stambenim zgradama ili poslovnim kompleksima. Pristup materijalu na višim etažama često je ograničen, što čini našu uslugu izuzetno korisnom.</p>
                <p>Građevinske firme i investitori u Zagrebu često se suočavaju s izazovima dopreme materijala na kat. Naša usluga je namijenjena svima koji traže pouzdano rješenje za dostavu na ploču ili krov, a posebno onima koji rade na projektima u uskim gradskim ulicama gdje je pristup ograničen.</p>
                <p>Bez obzira jeste li u fazi planiranja ili već u tijeku gradnje, naš{" "}
                    <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">prijevoz građevinskog materijala Zagreb</Link>
                    {" "}osigurava da materijal stigne na pravo mjesto u pravo vrijeme, bez nepotrebnih kašnjenja.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga dostave materijala na kat uključuje sve potrebne korake za sigurno i učinkovito podizanje materijala na željenu visinu. Proces je dizajniran da bude što jednostavniji i brži, uz minimalne prekide u vašem radnom danu.</p>
                <ol>
                    <li><strong>Konzultacija i procjena</strong> – Nakon što nas kontaktirate, dolazimo na lokaciju kako bismo procijenili uvjete rada i specifične zahtjeve projekta.</li>
                    <li><strong>Planiranje i dogovor</strong> – Na temelju procjene, dogovaramo optimalno vrijeme i način dostave, vodeći računa o svim sigurnosnim aspektima.</li>
                    <li><strong>Priprema tereta</strong> – Prije dolaska, materijal se priprema za transport kako bi osigurali stabilnost i integritet tijekom dizanja materijala.</li>
                    <li><strong>Dostava i istovar</strong> – Naši operateri izvode{" "}
                        <Link href="/dizanje-paleta-na-kat-zagreb" className="font-medium text-primary hover:underline">dizanje paleta na kat Zagreb</Link>
                        {" "}koristeći naš kamion s kranom, precizno pozicionirajući teret na željenu etažu.</li>
                    <li><strong>Završna provjera i odjava</strong> – Nakon uspješne dostave, provodimo završnu provjeru kako bismo osigurali da je sve prema dogovoru.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>U praksi, naša usluga se koristi za razne vrste građevinskih materijala i situacija. Bez obzira na specifične zahtjeve, naš tim osigurava da svaki teret bude dostavljen sigurno i na vrijeme.</p>
                <ul>
                    <li><strong>Dostava cigle na kat</strong> u stambenim zgradama u centru Zagreba.</li>
                    <li><strong>Dostava ytonga na kat</strong> za renovacije potkrovlja.</li>
                    <li><strong>Dostava paleta na kat</strong> u poslovnim zgradama.</li>
                    <li><strong>Dostava na krov</strong> za postavljanje solarnih panela.</li>
                    <li><strong>Dostava na ploču</strong> tijekom izgradnje novih katova.</li>
                    <li><strong>Dizanje materijala</strong> za hitne popravke krovova.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Naš kamion s kranom nudi brojne prednosti koje olakšavaju izazove dostave u urbanim sredinama poput Zagreba.</p>
                <ul>
                    <li><strong>Fleksibilnost</strong> – Omogućuje dostavu tereta na teško dostupna mjesta.</li>
                    <li><strong>Učinkovitost</strong> – Kombinira transport i dizanje u jednom koraku.</li>
                    <li><strong>Sigurnost</strong> – Minimalizira rizik od oštećenja materijala ili ozljeda na gradilištu.</li>
                    <li><strong>Brzina</strong> – Skraćuje vrijeme potrebno za dopremu materijala na kat.</li>
                    <li><strong>Prilagodljivost</strong> – Može se koristiti za razne vrste materijala i situacija.</li>
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
                <p>Pravilna priprema lokacije ključna je za uspješnu dostavu. Prije dolaska našeg tima, obavezno osigurajte sljedeće:</p>
                <ul>
                    <li><strong>Provjerite pristupačnost</strong> – Uklonite sve prepreke koje bi mogle ometati prilaz kamiona.</li>
                    <li><strong>Osigurajte sigurno mjesto za istovar</strong> – Odaberite stabilnu površinu za istovar materijala.</li>
                    <li><strong>Obavijestite susjede</strong> – Ako je potrebno, obavijestite susjede o mogućem kratkotrajnom ometanju.</li>
                    <li><strong>Provjerite vremenske uvjete</strong> – Osigurajte da vremenski uvjeti neće utjecati na sigurnost operacije.</li>
                </ul>
                <p className="font-semibold">Kratka checklist:</p>
                <ul>
                    <li>Pristupna cesta je slobodna.</li>
                    <li>Materijal je spreman za transport.</li>
                    <li>Osigurana je zona za istovar.</li>
                    <li>Najavljeni su radovi.</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Kako mogu zakazati dostavu materijala na kat?", a: "Kontaktirajte nas putem telefona ili emaila kako bismo dogovorili detalje i termin dostave." },
    { q: "Koja je maksimalna težina tereta koju možete podići?", a: "Naš kamion s kranom može podići teret do 12 tona." },
    { q: "Koje vrste materijala možete dostaviti?", a: "Dostavljamo razne građevinske materijale, uključujući ciglu, Ytong, palete i montažne elemente." },
    { q: "Možete li dostaviti materijal na krov?", a: <>Da, nudimo <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">dostavu na krov</Link> kao dio naših usluga.</> },
    { q: "Što ako se vremenski uvjeti pogoršaju?", a: "U slučaju loših vremenskih uvjeta, možemo prilagoditi termin dostave kako bismo osigurali sigurnost." },
];

export default function DostavaMaterijalaNaKatZagreb() {
    return (
        <ServicePageLayout
            title="Dostava materijala na kat Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate dostavu materijala na kat?"
            ctaSubtitle="Ako vam je potrebna pouzdana i učinkovita dostava materijala na kat u Zagrebu i okolici, kontaktirajte nas. Za više informacija posjetite prijevoz na gradilište Zagreb ili hitni prijevoz Zagreb."
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="dostava-materijala-na-kat-zagreb"
        />
    );
}
