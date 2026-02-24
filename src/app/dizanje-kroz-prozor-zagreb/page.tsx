import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Dizanje kroz prozor Zagreb | Podizanje namještaja i opreme | Kranex",
    description:
        "Dizanje kroz prozor Zagreb – podizanje namještaja i opreme bez stubišta i lifta. Dizanje preko balkona, selidba glomaznih stvari. Usluga krana – Kranex.",
    alternates: { canonical: "/dizanje-kroz-prozor-zagreb" },
};

const intro = (
    <>
        <p>
            U urbanom okolišu Zagreba, gdje uski prilazi i prometne gužve mogu otežati selidbu, naša usluga dizanja kroz prozor dolazi kao idealno rješenje. Bez obzira na to selite li glomazni namještaj, opremu ili druge teške predmete, podizanje kroz prozor osigurava da vaša imovina stigne na željeno mjesto sigurno i bez oštećenja.
        </p>
        <p>
            Naš{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
            {" "}opremljen je specijaliziranom opremom koja omogućuje dizanje bez stubišta i dizanje bez lifta, što je često neophodno u zgradama bez prikladnog unutarnjeg prijevoza. Ova usluga je optimalna za stanove na višim katovima i mjesta gdje je pristup tradicionalnim metodama ograničen.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Dizanje kroz prozor je neophodno kada se suočavate s uskim stubištima, nedostatkom lifta ili kada jednostavno želite izbjeći rizik oštećenja prilikom manevriranja velikih predmeta kroz unutarnje prostore. Ova usluga je posebno korisna za stanare višekatnih zgrada, tvrtke koje trebaju prebaciti uredsku opremu ili vlasnike poslovnih prostora koji trebaju brzu i efikasnu selidbu glomaznih stvari.</p>
                <p>Namijenjena je svima koji trebaju efikasno podizanje namještaja kroz prozor, bilo da je riječ o selidbi ili dostavi novih uređaja koji ne mogu proći kroz uobičajene prolaze. Usluga je također idealna za{" "}
                <Link href="/dizanje-preko-balkona-zagreb" className="font-medium text-primary hover:underline">dizanje preko balkona</Link>
                , gdje je pristup s ulice jedina opcija.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga dizanja kroz prozor uključuje kompletnu logističku podršku, od početnog savjetovanja do konačne dostave na željenu lokaciju. Proces je osmišljen kako bi bio što jednostavniji i učinkovitiji za naše klijente.</p>
                <ol>
                    <li><strong>Savjetovanje i planiranje:</strong> Nakon vašeg upita, dogovaramo sastanak kako bismo procijenili specifične potrebe i izazove vaše lokacije.</li>
                    <li><strong>Procjena terena:</strong> Naši stručnjaci dolaze na lice mjesta kako bi procijenili najbolji pristup i strategiju dizanja.</li>
                    <li><strong>Priprema opreme:</strong> Organiziramo potreban kamion s kranom te osiguravamo svu dodatnu opremu za sigurno{" "}
                        <Link href="/selidba-teskih-stvari-zagreb" className="font-medium text-primary hover:underline">podizanje teških predmeta</Link>.</li>
                    <li><strong>Izvođenje operacije:</strong> Na dan selidbe, naš tim dolazi u dogovoreno vrijeme i izvodi dizanje prema planu.</li>
                    <li><strong>Precizno pozicioniranje:</strong> Nakon dolaska na mjesto, vaš namještaj ili oprema se pažljivo pozicionira na željeno mjesto, osiguravajući da sve bude točno postavljeno prema vašim željama.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Dizanje kroz prozor u Zagrebu pokriva širok spektar potreba, od privatnih do poslovnih klijenata. Evo nekoliko konkretnih primjera situacija u kojima smo pomogli:</p>
                <ul>
                    <li>Selidba velikih sofa i kauča u stanove na višim katovima.</li>
                    <li>Podizanje teških sefova ili arhivske opreme u uredske prostore.</li>
                    <li>Transport klavira ili drugih osjetljivih glazbenih instrumenata.</li>
                    <li>Dostava kuhinjskih elemenata u renovirane stanove.</li>
                    <li><Link href="/selidba-teskih-stvari-zagreb" className="font-medium text-primary hover:underline">Selidba teških stvari Zagreb</Link> za tvrtke koje mijenjaju lokaciju.</li>
                    <li>Instalacija velikih televizora ili audio sustava u penthouse apartmane.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Korištenje{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">usluga krana Zagreb</Link>
                    {" "}za dizanje kroz prozor donosi niz prednosti koje čine cijeli proces bržim i sigurnijim:</p>
                <ul>
                    <li><strong>Sigurnost:</strong> Minimizira rizik od ozljeda ili oštećenja imovine.</li>
                    <li><strong>Efikasnost:</strong> Omogućuje brzu i jednostavnu selidbu čak i najtežih predmeta.</li>
                    <li><strong>Pristupačnost:</strong> Idealan za zgrade bez lifta ili s uskim stubištima.</li>
                    <li><strong>Preciznost:</strong> Precizno pozicioniranje osigurava da sve stigne točno na željeno mjesto.</li>
                    <li><strong>Fleksibilnost:</strong> Prilagodljiv za razne vrste tereta i lokacije.</li>
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
                <p>Priprema lokacije ključna je za uspješno dizanje kroz prozor. Evo nekoliko stvari koje trebate imati na umu prije našeg dolaska:</p>
                <ul>
                    <li>Osigurajte da je prilaz zgradi slobodan i dostupan za kamion s kranom.</li>
                    <li>Provjerite da nema prepreka poput parkiranih automobila ili drugih objekata koji bi mogli ometati rad.</li>
                    <li>Obavijestite susjede ukoliko je potrebno privremeno osigurati dodatni prostor.</li>
                    <li>Osigurajte da su svi predmeti spremni za dizanje i da su osigurani protiv oštećenja.</li>
                    <li>Javite nam specifičnosti vaše lokacije, poput visine zgrade i širine prozora.</li>
                </ul>
                <p className="font-semibold">Checklist:</p>
                <ul>
                    <li>Prilaz slobodan</li>
                    <li>Prepreke uklonjene</li>
                    <li>Susjedi obaviješteni</li>
                    <li>Predmeti osigurani</li>
                    <li>Specifičnosti lokacije prijavljene</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Može li se dizati kroz prozor na bilo koji kat?", a: "Da, naš kran može doseći do 20 metara, što pokriva većinu višekatnih zgrada." },
    { q: "Je li usluga dostupna vikendom?", a: "Da, prema dogovoru možemo organizirati dizanje i tijekom vikenda." },
    { q: "Koje vrste tereta možemo podizati?", a: "Možemo podizati namještaj, kućanske uređaje, uredsku opremu i druge teške predmete." },
    { q: "Koliko unaprijed trebam rezervirati uslugu?", a: <>Preporučujemo rezervaciju barem tjedan dana unaprijed, ali za <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitni prijevoz Zagreb</Link> možemo organizirati i brže.</> },
    { q: "Kako se obračunava cijena usluge?", a: "Cijena se temelji na vrsti tereta, udaljenosti i specifičnostima vaše lokacije." },
];

export default function DizanjeKrozProzorZagreb() {
    return (
        <ServicePageLayout
            title="Dizanje kroz prozor Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate dizanje kroz prozor u Zagrebu?"
            ctaSubtitle="Ako trebate profesionalnu i sigurno izvedenu uslugu dizanja kroz prozor u Zagrebu i okolici, obratite nam se za besplatnu procjenu i savjetovanje. Kontaktirajte nas putem kontakt forme ili telefonski."
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="dizanje-kroz-prozor-zagreb"
        />
    );
}
