import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Prijevoz kamionom Zagreb | Kamionski transport i dostava – Kranex",
    description:
        "Pouzdan prijevoz kamionom u Zagrebu. Transport robe, građevinskog materijala i dostava uz mogućnost utovara kranom. Brza i sigurna usluga.",
    alternates: { canonical: "/prijevoz-kamionom-zagreb" },
};

const intro = (
    <>
        <p>
            Ako vam je potreban pouzdan prijevoz kamionom u Zagrebu i okolici, Kranex Prijevozi nudi profesionalnu uslugu transporta robe, građevinskog materijala i teških tereta uz siguran utovar i istovar. Dugogodišnje iskustvo i moderna oprema omogućuju nam brz, efikasan i siguran prijevoz za privatne osobe i tvrtke.
        </p>
        <p>
            Obavljamo kamionski prijevoz na gradilišta, poslovne lokacije i privatne adrese, uz fleksibilne termine i dolazak prema dogovoru.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Profesionalni kamionski prijevoz za firme i privatne klijente",
        children: (
            <>
                <p>Naša usluga prijevoza kamionom prilagođena je različitim vrstama tereta. Bez obzira trebate li dostavu građevinskog materijala, transport paletirane robe ili prijevoz većih predmeta, osiguravamo sigurno rukovanje i pravovremenu isporuku.</p>
                <p>Najčešće usluge uključuju:</p>
                <ul>
                    <li><Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">prijevoz građevinskog materijala</Link></li>
                    <li>transport robe na paletama</li>
                    <li>dostavu materijala na gradilište</li>
                    <li>prijevoz strojeva i opreme</li>
                    <li>selidbe težih predmeta</li>
                    <li>kamion prijevoz po Zagrebu i okolici</li>
                </ul>
                <p>Radimo s privatnim investitorima, građevinskim firmama, trgovinama i proizvodnim tvrtkama.</p>
            </>
        ),
    },
    {
        title: "Prijevoz kamionom uz utovar i istovar kranom",
        children: (
            <>
                <p>Po potrebi nudimo i <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">prijevoz kamionom s kranom</Link>, što omogućuje jednostavan transport tereta koji nije moguće ručno utovariti ili istovariti.</p>
                <p>Kran omogućuje:</p>
                <ul>
                    <li>dizanje materijala na visinu</li>
                    <li>istovar direktno na gradilište</li>
                    <li>podizanje paleta preko prepreka</li>
                    <li>sigurno rukovanje teškim predmetima</li>
                </ul>
                <p>Ova usluga značajno ubrzava radove i smanjuje potrebu za dodatnom mehanizacijom.</p>
            </>
        ),
    },
    {
        title: "Usluga prijevoza Zagreb – brzo, fleksibilno i pouzdano",
        children: (
            <>
                <p>Znamo koliko je u građevini i logistici važna točnost. Zato nudimo brzu organizaciju prijevoza i mogućnost dolaska u kratkom roku.</p>
                <p>Prednosti naše usluge:</p>
                <ul>
                    <li>dogovor termina bez čekanja</li>
                    <li>pouzdan kamionski transport</li>
                    <li>siguran prijevoz robe</li>
                    <li>iskustvo rada na gradilištima</li>
                    <li>profesionalni vozači i oprema</li>
                </ul>
                <p>Usluga prijevoza dostupna je na području Zagreba i okolnih naselja. Za <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitni prijevoz Zagreb</Link> kontaktirajte nas za brzu ponudu.</p>
            </>
        ),
    },
    {
        title: "Kada vam je potreban prijevoz kamionom?",
        children: (
            <>
                <p>Naši klijenti nas najčešće angažiraju za:</p>
                <ul>
                    <li>dostavu cigle, blokova i građevinskog materijala</li>
                    <li>transport konstrukcija i opreme</li>
                    <li>prijevoz velikih kupnji iz trgovina</li>
                    <li>selidbu teških predmeta</li>
                    <li>prijevoz industrijske robe</li>
                </ul>
                <p>Ako niste sigurni je li vaš teret pogodan za kamionski prijevoz, slobodno nas kontaktirajte — savjetovat ćemo najbolje rješenje.</p>
            </>
        ),
    },
    {
        title: "Područje rada",
        children: (
            <>
                <p>Prijevoz kamionom obavljamo na području:</p>
                <ul>
                    <li>Zagreb</li>
                    <li>Novi Zagreb</li>
                    <li>Sesvete</li>
                    <li>Velika Gorica</li>
                    <li>Zaprešić</li>
                    <li>Samobor</li>
                    <li>okolica Zagreba</li>
                </ul>
                <p>Po dogovoru moguće su i šire relacije.</p>
            </>
        ),
    },
    {
        title: "Zašto odabrati Kranex Prijevoze?",
        children: (
            <>
                <p>Kombinacija iskustva, moderne opreme i fleksibilnog pristupa čini nas pouzdanim partnerom za kamionski prijevoz u Zagrebu.</p>
                <ul>
                    <li>dugogodišnje iskustvo u transportu</li>
                    <li>specijalizacija za građevinski prijevoz</li>
                    <li>mogućnost transporta kranom</li>
                    <li>brza komunikacija i dogovor</li>
                    <li>sigurna dostava bez oštećenja</li>
                </ul>
                <p>Naš cilj je jednostavan — omogućiti klijentima brz i siguran transport bez komplikacija.</p>
            </>
        ),
    },
];

const faq = [
    { q: "Kako naručiti prijevoz kamionom?", a: "Kontaktirajte nas telefonski ili putem obrasca. Dogovorit ćemo vrstu tereta, lokaciju i termin. Ponuda je besplatna." },
    { q: "Kolika je cijena prijevoza?", a: "Cijena ovisi o udaljenosti, vrsti i količini tereta te vremenu rada. Na temelju vaših podataka damo vam jasnu ponudu bez obveze." },
    { q: "Može li kamion doći isti dan?", a: "U većini slučajeva da, ovisno o dostupnosti. Za hitan prijevoz nazovite nas što prije kako bismo provjerili raspored." },
    { q: "Da li nudite utovar kranom?", a: "Da. Nudimo prijevoz kamionom s kranom – utovar i istovar obavljamo direktno na lokaciji bez dodatne mehanizacije." },
];

export default function PrijevozKamionomZagreb() {
    return (
        <ServicePageLayout
            title="Prijevoz kamionom Zagreb – Brza i sigurna dostava tereta"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate prijevoz kamionom u Zagrebu?"
            ctaSubtitle="Kontaktirajte nas i dogovorite termin prijevoza već danas."
            faqHeading="Često postavljana pitanja – prijevoz kamionom"
            faq={faq}
            gallerySlug="prijevoz-kamionom-zagreb"
        />
    );
}
