import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Prijevoz isti dan Zagreb | Brz prijevoz i istovar | Kranex",
    description:
        "Prijevoz isti dan Zagreb – dostava isti dan, brzi prijevoz, kamion odmah, hitni prijevoz. Kranex.",
    alternates: { canonical: "/prijevoz-isti-dan-zagreb" },
};

const intro = (
    <>
        <p>
            U dinamičnom svijetu građevine i logistike, mogućnost{" "}
            <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">prijevoza isti dan</Link>
            {" "}može biti ključna za pravovremeno ispunjenje projekata. Naša usluga nudi upravo to: brzi prijevoz i dostavu materijala bez dugog čekanja. Bilo da se radi o hitnom prijevozu građevinskog materijala, preseljenju u zadnji čas ili jednostavno bržoj opskrbi, mi smo tu da osiguramo da vaša roba stigne na odredište sigurno i na vrijeme.
        </p>
        <p>
            U Zagrebu, gdje je promet često izazovan, a gradilišta brojna, fleksibilnost i brzina su od iznimne važnosti. Naš{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
            {" "}omogućuje brzu dopremu i istovar, čak i na najzahtjevnijim lokacijama. Brinemo o svakom detalju i osiguravamo da vaša roba bude na pravom mjestu u dogovoreno vrijeme.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Usluga{" "}
                    <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">prijevoza isti dan</Link>
                    {" "}namijenjena je svima koji se suočavaju s potrebom za hitnim premještanjem ili dostavom materijala. Građevinske tvrtke često trebaju brzu dopremu materijala poput cigli, blokova ili montažnih elemenata kako bi izbjegle zastoj na gradilištu. Također, tvrtke koje se bave uređenjem interijera ili eksterijera mogu koristiti ovu uslugu za brzu selidbu elemenata namještaja ili dekoracija.</p>
                <p>Studenti i mlade obitelji koje se sele unutar Zagreba, a traže{" "}
                    <Link href="/interventni-prijevoz-zagreb" className="font-medium text-primary hover:underline">brzu selidbu</Link>, također mogu iskoristiti našu uslugu. Naš tim je opremljen za brzo i sigurno premještanje kućnih potrepština, bez potrebe za višestrukim putovanjima.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga{" "}
                    <Link href="/kamion-odmah-zagreb" className="font-medium text-primary hover:underline">prijevoza isti dan</Link>
                    {" "}uključuje sve korake potrebne za siguran i učinkovit transport vaše robe. Kada nas kontaktirate, organiziramo sve potrebne detalje kako biste mogli biti sigurni da će sve proći glatko.</p>
                <ol>
                    <li><strong>Prikupljanje informacija</strong> – Prvo se dogovaramo s vama o vrsti tereta, odredištu i vremenskim okvirima.</li>
                    <li><strong>Planiranje rute</strong> – Naši stručnjaci planiraju najbržu i najsigurniju rutu kroz Zagreb.</li>
                    <li><strong>Priprema transporta</strong> –{" "}
                        <Link href="/kamion-odmah-zagreb" className="font-medium text-primary hover:underline">Kamion odmah</Link>
                        {" "}je spreman za utovar i kretanje prema odredištu.</li>
                    <li><strong>Izvođenje transporta</strong> – Naši vozači osiguravaju brzi transport uz pažljivo rukovanje teretom.</li>
                    <li><strong>Istovar i dostava</strong> – Po dolasku na lokaciju, naši operateri obavljaju siguran istovar i pozicioniranje tereta prema vašim uputama.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <ul>
                    <li>Hitna dostava građevinskog materijala na gradilište u centru Zagreba.</li>
                    <li>Brza doprema materijala za uređenje interijera u poslovnim prostorima.</li>
                    <li>Prijevoz teških strojeva za industrijske klijente.</li>
                    <li>Selidba studentskog namještaja iz jednog dijela grada u drugi.</li>
                    <li>Dostava montažnih elemenata za sajmove i izložbe.</li>
                    <li>Rješavanje logistike za renovaciju stambenih objekata.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Koristeći našu uslugu, klijenti uživaju u brojnim prednostima koje nudi{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>. U urbanim sredinama poput Zagreba, gdje su uske ulice i ograničen pristup česti, naš kamion je prilagođen za sve izazove.</p>
                <ul>
                    <li><strong>Fleksibilnost u pristupu</strong> – Omogućuje dolazak do teško dostupnih mjesta.</li>
                    <li><strong>Brzi istovar</strong> – Kran omogućuje brzo i precizno pozicioniranje tereta.</li>
                    <li><strong>Sigurnost</strong> – Osiguravamo siguran prijevoz svih vrsta tereta.</li>
                    <li><strong>Ušteda vremena</strong> –{" "}
                        <Link href="/interventni-prijevoz-zagreb" className="font-medium text-primary hover:underline">Brzi transport</Link>
                        {" "}smanjuje vrijeme čekanja i zastoja.</li>
                    <li><strong>Višenamjenska upotreba</strong> – Idealno za različite vrste tereta i situacije.</li>
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
                <p>Kako bismo osigurali da naš{" "}
                    <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">prijevoz isti dan</Link>
                    {" "}prođe bez problema, važno je pripremiti lokaciju i pružiti nam sve relevantne informacije.</p>
                <p>Prije dolaska, pobrinite se da:</p>
                <ul>
                    <li>Očistite i oslobodite prostor za dolazak kamiona.</li>
                    <li>Osigurate pristupne puteve i eventualna odobrenja za ulazak.</li>
                    <li>Pripremite sve potrebne informacije o teretu (dimenzije, težina).</li>
                    <li>Obavijestite nas o specifičnim zahtjevima ili ograničenjima na lokaciji.</li>
                </ul>
                <p className="font-semibold">Checklist:</p>
                <ul>
                    <li>Pristupni putevi su slobodni.</li>
                    <li>Sve relevantne dozvole su osigurane.</li>
                    <li>Informacije o teretu su spremne.</li>
                    <li>Na lokaciji je osoba za kontakt.</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koje vrste tereta možete prevoziti isti dan?", a: "Možemo prevoziti širok spektar tereta uključujući građevinski materijal, namještaj i industrijsku opremu." },
    { q: "Koliko unaprijed trebam rezervirati uslugu?", a: <>Preporučujemo što ranije, ali možemo organizirati <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitni prijevoz</Link> po potrebi.</> },
    { q: "Postoje li ograničenja u težini ili volumenu tereta?", a: "Naš kamion može prevesti teret do 12 tona uz prostrani tovarni prostor." },
    { q: "Kako se obračunava cijena usluge?", a: "Cijena ovisi o vrsti tereta, udaljenosti i vremenskom okviru dostave." },
    { q: "Mogu li pratiti svoj teret tijekom prijevoza?", a: "Da, nudimo mogućnost praćenja tereta putem GPS-a." },
];

export default function PrijevozIstiDanZagreb() {
    return (
        <ServicePageLayout
            title="Prijevoz isti dan Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate prijevoz isti dan?"
            ctaSubtitle={
                <>
                    Ako vam je potreban{" "}
                    <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">prijevoz isti dan</Link>
                    {" "}u Zagrebu i okolici, kontaktirajte nas danas za brzu i pouzdanu uslugu. Naša ekipa je spremna odgovoriti na sve vaše zahtjeve i osigurati da vaš teret stigne na vrijeme. Bez obzira na specifične potrebe, naš{" "}
                    <Link href="/kamion-odmah-zagreb" className="font-medium text-primary hover:underline">kamion odmah</Link>
                    {" "}i iskusni tim stoje vam na raspolaganju.
                </>
            }
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="prijevoz-isti-dan-zagreb"
        />
    );
}
