import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Brzi istovar Zagreb | Istovar kranom bez mehanizacije | Kranex",
    description:
        "Brzi istovar Zagreb – istovar kranom, istovar paleta, istovar bez viljuškara, na gradilištu i u uskim ulicama. Kranex.",
    alternates: { canonical: "/brzi-istovar-zagreb" },
};

const intro = (
    <>
        <p>
            U dinamičnom okruženju Zagreba, gdje su gradilišta često smještena u uskim ulicama ili okružena zgradama,{" "}
            <Link href="/istovar-materijala-na-gradilistu-zagreb" className="font-medium text-primary hover:underline">brzi istovar</Link>
            {" "}postaje ključan za nesmetan tijek radova. Naša usluga istovara kranom omogućuje vam da brzo i učinkovito prebacite materijal na željenu lokaciju, bilo da se radi o paletama građevinskog materijala ili specifičnim teretima koji zahtijevaju preciznost i sigurnost.
        </p>
        <p>
            Korištenje kamiona s kranom za{" "}
            <Link href="/istovar-bez-viljuskara-zagreb" className="font-medium text-primary hover:underline">istovar bez viljuškara</Link>
            {" "}nije samo praktično već i ekonomično, jer uklanja potrebu za dodatnom mehanizacijom. Naš tim stručnjaka osigurava da svaki{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">istovar preko ograde</Link>
            {" "}ili na visoke katove prođe bez problema, omogućujući vam da se fokusirate na važne aspekte vašeg projekta.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Brzi istovar je potreban svima koji rade u dinamičnom okruženju Zagreba, od građevinskih tvrtki do malih izvođača radova. Posebno je koristan kada se radi o{" "}
                    <Link href="/istovar-materijala-na-gradilistu-zagreb" className="font-medium text-primary hover:underline">istovaru na gradilištu</Link>
                    {" "}gdje je svaki sat ključan za dovršetak projekta u zadanom roku. Situacije poput istovara u uskim ulicama ili preko visokih ograda zahtijevaju precizne manevre koje naš specijalizirani tim može izvesti s lakoćom.</p>
                <p>Osim građevinskog sektora, usluga je prikladna i za distribuciju poslovima koji trebaju brzu i sigurnu dostavu teških ili glomaznih tereta. Na primjer, ako vaša tvrtka treba hitni istovar opreme u centru grada, naš kamion s kranom je idealno rješenje.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga{" "}
                    <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">transporta i istovara</Link>
                    {" "}dizalicom obuhvaća sve što trebate za učinkovit prijenos tereta s jedne lokacije na drugu. Proces je jednostavan i personaliziran prema vašim potrebama:</p>
                <ol>
                    <li><strong>Konzultacija i planiranje:</strong> Naša ekipa će s vama detaljno razmotriti sve aspekte istovara kako bi se osigurala sigurnost i učinkovitost.</li>
                    <li><strong>Prilagodba opreme:</strong> Priprema i konfiguracija krana prema specifičnostima vašeg tereta i lokacije.</li>
                    <li><strong>Sigurno pozicioniranje:</strong> Kamion s kranom pozicionira se na optimalno mjesto za pristup teretu.</li>
                    <li><strong>Utovar i istovar dizalicom:</strong>{" "}
                        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">Precizan utovar i istovar</Link>
                        {" "}osiguravaju da teret ne bude oštećen.</li>
                    <li><strong>Završna kontrola:</strong> Na kraju se provjerava je li teret isporučen točno prema zahtjevima klijenta.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <ul>
                    <li>Istovar građevinskog materijala na visoku zgradu.</li>
                    <li>Dostava i istovar montažnih elemenata u uskom dvorištu.</li>
                    <li>Istovar teških strojeva unutar industrijske hale.</li>
                    <li><Link href="/istovar-bez-viljuskara-zagreb" className="font-medium text-primary hover:underline">Istovar paleta brzo</Link> na gradilištu s ograničenim pristupom.</li>
                    <li><Link href="/istovar-materijala-na-gradilistu-zagreb" className="font-medium text-primary hover:underline">Istovar u uskim ulicama</Link> u centru Zagreba.</li>
                    <li>Istovar preko ograde u zatvorenom kompleksu.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Korištenje kamiona s kranom za{" "}
                    <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">brzi istovar</Link>
                    {" "}u Zagrebu donosi niz prednosti koje olakšavaju i ubrzavaju građevinske i logističke procese:</p>
                <ul>
                    <li><strong>Efikasno vrijeme istovara:</strong> Istovari se odvijaju brzo i precizno, smanjujući vrijeme čekanja.</li>
                    <li><strong>Pristup teško dostupnim mjestima:</strong> Kran omogućuje pristup područjima koja su inače teško dostupna.</li>
                    <li><strong>Smanjenje troškova rada:</strong> Nema potrebe za dodatnim radnicima ili opremom poput viljuškara.</li>
                    <li><strong>Fleksibilnost rada:</strong> Korištenje krana omogućuje rad u različitim uvjetima i lokacijama.</li>
                    <li><strong>Sigurnost tereta:</strong> Svaki utovar i istovar obavlja se uz maksimalnu brigu za sigurnost tereta.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Tehničke specifikacije kamiona s kranom",
        children: (
            <>
                <p>Naša usluga je izvedena specijaliziranim kamionom s hidrauličkim kranom čije karakteristike omogućuju siguran i učinkovit prijevoz.</p>
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
                <p>Prije dolaska našeg tima, važno je pripremiti lokaciju kako bi se osigurao siguran i učinkovit{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">utovar i istovar dizalicom</Link>. Evo nekoliko koraka koje možete poduzeti:</p>
                <ol>
                    <li><strong>Očistite pristupne puteve:</strong> Uklonite sve prepreke koje bi mogle ometati kamion ili kran.</li>
                    <li><strong>Ozračite radni prostor:</strong> Osigurajte dovoljno prostora za manevriranje kranom.</li>
                    <li><strong>Provjerite stabilnost tla:</strong> Uvjerite se da je tlo dovoljno stabilno za težinu kamiona i tereta.</li>
                    <li><strong>Komunicirajte posebne zahtjeve:</strong> Obavijestite nas o bilo kakvim specifičnim potrebama ili ograničenjima.</li>
                </ol>
                <p className="font-semibold">Checklist prije dolaska:</p>
                <ul>
                    <li>Jesu li pristupni putevi slobodni?</li>
                    <li>Je li radni prostor dovoljno velik?</li>
                    <li>Je li tlo stabilno?</li>
                    <li>Ima li posebnih zahtjeva?</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Kako brzo možete organizirati istovar?", a: <>Ovisno o dostupnosti, možemo organizirati <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">brzi istovar</Link> u istom danu.</> },
    { q: "Koji su uvjeti za istovar na gradilištu?", a: "Potrebna je stabilna podloga i dovoljno prostora za manevar kamiona i krana." },
    { q: "Možete li istovariti preko ograde?", a: <>Da, naš kran može izvesti <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">istovar preko ograde</Link> uz maksimalnu preciznost.</> },
    { q: "Je li moguće istovariti palete bez viljuškara?", a: <>Da, <Link href="/istovar-bez-viljuskara-zagreb" className="font-medium text-primary hover:underline">istovar bez viljuškara</Link> je moguć uz naš hidraulički kran.</> },
    { q: "Postoji li mogućnost hitnog prijevoza?", a: <>Da, nudimo <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitni prijevoz Zagreb</Link> prema dogovoru.</> },
];

export default function BrziIstovarZagreb() {
    return (
        <ServicePageLayout
            title="Brzi istovar Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate brzi istovar?"
            ctaSubtitle={
                <>
                    Ako tražite pouzdanu uslugu{" "}
                    <Link href="/istovar-materijala-na-gradilistu-zagreb" className="font-medium text-primary hover:underline">brzog istovara u Zagrebu</Link>
                    {" "}i okolici, naša ekipa je spremna pomoći. Obratite nam se za preciznu i sigurnu dostavu vašeg tereta, bez obzira na izazove lokacije. Kontaktirajte nas danas i osigurajte sebi kvalitetan{" "}
                    <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">transport i istovar</Link>
                    {" "}koji će zadovoljiti sve vaše potrebe.
                </>
            }
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="brzi-istovar-zagreb"
        />
    );
}
