import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Dostava cigle i Ytonga kranom Zagreb | Kamion s kranom | Kranex",
    description:
        "Dostava cigle i Ytonga kranom u Zagrebu. Prijevoz građevinskog materijala, paleta cigle i blokova direktno na gradilište. Kamion s kranom – Kranex.",
    alternates: { canonical: "/dostava-cigle-ytonga-kranom-zagreb" },
};

const intro = (
    <>
        <p>
            U dinamičnom građevinskom okruženju Zagreba,{" "}
            <Link href="/dostava-cigle-ytonga-kranom-zagreb" className="font-medium text-primary hover:underline">dostava cigle kranom Zagreb</Link>
            {" "}ključna je usluga za uspješno provođenje projekata. Naša tvrtka, Kranex, nudi specijaliziranu uslugu koja uključuje{" "}
            <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">prijevoz cigle kranom Zagreb</Link>
            {" "}i dostavu Ytonga kranom direktno na vaše gradilište, bez potrebe za dodatnom opremom poput viljuškara. Omogućujemo jednostavno i brzo pozicioniranje materijala tamo gdje je najpotrebnije, čak i na višim katovima, čime štedimo vaše vrijeme i resurse.
        </p>
        <p>
            Naša usluga{" "}
            <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">prijevoz materijala na gradilište</Link>
            {" "}prilagođena je specifičnim potrebama vašeg projekta, bilo da se radi o gradnji stambenih zgrada, poslovnih objekata ili kuća. Sigurnost, preciznost i učinkovitost su naš imperativ, a naš{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
            {" "}opremljen je za sve izazove koje može postaviti urbana infrastruktura Zagreba.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Usluga dostave blokova kranom neophodna je kada želite osigurati učinkovitu i sigurnu dopremu građevinskih materijala kao što su cigle i Ytong blokovi. Idealna je za građevinske tvrtke i privatne investitore koji žele smanjiti logističke izazove u nabavi i distribuciji materijala. S obzirom na urbanu gustoću Zagreba i česte prometne zastoje, korištenje kamiona s kranom predstavlja optimalno rješenje.</p>
                <p>Naša usluga posebno je korisna kada je potrebno organizirati transport na teško dostupna mjesta ili kada se radi o velikim količinama materijala koje je potrebno brzo dostaviti i postaviti. Ako radite na projektu gdje je preciznost i brzina dostave ključna, naš tim će osigurati da sve prođe glatko i bez nepredviđenih problema.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Proces istovara cigle kranom i dizanja paleta cigle jednostavan je i učinkovit. Naš tim stručnjaka koordinira cijeli postupak, od preuzimanja materijala do konačne isporuke na lokaciju.</p>
                <ol>
                    <li><strong>Konzultacija i planiranje:</strong> Procjenjujemo vaše potrebe i dogovaramo sve detalje oko dostave.</li>
                    <li><strong>Priprema materijala:</strong> Organiziramo utovar materijala na naš kamion s kranom.</li>
                    <li><strong>Prijevoz do lokacije:</strong> Siguran prijevoz do vašeg gradilišta u Zagrebu ili okolici.</li>
                    <li><strong>Pozicioniranje krana:</strong> Postavljanje krana na optimalnu poziciju za istovar.</li>
                    <li><strong>Istovar i dostava:</strong> Precizno pozicioniranje materijala na željeno mjesto, bilo da se radi o prizemlju ili višim katovima.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Kroz godine iskustva, susreli smo se s raznim zahtjevima i situacijama u kojima je naša usluga bila presudna. Naši primjeri uključuju:</p>
                <ul>
                    <li>Dostava cigle i Ytong blokova za izgradnju stambenih zgrada.</li>
                    <li>Transport paleta cigle za renovacije u urbanim dijelovima Zagreba.</li>
                    <li>Dostava materijala na kat za projekte izgradnje kuća na padinama.</li>
                    <li>Prijevoz Ytong blokova za izolaciju velikih poslovnih objekata.</li>
                    <li>Istovar cigle kranom na gradilištima s ograničenim pristupom.</li>
                    <li>Dostava blokova kranom Zagreb za brze konstrukcije montažnih objekata.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Koristeći naš{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
                    , vaši građevinski projekti mogu se odvijati nesmetano i na vrijeme. Evo nekoliko ključnih prednosti koje nudimo:
                </p>
                <ul>
                    <li><strong>Brza isporuka:</strong> Efikasno rješavanje logistike u urbanim sredinama.</li>
                    <li><strong>Fleksibilnost:</strong> Mogućnost dostave na teško dostupna mjesta.</li>
                    <li><strong>Sigurnost:</strong> Minimaliziranje rizika od oštećenja materijala.</li>
                    <li><strong>Ušteda vremena:</strong> Bez dodatne opreme za utovar i istovar.</li>
                    <li><strong>Ekonomičnost:</strong> Smanjenje ukupnih troškova logistike.</li>
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
                <p>Priprema gradilišta ključna je za glatku izvedbu dostave materijala na kat. Prije našeg dolaska, važno je osigurati slobodan pristup lokaciji i dovoljno prostora za manevriranje kamionom i kranom.</p>
                <p>Obavijestite nas o specifičnim uvjetima na licu mjesta, poput uskih ulica ili visinskih ograničenja. Također, provjerite da li postoji potreba za dodatnim dozvolama za ulazak u određene zone.</p>
                <p className="font-semibold">Checklist za pripremu:</p>
                <ul>
                    <li>Provjerite pristupne puteve do gradilišta.</li>
                    <li>Osigurajte dovoljno prostora za kran.</li>
                    <li>Pripremite sve potrebne dozvole.</li>
                    <li>Informirajte nas o specifičnim zahtjevima ili preprekama.</li>
                    <li>Osigurajte komunikaciju s našim timom na dan isporuke.</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koliko unaprijed trebam rezervirati uslugu?", a: "Preporučujemo rezervaciju nekoliko dana unaprijed kako bismo osigurali dostupnost." },
    { q: "Možete li dostaviti materijale na više lokacija u istom danu?", a: "Da, prema dogovoru možemo planirati dostavu na više lokacija." },
    { q: "Postoje li ograničenja u težini tereta?", a: "Naš kamion može prevoziti teret do 12 tona." },
    { q: "Kako osiguravate sigurnost materijala tijekom transporta?", a: "Koristimo profesionalnu opremu i metode osiguranja tereta tijekom transporta." },
    { q: "Je li moguće dostaviti materijal izvan Zagreba?", a: "Da, usluga je dostupna i za širu zagrebačku okolicu." },
];

export default function DostavaCigleYtongaKranomZagreb() {
    return (
        <ServicePageLayout
            title="Dostava cigle i Ytonga kranom Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate dostavu cigle i Ytonga kranom?"
            ctaSubtitle="Kontaktirajte nas i dogovorite termin dostave već danas."
            faqHeading="Često postavljana pitanja – dostava cigle i Ytonga"
            faq={faq}
            gallerySlug="dostava-cigle-ytonga-kranom-zagreb"
        />
    );
}
