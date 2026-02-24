import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Interventni prijevoz Zagreb | Brza reakcija i dolazak | Kranex",
    description:
        "Interventni prijevoz Zagreb – hitna intervencija, brzi prijevoz, prijevoz isti dan, kamion odmah. Kranex.",
    alternates: { canonical: "/interventni-prijevoz-zagreb" },
};

const intro = (
    <>
        <p>
            U dinamičnom urbanom okruženju poput Zagreba, potrebe za interventnim prijevozom često zahtijevaju brzu reakciju i pouzdanost. Bilo da se radi o hitnom podizanju teškog tereta ili prijevozu bez odgode, naša usluga interventnog prijevoza osigurava da vaši zadaci budu riješeni brzo i učinkovito. Svojim specijaliziranim vozilima i iskusnim timom, Kranex nudi brzi prijevoz koji odgovara na sve izazove vezane uz hitni transport u užurbanim gradskim uvjetima.
        </p>
        <p>
            Naša sposobnost da pružimo{" "}
            <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">prijevoz isti dan</Link>
            {" "}čini nas idealnim partnerom za situacije kada je vrijeme od ključne važnosti. Bez obzira trebate li kamion odmah za hitan istovar ili brzo podizanje građevinskog materijala, mi vam stojimo na raspolaganju. Saznajte više o našim uslugama i kako vam možemo pomoći u Zagrebu i okolici.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Interventni prijevoz potreban je u situacijama kada standardni transportni rokovi jednostavno nisu opcija. Ova usluga je idealna za građevinske tvrtke koje se suočavaju s nepredviđenim kašnjenjima, ili za hitne situacije u industriji gdje su potrebni brzi odgovori. Također, služimo tvrtkama koje trebaju{" "}
                    <Link href="/kamion-odmah-zagreb" className="font-medium text-primary hover:underline">žurni prijevoz</Link>
                    {" "}opreme ili materijala zbog nepredviđenih kvarova ili zastoja u proizvodnji.</p>
                <p>Usluga je namijenjena svim poslovnim subjektima u Zagrebu koji se suočavaju s potrebom za{" "}
                    <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">hitnom intervencijom prijevoza</Link>
                    {" "}i ne mogu si priuštiti čekanje. Bilo da je riječ o malim poduzetnicima ili velikim korporacijama, naš tim osigurava da vaši logistički izazovi budu riješeni bez odgode.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga interventnog prijevoza obuhvaća cjelokupni proces od trenutka kada nas kontaktirate do konačne dostave ili podizanja tereta. Sve počinje vašim pozivom ili upitom putem e-maila, gdje ćemo prikupiti sve potrebne informacije o vašim potrebama i vremenskim okvirima.</p>
                <ol>
                    <li><strong>Kontaktiranje našeg tima</strong> – Javite nam se putem telefona ili e-maila kako bismo razumjeli vaše specifične zahtjeve i hitnost situacije.</li>
                    <li><strong>Procjena situacije</strong> – Na temelju prikupljenih informacija, naš tim će procijeniti vrstu i količinu tereta te potrebne resurse za{" "}
                        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">hitni transport</Link>.</li>
                    <li><strong>Organizacija vozila i opreme</strong> – Odmah nakon procjene, organiziramo potrebna vozila i opremu kako bismo osigurali da su na raspolaganju čim prije.</li>
                    <li><strong>Brzi dolazak na lokaciju</strong> – Naš tim dolazi na vašu lokaciju u dogovoreno vrijeme, osiguravajući da{" "}
                        <Link href="/kamion-odmah-zagreb" className="font-medium text-primary hover:underline">kamion odmah</Link>
                        {" "}bude spreman za akciju.</li>
                    <li><strong>Siguran prijevoz i isporuka</strong> – Teret sigurno prevozimo do željene destinacije, osiguravajući da je isporuka ili podizanje obavljeno prema vašim zahtjevima.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <ul>
                    <li>Hitna dostava građevinskog materijala na gradilište zbog nedostatka.</li>
                    <li>Brzi prijevoz medicinske opreme za bolnice.</li>
                    <li>Hitno podizanje teškog stroja s gradilišta.</li>
                    <li>Prijevoz bez odgode opreme za koncerte ili događaje.</li>
                    <li>Žurni prijevoz rezervnih dijelova za proizvodne pogone.</li>
                    <li>Hitan istovar tereta u skladištima.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <ul>
                    <li><strong>Brza reakcija</strong> – Naše usluge omogućuju brzi dolazak na lokaciju bez gubitka vremena.</li>
                    <li><strong>Fleksibilnost</strong> – Kamion s kranom omogućuje prilagodbu različitim vrstama tereta.</li>
                    <li><strong>Sigurnost</strong> – Profesionalno osoblje osigurava sigurno rukovanje i transport tereta.</li>
                    <li><strong>Visoka učinkovitost</strong> – Mogućnost prijevoza i podizanja tereta u jednoj operaciji.</li>
                    <li><strong>Dostupnost</strong> – Usluga dostupna svim dijelovima Zagreba i okolice.</li>
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
                <p>Da bismo osigurali nesmetan tijek usluge, važno je pripremiti lokaciju i osigurati potrebne informacije prije našeg dolaska. Učinite sljedeće:</p>
                <ol>
                    <li>Očistite pristupne putove i osigurajte da su prohodni za kamion.</li>
                    <li>Provjerite da na lokaciji nema prepreka poput niskih kablova ili grana.</li>
                    <li>Pripremite točno mjesto za istovar ili podizanje tereta.</li>
                    <li>Osigurajte prisutnost osobe koja će koordinirati s našim timom na licu mjesta.</li>
                </ol>
            </>
        ),
    },
];

const faq = [
    { q: "Kako brzo možete doći na lokaciju?", a: "Naš tim dolazi na vašu lokaciju u najkraćem mogućem roku, često unutar nekoliko sati od poziva." },
    { q: "Koji su uvjeti korištenja usluge hitnog prijevoza?", a: "Uvjeti ovise o specifičnostima tereta i udaljenosti, a dogovaraju se prilikom poziva." },
    { q: "Možete li prevoziti teret u večernjim satima ili vikendom?", a: "Da, naš tim je dostupan za hitne intervencije i izvan standardnog radnog vremena." },
    { q: "Koliko unaprijed trebam rezervirati uslugu?", a: "Iako preferiramo ranije obavijesti, spremni smo reagirati odmah po pozivu za interventni prijevoz." },
    { q: "Postoji li ograničenje u težini tereta?", a: "Naša vozila mogu prevoziti terete do 12 tona." },
];

export default function InterventniPrijevozZagreb() {
    return (
        <ServicePageLayout
            title="Interventni prijevoz Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate interventni prijevoz?"
            ctaSubtitle={
                <>
                    Ako trebate brzi i pouzdani{" "}
                    <Link href="/" className="font-medium text-primary hover:underline">interventni prijevoz</Link>, naš tim u Zagrebu spreman je odgovoriti na vaše zahtjeve bez odgode. Kontaktirajte nas danas i zatražite besplatnu procjenu ili savjetovanje. Posjetite našu stranicu{" "}
                    <Link href="/" className="font-medium text-primary hover:underline">Kranex prijevozi</Link>
                    {" "}za više informacija o našim uslugama i dostupnosti. Uvjerite se zašto smo prvi izbor za{" "}
                    <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitni prijevoz Zagreb</Link>.
                </>
            }
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="interventni-prijevoz-zagreb"
        />
    );
}
