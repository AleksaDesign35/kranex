import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Istovar materijala na gradilištu Zagreb | Istovar kranom | Kranex",
    description:
        "Istovar materijala na gradilištu Zagreb kranom. Precizan istovar paleta, na ploču ili na kat, bez viljuškara. Kamion s kranom – Kranex.",
    alternates: { canonical: "/istovar-materijala-na-gradilistu-zagreb" },
};

const intro = (
    <>
        <p>
            U dinamičnom okruženju zagrebačkih gradilišta, efikasan i siguran istovar građevinskog materijala od presudne je važnosti. Naša usluga istovara omogućuje precizan istovar na teško dostupna mjesta poput ploča, katova ili preko ograde, koristeći specijalizirani{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom</Link>
            . Oslonite se na našu stručnost kako bismo vam olakšali rad na terenu, bez potrebe za dodatnom opremom poput viljuškara.
        </p>
        <p>
            Bilo da se radi o{" "}
            <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">transportu i istovaru</Link>
            {" "}velikih paleta cigle ili osjetljivih montažnih elemenata, naš tim je spreman pružiti rješenja prilagođena vašim potrebama. U nastavku saznajte više o tome kako ovaj proces izgleda, kome je namijenjen i zašto se odlučiti za našu uslugu u užurbanom Zagrebu.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Istovar materijala na gradilištu predstavlja ključnu fazu u svakom građevinskom projektu. Ova usluga je idealna za građevinske tvrtke, projektante i izvođače radova koji se suočavaju s izazovom pozicioniranja materijala na teško dostupna mjesta. Kada je pristup gradilištu ograničen ili nepristupačan, naš kamion s kranom omogućuje precizan istovar materijala, štedeći vrijeme i resurse.</p>
                <p>Usluga je posebno korisna na urbanim gradilištima gdje je prostor ograničen, a pristup vozilima otežan. Namijenjena je svima koji traže pouzdan način za istovar paleta i drugih građevinskih elemenata brzo i sigurno, bez potrebe za dodatnom opremom.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga istovara kranom osmišljena je kako bi pojednostavila proces postavljanja građevinskog materijala na željeno mjesto. Sve počinje s detaljnom procjenom vaših potreba i specifičnih uvjeta gradilišta.</p>
                <ol>
                    <li><strong>Kontakt i procjena:</strong> Prvi korak uključuje konzultacije s našim stručnjacima kako bismo razumjeli vaše potrebe i specifične zahtjeve gradilišta.</li>
                    <li><strong>Planiranje transporta:</strong> Organiziramo{" "}
                        <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">prijevoz na gradilište Zagreb</Link>
                        {" "}koristeći naš specijalizirani kamion s kranom.</li>
                    <li><strong>Dolazak na lokaciju:</strong> Na dogovoreni datum dolazimo na lokaciju, spremni za istovar kranom.</li>
                    <li><strong>Izvršenje istovara:</strong> Precizno pozicioniramo materijal na traženo mjesto, bilo da se radi o istovaru na ploču ili{" "}
                        <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">istovaru na kat</Link>
                        .</li>
                    <li><strong>Završna provjera:</strong> Osiguravamo da je sve izvedeno prema planu, s naglaskom na sigurnost i učinkovitost.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>U našoj praksi susrećemo se s raznim scenarijima gdje je građevinski istovar kranom od presudne važnosti. Svaki projekt ima svoje jedinstvene izazove, a mi smo tu da ih riješimo.</p>
                <ul>
                    <li><strong>Cigla i blokovi:</strong> Dostava i istovar na više katove.</li>
                    <li><strong>Montažni elementi:</strong> Pozicioniranje preko ograde u uskim ulicama.</li>
                    <li><strong>Palete s keramikom:</strong> Istovar paleta na ploču unutar ograničenog prostora.</li>
                    <li><strong>Metalne konstrukcije:</strong> Siguran istovar preko ograde u urbanim uvjetima.</li>
                    <li><strong>Drvena građa:</strong> Prebacivanje na teško dostupne lokacije.</li>
                    <li><strong>Izolacijski materijali:</strong> Istovar bez viljuškara za brzu distribuciju.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Korištenje kamiona s kranom za istovar materijala na gradilištu donosi niz prednosti koje ga čine neophodnim alatom na zagrebačkim gradilištima.</p>
                <ul>
                    <li><strong>Fleksibilnost:</strong> Mogućnost rada u uskim prostorima.</li>
                    <li><strong>Preciznost:</strong> Točno pozicioniranje materijala na zahtjevno mjesto.</li>
                    <li><strong>Efikasnost:</strong> Ušteda vremena i smanjenje rada na gradilištu.</li>
                    <li><strong>Sigurnost:</strong> Smanjenje rizika od ozljeda ili oštećenja.</li>
                    <li><strong>Neovisnost:</strong> Istovar bez viljuškara omogućuje bržu i jednostavniju organizaciju.</li>
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
                <p>Priprema gradilišta ključna je za uspješan istovar materijala na gradilištu. Evo nekoliko koraka koje trebate poduzeti kako bi sve prošlo glatko:</p>
                <ul>
                    <li>Osigurajte slobodan pristup gradilištu za naš kamion.</li>
                    <li>Provjerite nosivost podloge na mjestu istovara.</li>
                    <li>Pripremite prostor za skladištenje materijala nakon istovara.</li>
                    <li>Osigurajte da su svi potrebni radnici prisutni za koordinaciju.</li>
                    <li>Informirajte nas o specifičnim zahtjevima ili izazovima.</li>
                </ul>
                <p className="font-semibold">Checklist za pripremu:</p>
                <ul>
                    <li>Provjeriti pristupne puteve</li>
                    <li>Provjeriti nosivost tla</li>
                    <li>Osigurati prostor za istovar</li>
                    <li>Organizirati radnu snagu</li>
                    <li>Komunicirati posebne zahtjeve</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Kako mogu naručiti uslugu istovara?", a: "Kontaktirajte nas putem telefona ili e-maila kako bismo dogovorili sve detalje i termin dolaska." },
    { q: "Koje su prednosti korištenja krana za istovar?", a: "Omogućuje precizno pozicioniranje materijala na teško dostupna mjesta bez potrebe za dodatnom opremom." },
    { q: "Koliko unaprijed trebam rezervirati uslugu?", a: <>Preporučujemo rezervaciju barem nekoliko dana unaprijed, ali za <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitni prijevoz Zagreb</Link> obratite nam se što prije.</> },
    { q: "Možete li istovariti materijal na više katove?", a: "Da, naš kran omogućuje istovar na kat do visine od 20 metara." },
    { q: "Koje vrste tereta možete istovariti?", a: "Specijalizirani smo za istovar paleta, montažnih elemenata, cigle, blokova i drugih građevinskih materijala." },
];

export default function IstovarMaterijalaNaGradilistuZagreb() {
    return (
        <ServicePageLayout
            title="Istovar materijala na gradilištu Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate istovar materijala na gradilištu?"
            ctaSubtitle="Kontaktirajte nas i dogovorite termin istovara već danas."
            faqHeading="Često postavljana pitanja – istovar na gradilištu"
            faq={faq}
            gallerySlug="istovar-materijala-na-gradilistu-zagreb"
        />
    );
}
