import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Podizanje sefova Zagreb | Selidba teških predmeta kranom | Kranex",
    description:
        "Podizanje sefova Zagreb – prijevoz i selidba sefova i trezora. Dizanje kroz prozor, preko balkona. Kranex.",
    alternates: { canonical: "/podizanje-sefova-zagreb" },
};

const intro = (
    <>
        <p>
            Selidba i podizanje sefova zahtijevaju posebnu pažnju i stručnost zbog njihove težine i vrijednosti. U Zagrebu, gdje su ulice često uske, a zgrade visoke, izazov je još veći. Naša usluga podizanja sefova koristi specijalizirani{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
            {" "}kako bi osigurala siguran i učinkovit transport teških i glomaznih stvari, uključujući sefove i trezore.
        </p>
        <p>
            Bilo da se radi o{" "}
            <Link href="/dizanje-kroz-prozor-zagreb" className="font-medium text-primary hover:underline">dizanju kroz prozor Zagreb</Link>
            {" "}ili{" "}
            <Link href="/dizanje-preko-balkona-zagreb" className="font-medium text-primary hover:underline">dizanju preko balkona Zagreb</Link>
            , naši stručnjaci pažljivo planiraju svaki korak procesa. Osiguravamo da se vaši predmeti prevezu bez oštećenja i na vrijeme, uz minimalan stres za vas.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Podizanje sefova je neophodno kada se suočavate s premještanjem ili instalacijom teških i glomaznih predmeta unutar poslovnih prostora, banaka ili čak privatnih domova. Ova usluga je idealna za tvrtke koje se sele, renoviraju ili trebaju povećati sigurnost postavljanjem novih trezora.</p>
                <p>Također,{" "}
                    <Link href="/selidba-teskih-stvari-zagreb" className="font-medium text-primary hover:underline">selidba teških stvari Zagreb</Link>
                    {" "}može biti potrebna pojedincima koji premještaju dragocjene predmete iz svojih domova u sigurnije prostore ili prilikom renovacije. Naši timovi su obučeni za rukovanje sefovima različitih veličina i težina.</p>
                <p>Osim toga, usluga je namijenjena svima koji trebaju{" "}
                    <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">prijevoz teških predmeta</Link>
                    {" "}u urbanim sredinama Zagreba, gdje standardni prijevoz nije dovoljan.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Usluga uključuje detaljno planiranje i izvedbu prijevoza i podizanja sefova ili trezora na željenu lokaciju. Naš proces osigurava sigurnost i preciznost, a uključuje sljedeće korake:</p>
                <ol>
                    <li><strong>Procjena i planiranje:</strong> Naši stručnjaci posjećuju lokaciju kako bi procijenili uvjete i osmislili najbolji pristup.</li>
                    <li><strong>Priprema opreme:</strong> Koristimo specijalizirane alate i{" "}
                        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
                        {" "}za sigurno podizanje.</li>
                    <li><strong>Podizanje i transport:</strong> Precizno podizanje sefova i trezora, bilo kroz prozor, preko balkona ili dizanje unutar objekta.</li>
                    <li><strong>Postavljanje na lokaciju:</strong> Osiguravamo točno pozicioniranje i stabilnost na novoj lokaciji.</li>
                    <li><strong>Završna provjera:</strong> Provjeravamo stabilnost i sigurnost postavljenih predmeta.</li>
                </ol>
                <p>Naš tim je uvijek spreman odgovoriti na sve izazove i prilagoditi se specifičnim potrebama klijenata.</p>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Podizanje i transport sefova nije jednostavan zadatak, a mi smo ga usavršili kroz brojne projekte u Zagrebu. Evo nekoliko tipičnih primjera iz prakse:</p>
                <ul>
                    <li>Premještanje sefova iz banke u novi poslovni prostor.</li>
                    <li>Podizanje teškog trezora na treći kat poslovne zgrade.</li>
                    <li>Selidba kućnog sefa iz prizemlja na drugi kat kroz prozor.</li>
                    <li>Instalacija novog trezora u poslovnom prostoru tijekom renovacije.</li>
                    <li>Prijevoz velikih sefova u skladište tijekom selidbe ureda.</li>
                    <li>Transport glomaznih stvari, uključujući sefove, prilikom reorganizacije inventara.</li>
                </ul>
                <p>Naši stručnjaci osiguravaju da svaki postupak bude izveden profesionalno i sigurno.</p>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Korištenje kamiona s kranom za podizanje sefova u Zagrebu donosi brojne prednosti koje olakšavaju proces selidbe i instalacije:</p>
                <ul>
                    <li><strong>Fleksibilnost:</strong> Omogućuje rad u uskim i teško dostupnim prostorima.</li>
                    <li><strong>Preciznost:</strong> Točno pozicioniranje teških predmeta na željeno mjesto.</li>
                    <li><strong>Sigurnost:</strong> Minimizira rizik od oštećenja predmeta i okoliša.</li>
                    <li><strong>Ušteda vremena:</strong> Brži proces od standardnih metoda transporta.</li>
                    <li><strong>Smanjenje troškova:</strong> Manje potrebe za dodatnom opremom i radnom snagom.</li>
                </ul>
                <p>Sve ove prednosti čine našu uslugu idealnom za kompleksne urbane projekte.</p>
            </>
        ),
    },
    {
        title: "Tehničke specifikacije kamiona s kranom",
        children: (
            <>
                <p>Naša usluga podizanja sefova izvedena je specijaliziranim kamionom s hidrauličkim kranom čije karakteristike omogućuju siguran i učinkovit prijevoz.</p>
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
                <p>Kako bismo osigurali nesmetan tijek podizanja sefova, potrebno je pripremiti lokaciju i obavijestiti nas o specifičnostima:</p>
                <ul>
                    <li>Uklonite sve prepreke na putanji transporta i području postavljanja.</li>
                    <li>Osigurajte dovoljno prostora za manevriranje kamiona i krana.</li>
                    <li>Provjerite nosivost poda na lokaciji postavljanja.</li>
                    <li>Javite nam točne dimenzije i težinu sefova ili trezora.</li>
                    <li>Osigurajte pristup struji ako je potrebno za opremu.</li>
                </ul>
                <p className="font-semibold">Pripremna lista:</p>
                <ul>
                    <li>Ukloniti prepreke</li>
                    <li>Osigurati prostor za manevriranje</li>
                    <li>Provjeriti nosivost poda</li>
                    <li>Dostaviti informacije o sefovima</li>
                    <li>Osigurati pristup struji</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koliko vremena je potrebno za selidbu sefova?", a: "Vrijeme varira ovisno o kompleksnosti i lokaciji, obično nekoliko sati do jednog dana." },
    { q: "Možete li podići sef kroz prozor?", a: <>Da, <Link href="/dizanje-kroz-prozor-zagreb" className="font-medium text-primary hover:underline">dizanje kroz prozor Zagreb</Link> je dio naše standardne usluge.</> },
    { q: "Trebam li dodatnu opremu za podizanje sefova?", a: <>Ne, naš <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link> dolazi s potrebnom opremom.</> },
    { q: "Koje su maksimalne dimenzije sefova koje možete prevoziti?", a: "Nosivost i dimenzije tovarnog prostora omogućuju prijevoz većine standardnih sefova." },
    { q: "Kako osiguravate sigurnost prilikom podizanja?", a: "Naši stručnjaci koriste sigurnosne protokole i specijaliziranu opremu za osiguranje predmeta." },
];

export default function PodizanjeSefovaZagreb() {
    return (
        <ServicePageLayout
            title="Podizanje sefova Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate podizanje sefova?"
            ctaSubtitle="Ako trebate pouzdanu uslugu podizanja sefova u Zagrebu i okolici, obratite nam se. Naša profesionalna selidba teških predmeta osigurava sigurnost i efikasnost. Kontaktirajte nas danas za detalje i prilagođenu ponudu."
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="podizanje-sefova-zagreb"
        />
    );
}
