import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Hitna dostava materijala Zagreb | Kamion s kranom isti dan | Kranex",
    description:
        "Hitna dostava materijala Zagreb – hitan prijevoz građevinskog materijala, dostava isti dan, brza dostava na gradilište. Kranex.",
    alternates: { canonical: "/hitna-dostava-materijala-zagreb" },
};

const intro = (
    <>
        <p>
            U brzim ritmovima gradnje, svaka minuta je važna. Kada vrijeme postane kritičan faktor,{" "}
            <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitna dostava materijala</Link>
            {" "}postaje ključna usluga za svakog građevinara u Zagrebu. Naša usluga omogućuje vam da bez stresa i kašnjenja dobijete potrebne materijale na gradilištu, točno kada vam trebaju.
        </p>
        <p>
            Bilo da je riječ o{" "}
            <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">hitan prijevoz građevinskog materijala</Link>
            , ili{" "}
            <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">dostava isti dan</Link>
            , naš tim osigurava da se sve odvija glatko i bez zastoja. Kamion opremljen kranom stiže na vašu lokaciju brzo, smanjujući svaki rizik od kašnjenja u vašem projektu.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Usluga hitne dostave materijala namijenjena je svima koji se suočavaju s nepredviđenim situacijama na gradilištu, poput iznenadnih potreba za dodatnim materijalima ili neplaniranim problemima u opskrbi. Bilo da se radi o velikim građevinskim projektima ili manjim renovacijama, brza dostava na gradilište omogućuje vam nastavak rada bez prekida.</p>
                <p>Posebno je korisna tvrtkama koje ne mogu priuštiti čekanje na standardne termine dostave. Korištenje usluge{" "}
                    <Link href="/kamion-odmah-zagreb" className="font-medium text-primary hover:underline">kamion odmah</Link>
                    {" "}idealno je za hitne situacije gdje je svaki trenutak bitan. Naš tim je specijaliziran za rad u urbanim sredinama poput Zagreba, gdje su prometni uvjeti često izazov.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Hitna dostava materijala uključuje sve od preuzimanja do isporuke, s dodatnom opcijom{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">hitno dizanje paleta</Link>
                    {" "}i{" "}
                    <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">hitan istovar</Link>. Proces je dizajniran da bude što jednostavniji za vas, kako biste se mogli fokusirati na bitne stvari.</p>
                <ol>
                    <li><strong>Poziv i rezervacija:</strong> Kontaktirajte nas telefonom ili putem interneta kako biste dogovorili detalje i potvrdili dostupnost.</li>
                    <li><strong>Priprema materijala:</strong> Naša ekipa organizira brzo preuzimanje materijala iz skladišta ili s druge lokacije.</li>
                    <li><strong>Transport:</strong> Specijalizirani kamion s kranom prevozi materijal do vaše lokacije.</li>
                    <li><strong>Istovar:</strong> Naše osoblje osigurava brzi istovar i pozicioniranje materijala na željeno mjesto.</li>
                    <li><strong>Završna provjera:</strong> Provjeravamo je li sve isporučeno prema dogovoru i zadovoljstvo klijenta.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <ul>
                    <li>Dostava cementa za hitne popravke temelja na gradilištu</li>
                    <li>Hitna doprema drvene građe za krovnu konstrukciju</li>
                    <li>Brzi prijevoz materijala za završne radove u stambenim zgradama</li>
                    <li>Hitan prijevoz pločica za završetak kupaonica u apartmanima</li>
                    <li>Dostava armature za pojačanje konstrukcija</li>
                    <li>Hitno dizanje paleta s ciglom za zidanje</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Kada je riječ o urbanim gradilištima,{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
                    {" "}nudi brojne prednosti. Osim što omogućuje brz i efikasan transport, pruža fleksibilnost i sigurnost.</p>
                <ul>
                    <li><strong>Fleksibilnost u isporuci:</strong> Mogućnost dostave u uskim ulicama i teško dostupnim gradilištima.</li>
                    <li><strong>Sigurnost tereta:</strong> Osigurava stabilan prijevoz bez oštećenja.</li>
                    <li><strong>Učinkovitost:</strong> Brzi utovar i istovar smanjuje vrijeme čekanja.</li>
                    <li><strong>Prilagodljivost:</strong> Može se koristiti za razne vrste tereta i situacije.</li>
                    <li><strong>Kratki rokovi isporuke:</strong> Idealno rješenje za projekte s tijesnim rokovima.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Tehničke specifikacije kamiona s kranom",
        children: (
            <>
                <p>Hitna dostava materijala izvedena je specijaliziranim kamionom s hidrauličkim kranom čije karakteristike omogućuju siguran i učinkovit prijevoz.</p>
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
                <p>Prije dolaska kamiona, važno je osigurati da je lokacija spremna za siguran i efikasan istovar. Evo nekoliko koraka koje trebate poduzeti:</p>
                <ul>
                    <li><strong>Provjerite pristupne puteve:</strong> Osigurajte da su prilazi slobodni od vozila i drugih prepreka.</li>
                    <li><strong>Pripremite prostor za istovar:</strong> Odaberite ravnu i stabilnu površinu za istovar materijala.</li>
                    <li><strong>Obavijestite o eventualnim ograničenjima:</strong> Ako postoje vremenska ograničenja ili specifični uvjeti, obavijestite nas unaprijed.</li>
                </ul>
                <p className="font-semibold">Checklist:</p>
                <ul>
                    <li>Kontaktirajte nas dan prije dostave</li>
                    <li>Provjerite dostupnost lokacije</li>
                    <li>Pripremite sve potrebne dozvole</li>
                    <li>Osigurajte osobu za koordinaciju na terenu</li>
                    <li>Uvjerite se da je oprema za istovar spremna</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koliko brzo možete dostaviti materijal nakon narudžbe?", a: <>U većini slučajeva, možemo organizirati <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">dostavu isti dan</Link>, ovisno o trenutnoj dostupnosti.</> },
    { q: "Koje vrste materijala možete prevoziti?", a: "Možemo transportirati razne građevinske materijale, uključujući ciglu, cement, drvenu građu, armaturu, pločice i još mnogo toga." },
    { q: "Je li potrebno prisustvo na lokaciji tijekom dostave?", a: "Preporučujemo prisutnost odgovorne osobe kako bi se osigurala točnost isporuke i koordinacija istovara." },
    { q: "Kako osiguravate sigurnost tijekom prijevoza?", a: <>Naš tim koristi specijalizirani <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link> sa sigurnosnim standardima za zaštitu tereta.</> },
    { q: "Možete li dostavljati u uske gradske ulice?", a: "Da, naši vozači su iskusni u navigaciji kroz uske i izazovne gradske prostore." },
];

export default function HitnaDostavaMaterijalaZagreb() {
    return (
        <ServicePageLayout
            title="Hitna dostava materijala Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate hitnu dostavu?"
            ctaSubtitle={
                <>
                    Ako vam je potrebna{" "}
                    <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitna dostava materijala</Link>
                    {" "}u Zagrebu i okolici, ne oklijevajte kontaktirati nas. <Link href="/kamion-odmah-zagreb" className="font-medium text-primary hover:underline">Kamion odmah</Link> čeka vašu narudžbu, stoga nas kontaktirajte i osigurajte{" "}
                    <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">brzi prijevoz materijala</Link> danas!
                </>
            }
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="hitna-dostava-materijala-zagreb"
        />
    );
}
