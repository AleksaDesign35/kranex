import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Prijevoz strojeva Zagreb | Utovar i istovar dizalicom | Kranex",
    description:
        "Prijevoz strojeva Zagreb – selidba i transport strojeva, utovar i istovar dizalicom. Industrijski prijevoz – Kranex.",
    alternates: { canonical: "/prijevoz-strojeva-zagreb" },
};

const intro = (
    <>
        <p>
            U dinamičnom poslovnom okruženju kakvo je Zagreb, učinkovit i siguran{" "}
            <Link href="/prijevoz-industrijske-opreme-zagreb" className="font-medium text-primary hover:underline">prijevoz strojeva</Link>
            {" "}ključan je za mnoge industrije. Bez obzira trebate li premjestiti tešku industrijsku opremu ili osjetljive radioničke strojeve, naša usluga omogućuje vam bezbrižno planiranje i izvedbu. Kroz specijalizirani{" "}
            <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">transport strojeva</Link>
            {" "}i precizno rukovanje, jamčimo da vaša oprema stiže na odredište u optimalnom stanju.
        </p>
        <p>
            Naši stručnjaci posvećeni su pružanju pouzdane usluge koja uključuje sve aspekte logističkog procesa. Od{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">utovara strojeva dizalicom</Link>
            {" "}do konačnog{" "}
            <Link href="/selidba-teskih-stvari-zagreb" className="font-medium text-primary hover:underline">istovara strojeva</Link>
            , svaka etapa je pažljivo isplanirana kako bi vaš projekt tekao glatko i bez zastoja. Bilo da se radi o hitnim situacijama ili planiranim projektima, mi smo tu da odgovorimo na sve vaše potrebe.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Prijevoz strojeva često je potreban kada se tvrtke sele u nove proizvodne pogone, kada se nabavljaju novi strojevi ili kada je potrebno održavanje i servis postojećih postrojenja. Posebno je važan u situacijama kada je potrebno brzo reagirati na promjene u poslovanju, poput proširenja kapaciteta ili preusmjeravanja proizvodnje.</p>
                <p>Ova usluga namijenjena je različitim industrijskim sektorima u Zagrebu, uključujući proizvodne tvrtke, radionice, građevinske firme i druge poslovne subjekte koji se oslanjaju na tešku opremu. Naš tim je opremljen za{" "}
                    <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">premještanje opreme</Link>
                    {" "}u svim uvjetima, pružajući prilagođena rješenja za specifične potrebe svakog klijenta.</p>
                <p>Naš pristup omogućuje vam da se fokusirate na svoje poslovanje, dok mi brinemo o logistici i sigurnosti vaših strojeva. Bez obzira na kompleksnost zadatka, osiguravamo da sve operacije budu izvedene na vrijeme i bez neočekivanih komplikacija.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Usluga prijevoza strojeva uključuje cjelokupno upravljanje procesom od planiranja do završetka. Naš tim surađuje s vama kako bi razumio specifične zahtjeve vašeg projekta i osigurao da se sve odvija prema planu.</p>
                <ol>
                    <li><strong>Procjena i planiranje:</strong> Detaljno analiziramo potrebe vašeg prijevoza i izrađujemo plan koji uključuje sve potrebne resurse i tehničke detalje.</li>
                    <li><strong>Priprema opreme:</strong> Pripremamo strojeve za transport, uključujući rastavljanje ako je potrebno, kako bismo olakšali siguran prijevoz.</li>
                    <li><strong>Utovar:</strong> Korištenjem{" "}
                        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">utovara strojeva dizalicom</Link>
                        , osiguravamo efikasan i siguran utovar na naš specijalizirani kamion.</li>
                    <li><strong>Transport:</strong> Izvodimo{" "}
                        <Link href="/prijevoz-industrijske-opreme-zagreb" className="font-medium text-primary hover:underline">industrijski prijevoz</Link>
                        {" "}koristeći našu flotu i stručnost kako bismo zajamčili siguran dolazak na odredište.</li>
                    <li><strong>Istovar i postavljanje:</strong> Nakon dolaska na lokaciju, naši stručnjaci provode{" "}
                        <Link href="/selidba-teskih-stvari-zagreb" className="font-medium text-primary hover:underline">istovar strojeva</Link>
                        {" "}i njihovo postavljanje prema vašim uputama.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Naše iskustvo u prijevozu strojeva pokriva širok spektar tereta i situacija. Bilo da se radi o premještanju pojedinačnih strojeva ili kompletnih proizvodnih linija, mi smo ovdje da pomognemo.</p>
                <ul>
                    <li>Premještanje CNC glodalica između pogona.</li>
                    <li>Prijevoz velikih industrijskih preša.</li>
                    <li>Selidba kompletnih linija za sastavljanje.</li>
                    <li>Transport osjetljive laboratorijske opreme.</li>
                    <li>Prijevoz teških građevinskih strojeva.</li>
                    <li>Premještanje i instalacija tiskarskih strojeva.</li>
                </ul>
                <p>Uz našu pomoć, svaki projekt je izveden s najvišom razinom pažnje i preciznosti, osiguravajući da vaša oprema stigne na odredište neoštećena i spremna za rad.</p>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Korištenje kamiona s kranom donosi brojne prednosti kada je riječ o prijevozu strojeva u urbanom okolišu poput Zagreba. Ovaj pristup omogućuje fleksibilnost i učinkovitost u situacijama gdje su pristupi ograničeni.</p>
                <ul>
                    <li>Brza reakcija na hitne zahtjeve.</li>
                    <li>Precizno pozicioniranje teških strojeva.</li>
                    <li>Smanjenje vremena utovara i istovara.</li>
                    <li>Sigurnost pri rukovanju osjetljivom opremom.</li>
                    <li>Fleksibilnost u prilagodbi različitim teretima.</li>
                </ul>
                <p>Uz našu pomoć, vaši strojevi stižu sigurno i na vrijeme, čak i u najužim ulicama ili na teško dostupnim lokacijama.</p>
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
                <p>Priprema lokacije ključna je za uspješan{" "}
                    <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">prijevoz strojeva isti dan</Link>
                    . Kako bismo osigurali brz i efikasan proces, molimo vas da obratite pažnju na nekoliko stvari:</p>
                <ol>
                    <li>Osigurajte dovoljno prostora za pristup kamionu i kranu.</li>
                    <li>Provjerite jesu li svi strojevi spremni za utovar.</li>
                    <li>Uklonite sve prepreke s puta i prostora za rad.</li>
                    <li>Pripremite svu potrebnu dokumentaciju za transport.</li>
                    <li>Obavijestite nas o specifičnim zahtjevima ili mogućim problemima na lokaciji.</li>
                </ol>
                <p>Pravovremena priprema i dobra komunikacija s našim timom omogućit će brzu i sigurnu realizaciju vašeg projekta.</p>
            </>
        ),
    },
];

