import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Kamion s kranom Zagreb | Najam krana i dizanje tereta | Kranex prijevozi",
    description:
        "Kamion s kranom Zagreb – dizanje tereta, utovar i transport. Profesionalna kamionska dizalica, dolazak isti dan i sigurna usluga.",
    alternates: { canonical: "/kamion-s-kranom-zagreb" },
};

const intro = (
    <>
        <p>
            Kranex prijevozi nudi uslugu kamiona s kranom u Zagrebu za dizanje, utovar i transport različitih vrsta tereta. Naša kamionska dizalica omogućuje sigurno rukovanje teškim i glomaznim predmetima bez potrebe za dodatnom mehanizacijom ili najmom zasebnog krana.
        </p>
        <p>
            Usluga je idealna za gradilišta,{" "}
            <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">prijevoz građevinskog materijala Zagreb</Link>
            , prijevoz paleta, montažne elemente, selidbe većih predmeta i sve situacije gdje je potrebno precizno dizanje tereta kranom.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Usluga kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Kamion s dizalicom predstavlja praktično rješenje za transport i manipulaciju teretom na jednoj lokaciji. Kombinacija prijevoza i dizanja kranom omogućuje brži rad, niže troškove i veću sigurnost prilikom rada na gradilištu ili privatnom objektu.</p>
                <p>Naš kamion s kranom u Zagrebu koristi se za utovar, prijevoz i istovar materijala direktno na željeno mjesto.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga kamionske dizalice?",
        children: (
            <>
                <p>Usluga kamiona s kranom uključuje kompletnu logistiku:</p>
                <ul>
                    <li>dolazak kamiona na lokaciju</li>
                    <li>utovar kranom</li>
                    <li>siguran transport tereta</li>
                    <li>dizanje tereta kranom na visinu ili udaljenu poziciju</li>
                    <li>precizan istovar na gradilištu ili objektu</li>
                </ul>
                <p>Sve operacije izvodi iskusan vozač krana uz maksimalnu sigurnost rada.</p>
            </>
        ),
    },
    {
        title: "Kada vam je potreban kamion s kranom?",
        children: (
            <>
                <p>Kamionska dizalica najčešće se koristi za:</p>
                <ul>
                    <li>dostavu građevinskog materijala na gradilište</li>
                    <li>dizanje paleta cigle i blokova</li>
                    <li>postavljanje montažnih elemenata</li>
                    <li>prijevoz i podizanje namještaja kroz prozor ili balkon</li>
                    <li>manipulaciju teškim konstrukcijama</li>
                    <li>radove na teško dostupnim lokacijama</li>
                </ul>
                <p>Zahvaljujući fleksibilnosti, kamion za gradilište omogućuje rad i u urbanim dijelovima Zagreba gdje klasični kranovi nisu praktični.</p>
            </>
        ),
    },
    {
        title: "Prednosti najma kamiona s kranom",
        children: (
            <>
                <p>Najam krana u Zagrebu često zahtijeva dodatnu logistiku i visoke troškove. Kamion s kranom predstavlja ekonomičnije rješenje jer kombinira prijevoz i dizanje u jednoj usluzi.</p>
                <p>Prednosti uključuju:</p>
                <ul>
                    <li>brži početak rada</li>
                    <li>manji troškovi organizacije</li>
                    <li>dolazak isti dan prema dostupnosti</li>
                    <li>precizno pozicioniranje tereta</li>
                    <li>sigurniji utovar i istovar</li>
                </ul>
            </>
        ),
    },
    {
        title: "Područje djelovanja",
        children: (
            <>
                <p>Uslugu kamiona s kranom pružamo na području cijelog Zagreba uključujući Novi Zagreb, Dubravu, Sesvete, Trešnjevku, Črnomerec i Maksimir, kao i okolna mjesta Zaprešić, Velika Gorica i Samobor.</p>
                <p>Dolazak je moguć isti dan ovisno o raspoloživosti termina.</p>
            </>
        ),
    },
    {
        title: "Zašto odabrati Kranex prijevoze?",
        children: (
            <>
                <p>Kranex prijevozi pruža pouzdanu i profesionalnu uslugu dizanja tereta kranom uz dugogodišnje iskustvo rada na gradilištima.</p>
                <ul>
                    <li>iskusan operater krana</li>
                    <li>siguran rad i stabilna oprema</li>
                    <li>fleksibilni termini</li>
                    <li>brza organizacija prijevoza</li>
                    <li>profesionalan pristup svakom projektu</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Kolika je cijena kamiona s kranom u Zagrebu?", a: "Cijena ovisi o vremenu rada, vrsti tereta i udaljenosti lokacije." },
    { q: "Da li kamion s kranom može podizati teret na kat?", a: "Da, kamionska dizalica omogućuje podizanje materijala i namještaja na više etaže." },
    { q: "Dolazite li isti dan?", a: "U većini slučajeva moguće je organizirati dolazak isti dan." },
];

export default function KamionSKranomZagreb() {
    return (
        <ServicePageLayout
            title="Kamion s kranom Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate kamion s kranom u Zagrebu?"
            ctaSubtitle="Kontaktirajte nas i dogovorite termin dizanja ili prijevoza tereta uz sigurnu i profesionalnu uslugu."
            ctaButtonText="Zatražite ponudu"
            faqHeading="Često postavljana pitanja"
            faq={faq}
            gallerySlug="kamion-s-kranom-zagreb"
        />
    );
}
