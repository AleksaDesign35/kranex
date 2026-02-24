import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Dizanje preko balkona Zagreb | Namještaj i teret kranom | Kranex",
    description:
        "Dizanje preko balkona Zagreb – sigurno podizanje namještaja i tereta kranom. Dizanje kuhinje, ormara, sofa. Bez lifta – Kranex.",
    alternates: { canonical: "/dizanje-preko-balkona-zagreb" },
};

const intro = (
    <>
        <p>
            Selidba u Zagrebu često se suočava s izazovima poput uskih ulica i zgrada bez liftova, što otežava prijenos velikih komada namještaja. Za takve situacije, dizanje preko balkona pruža savršeno rješenje. Bez obzira trebate li prenijeti ormare, kuhinje ili sofe, mi osiguravamo sigurno i učinkovito podizanje vaših stvari na željenu lokaciju.
        </p>
        <p>
            Korištenjem specijaliziranog kamiona s kranom, naš tim omogućuje{" "}
            <Link href="/prijevoz-namjestaja-i-dizanje-kranom-zagreb" className="font-medium text-primary hover:underline">sigurno podizanje namještaja</Link>
            {" "}kroz prozor ili balkon. Ova metoda ne samo da štedi vrijeme, već i minimizira rizik od oštećenja vaših stvari i zgrade. Bez obzira na kat na koji trebate dostaviti teret, mi smo tu da posao obavimo profesionalno.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Usluga dizanja preko balkona idealna je za sve koji žive u zgradama bez dovoljno velikih liftova ili gdje dizanje namještaja kroz stepenište nije opcija. Ukoliko se selite u starije zgrade u centru Zagreba, gdje su prolazi uski, naše rješenje dolazi kao naručeno. Također, ako kupujete novi namještaj ili opremate stan, a pristup je otežan, naš tim će se pobrinuti za sigurnu dostavu.</p>
                <p>Ova usluga je također korisna za poslovne prostore koji trebaju brzo i učinkovito postavljanje namještaja ili opreme na više katove. Podizanje na terasu također je često potrebna usluga za ugostiteljske objekte koji zahtijevaju brzu promjenu postava ili ugradnju novih elemenata.</p>
                <p>Bez obzira jeste li privatna osoba ili tvrtka, naš pristup je fleksibilan i prilagođen vašim specifičnim potrebama. Naš stručni tim osigurava da sve bude izvedeno s maksimalnom pažnjom i sigurnošću.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga dizanja namještaja preko balkona uključuje kompletnu logistiku i rukovanje teretom. Od trenutka kada nas kontaktirate, preuzimamo odgovornost za svaki korak procesa.</p>
                <p>Prvo, dolazimo na lokaciju kako bismo procijenili najbolje tehničke i sigurnosne uvjete za dizanje. Na osnovu te procjene, dogovaramo termin koji odgovara vašem rasporedu.</p>
                <ol>
                    <li><strong>Procjena lokacije:</strong> Stručna procjena uvjeta i potrebne opreme.</li>
                    <li><strong>Planiranje:</strong> Detaljno planiranje svakog koraka dizanja i pozicioniranja.</li>
                    <li><strong>Priprema opreme:</strong> Dovođenje specijaliziranog kamiona s kranom na lokaciju.</li>
                    <li><strong>Dizanje:</strong> Sigurno dizanje tereta na željeni kat ili kroz prozor.</li>
                    <li><strong>Postavljanje:</strong> Precizno pozicioniranje i osiguravanje tereta na dolaznoj lokaciji.</li>
                </ol>
                <p>Naš zadatak je učiniti cijeli proces što jednostavnijim za vas, uz minimalnu uključenost s vaše strane, ali uz maksimalnu transparentnost i sigurnost.</p>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>U Zagrebu, gdje su zgrade često starije i bez liftova, dizanje tereta preko balkona postaje nužnost. Naša usluga obuhvaća širok spektar situacija i tereta, a neki od tipičnih primjera uključuju:</p>
                <ul>
                    <li>Podizanje glomaznih stvari poput piano i sefova.</li>
                    <li>Dizanje kuhinje i kuhinjskih elemenata na više katove.</li>
                    <li>Dizanje ormara i velikih komada namještaja koji ne prolaze kroz vrata.</li>
                    <li>Dizanje sofa i garnitura na terasu ili unutar stana.</li>
                    <li><Link href="/dizanje-kroz-prozor-zagreb" className="font-medium text-primary hover:underline">Dizanje kroz prozor</Link> teških aparata kao što su perilice i hladnjaci.</li>
                    <li>Podizanje građevinskog materijala za renovacije.</li>
                </ul>
                <p>Ovi primjeri pokazuju kako naše usluge olakšavaju prijevoz i postavljanje teških tereta na najkompliciranijim lokacijama.</p>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Kamion s kranom predstavlja ključnu komponentu našeg poslovanja, omogućujući sigurno i brzo dizanje. Njegove prednosti u urbanom okruženju Zagreba su brojne:</p>
                <ul>
                    <li>Fleksibilnost u upravljanju teretom na teško dostupnim mjestima.</li>
                    <li>Smanjenje rizika od oštećenja zgrade i namještaja.</li>
                    <li>Ušteda vremena u usporedbi s ručnim prijenosom.</li>
                    <li>Precizno pozicioniranje tereta na željenoj lokaciji.</li>
                    <li>Smanjenje fizičkog napora i korištenje manje radne snage.</li>
                </ul>
                <p>Ove prednosti čine našu uslugu dizanja preko balkona neophodnom za sve koji žele brzo i sigurno premještanje tereta u Zagrebu.</p>
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
                <p>Prije našeg dolaska, važno je pripremiti lokaciju kako bi proces prošao što glatkije. Osigurajte da su prilazi slobodni i da je prostor ispred zgrade čist kako bi kamion nesmetano mogao raditi. Ako postoji potreba za privremenim uklanjanjem prepreka, obavijestite nas unaprijed.</p>
                <p>Evo nekoliko ključnih točaka koje trebate razmotriti:</p>
                <ul>
                    <li>Osigurajte slobodan pristup za kamion i kran.</li>
                    <li>Provjerite može li se balkon ili prozor otvoriti u potpunosti.</li>
                    <li>Uklonite sve prepreke koje bi mogle ometati dizanje.</li>
                    <li>Obavijestite nas o posebnim zahtjevima ili ograničenjima zgrade.</li>
                    <li>Pripremite sve potrebne dozvole ako su potrebne za rad na javnom prostoru.</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koliko vremena traje dizanje namještaja preko balkona?", a: "Vrijeme ovisi o vrsti i količini tereta, ali obično traje između jednog do dva sata." },
    { q: "Je li potrebna posebna dozvola za korištenje krana?", a: "U nekim slučajevima može biti potrebna dozvola, posebno ako se radi na javnom prostoru." },
    { q: "Može li se podići teret u lošim vremenskim uvjetima?", a: "Sigurnost je prioritet, pa se radovi ne izvode u slučaju jakog vjetra ili kiše." },
    { q: "Što ako je balkon previše uzak?", a: <>Naš tim uvijek pronalazi prilagodljiva rješenja, uključujući <Link href="/dizanje-kroz-prozor-zagreb" className="font-medium text-primary hover:underline">dizanje kroz prozor</Link> ako je potrebno.</> },
    { q: "Kako mogu rezervirati uslugu?", a: "Dovoljno je kontaktirati nas putem telefona ili emaila, a mi ćemo dogovoriti sve detalje." },
];

export default function DizanjePrekoBalkonaZagreb() {
    return (
        <ServicePageLayout
            title="Dizanje preko balkona Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate dizanje preko balkona?"
            ctaSubtitle="Ako trebate dizanje preko balkona u Zagrebu ili okolici, kontaktirajte nas. Naša usluga uključuje prijevoz kamionom i prijevoz namještaja s dizanjem kranom. Posjetite našu stranicu za više informacija i zatražite neobvezujuću ponudu već danas."
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="dizanje-preko-balkona-zagreb"
        />
    );
}
