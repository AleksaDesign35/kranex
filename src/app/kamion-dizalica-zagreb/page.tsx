import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Kamion dizalica Zagreb | Kamionska dizalica i dizanje tereta | Kranex",
    description:
        "Kamion dizalica Zagreb – usluge kamionske dizalice. Utovar i istovar dizalicom, podizanje tereta. Najam kamiona s dizalicom – Kranex.",
    alternates: { canonical: "/kamion-dizalica-zagreb" },
};

const intro = (
    <>
        <p>
            U Zagrebu, gdje su gradilišta često okružena uskim ulicama i gustim prometom, kamion dizalica Zagreb nudi rješenja za sve vaše potrebe za podizanjem i prijevozom tereta. Bilo da ste građevinska tvrtka, privatni investitor ili trebate pomoć u prijevozu teških tereta, naša kamionska dizalica s hidrauličkom dizalicom spremna je odgovoriti na sve izazove. Naš tim stručnjaka organizira sve od utovara do istovara, čime osiguravamo da je vaš teret sigurno i efikasno prebačen na željenu lokaciju.
        </p>
        <p>
            Naša usluga dizalice Zagreb nudi fleksibilnost i prilagodljivost potrebama klijenata, omogućujući sigurno podizanje i pozicioniranje tereta, čak i u najzahtjevnijim urbanim uvjetima. Bez obzira na kompleksnost vašeg projekta, naše iskustvo i oprema su vam na raspolaganju.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Usluge{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamiona s kranom Zagreb</Link>
                    {" "}idealne su za situacije gdje je potrebno brzo i sigurno riješiti problem transporta teških i glomaznih tereta. Kamionska dizalica je ključna za građevinske projekte, postavljanje montažnih objekata, ili kada jednostavno trebate premjestiti veće količine materijala s jedne lokacije na drugu.
                </p>
                <p>Ova usluga nije samo za velike tvrtke; privatni korisnici također mogu iskoristiti pogodnosti koje nudi najam kamiona s dizalicom. Bilo da planirate renovaciju kuće i trebate podići građevinski materijal na krov, ili selite veliki komad namještaja, hidraulična dizalica na kamionu može uvelike olakšati taj proces.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Korištenje usluge dizalice Zagreb obuhvaća sve što vam je potrebno za sigurno i učinkovito rukovanje teretom. Proces je osmišljen kako bi bio što jednostavniji za korisnika:</p>
                <ol>
                    <li><strong>Konzultacije i planiranje:</strong> Prvo dogovaramo detalje projekta, razmatrajući specifične zahtjeve i uvjete na lokaciji.</li>
                    <li><strong>Priprema opreme:</strong> Naša kamionska dizalica i hidraulična dizalica se prilagođavaju specifičnostima vašeg tereta.</li>
                    <li><strong>Utovar dizalicom:</strong> Sigurno podizanje tereta na kamion, koristeći precizne tehnike za očuvanje integriteta tereta.</li>
                    <li><strong>Prijevoz do lokacije:</strong>{" "}
                        <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">Prijevoz kamionom Zagreb</Link>
                        {" "}osigurava da teret stiže na vrijeme.</li>
                    <li><strong>Istovar dizalicom:</strong> Precizno pozicioniranje tereta na željeno mjesto, uz minimalne smetnje na lokaciji.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <p>Naša usluga podizanja i prijevoza tereta može zadovoljiti širok spektar potreba. Evo nekoliko tipičnih scenarija gdje je kamionska dizalica neophodna:</p>
                <ul>
                    <li>Premještanje konstrukcijskih elemenata na gradilištu.</li>
                    <li>Postavljanje montažnih objekata u urbanim sredinama.</li>
                    <li>Prijevoz teških strojeva i opreme za industrijske pogone.</li>
                    <li>Selidba velikih komada namještaja ili umjetnina.</li>
                    <li>Utovar i istovar građevinskog materijala, poput blokova i cigle.</li>
                    <li>Postavljanje reklama ili rasvjetnih tijela na visoke pozicije.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Korištenje kamiona s kranom nudi mnoge prednosti, osobito u urbanom okruženju poput Zagreba:</p>
                <ul>
                    <li><strong>Fleksibilnost:</strong> Omogućuje rad u skučenim i teško dostupnim prostorima.</li>
                    <li><strong>Efikasnost:</strong> Smanjuje vrijeme potrebno za utovar i istovar tereta.</li>
                    <li><strong>Sigurnost:</strong> Smanjuje rizik od oštećenja tereta i ozljeda radnika.</li>
                    <li><strong>Prilagodljivost:</strong> Prilagođava se različitim vrstama tereta i uvjetima na terenu.</li>
                    <li><strong>Ekonomičnost:</strong> Smanjuje potrebu za višestrukim transportnim fazama.</li>
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
                <p>Priprema lokacije za{" "}
                    <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">prijevoz građevinskog materijala Zagreb</Link>
                    {" "}pomoću kamionske dizalice ključna je za uspješan i siguran proces. Evo nekoliko savjeta kako se pripremiti:
                </p>
                <ul>
                    <li><strong>Osigurajte pristup:</strong> Provjerite da su prilazi slobodni i da kamion može doći do mjesta istovara.</li>
                    <li><strong>Pripremite teret:</strong> Osigurajte da je teret spreman za utovar i da su svi dijelovi dostupni.</li>
                    <li><strong>Obavijestite susjede:</strong> Ako radite u stambenoj zoni, informirajte susjede o planiranim aktivnostima.</li>
                    <li><strong>Provjerite dozvole:</strong> Osigurajte sve potrebne dozvole za rad na javnim površinama.</li>
                </ul>
                <p className="font-semibold">Checklist prije dolaska:</p>
                <ul>
                    <li>Potvrda termina i lokacije s vozačem.</li>
                    <li>Provjera pristupa i prostorije za kamion.</li>
                    <li>Priprema i osiguranje tereta.</li>
                    <li>Informiranje susjeda o radovima.</li>
                    <li>Osiguranje potrebnih dozvola.</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koja je maksimalna težina tereta koju kamion s dizalicom može podići?", a: "Naš kamion dizalica može podići terete do 12 tona, ovisno o specifičnim uvjetima na terenu." },
    { q: "Koliko unaprijed trebam rezervirati uslugu?", a: "Preporučujemo rezervaciju nekoliko dana unaprijed kako bismo osigurali dostupnost i optimalno planiranje." },
    { q: "Je li moguće iznajmiti dizalicu za vikend?", a: "Da, najam kamiona s dizalicom moguć je vikendom uz prethodnu najavu i dogovor." },
    { q: "Možete li podizati teret na više katove?", a: "Da, naša dizalica na kamionu može podići teret do 20 metara visine." },
    { q: "Kako osiguravate sigurnost tijekom rada?", a: "Koristimo iskusne operatere i redovito održavamo našu opremu kako bismo osigurali maksimalnu sigurnost." },
];

export default function KamionDizalicaZagreb() {
    return (
        <ServicePageLayout
            title="Kamion dizalica Zagreb – usluge kamionske dizalice"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate kamionsku dizalicu?"
            ctaSubtitle="Kontaktirajte nas i dogovorite uslugu dizalice već danas."
            faqHeading="Često postavljana pitanja – kamion dizalica"
            faq={faq}
            gallerySlug="kamion-dizalica-zagreb"
        />
    );
}