const faq = [
    { q: "Kako mogu zatražiti uslugu prijevoza strojeva?", a: "Možete nas kontaktirati putem telefona ili e-maila kako bismo dogovorili sve detalje i termin." },
    { q: "Nudite li usluge izvan Zagreba?", a: "Da, usluge su dostupne i za okolna područja uz prethodni dogovor." },
    { q: "Koliko unaprijed trebam rezervirati uslugu?", a: "Preporučujemo rezervaciju nekoliko dana unaprijed, no moguće su i hitne intervencije." },
    { q: "Je li potrebno rastaviti strojeve prije transporta?", a: "Ovisno o dimenzijama i težini, ponekad je potrebno rastaviti strojeve kako bi se osigurao siguran transport." },
    { q: "Što ako dođe do oštećenja tijekom transporta?", a: "Naša usluga uključuje osiguranje, a naši stručnjaci pažljivo upravljaju svim fazama kako bi minimizirali rizik." },
];

export default function PrijevozStrojevaZagreb() {
    return (
        <ServicePageLayout
            title="Prijevoz strojeva Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate prijevoz strojeva?"
            ctaSubtitle="Ako vam je potreban pouzdan i siguran prijevoz strojeva u Zagrebu i okolici, obratite nam se. Naša stručnost i posvećenost detaljima osiguravaju da vaša oprema bude u najboljim rukama. Kontaktirajte nas danas i zatražite besplatnu ponudu za transport teških strojeva ili prijevoz radioničke opreme."
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="prijevoz-strojeva-zagreb"
        />
    );
}
