import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Prijevoz građevinskog materijala Zagreb | Kamion s kranom | Kranex prijevozi",
    description:
        "Prijevoz građevinskog materijala u Zagrebu kamionom s kranom. Siguran transport, utovar i istovar direktno na gradilištu. Brza dostupnost i profesionalna usluga.",
    alternates: { canonical: "/prijevoz-gradevinskog-materijala-zagreb" },
};

const intro = (
    <>
        <p>
            Kranex prijevozi pruža profesionalni prijevoz građevinskog materijala u Zagrebu i okolici koristeći{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
            {" "}koji omogućuje siguran utovar, transport i istovar materijala direktno na lokaciji. Specijalizirani smo za prijevoz cigle, blokova, paletiranog građevinskog materijala, montažnih elemenata i građevinske opreme za privatne investitore, građevinske firme i poslovne korisnike.
        </p>
        <p>
            Naša usluga prijevoza građevinskog materijala u Zagrebu omogućuje brzu i sigurnu dostavu bez potrebe za dodatnom mehanizacijom jer kamionska dizalica obavlja kompletan proces manipulacije teretom.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Profesionalni prijevoz građevinskog materijala u Zagrebu",
        children: (
            <>
                <p>Prijevoz građevinskog materijala zahtijeva preciznost, iskustvo i odgovarajuću opremu. Naš kamion s kranom omogućuje transport materijala na gradilišta, privatne objekte i poslovne lokacije uz maksimalnu sigurnost i kontrolu tijekom cijelog procesa.</p>
                <p>Organiziramo prijevoz materijala na gradilište u Zagrebu bez dodatnih troškova najma dizalica ili dodatne radne snage, što značajno ubrzava izvođenje građevinskih radova.</p>
            </>
        ),
    },
    {
        title: "Što prevozimo?",
        children: (
            <>
                <p>Prevozimo različite vrste građevinskog materijala i opreme, uključujući:</p>
                <ul>
                    <li>ciglu i blokove</li>
                    <li>paletirani građevinski materijal</li>
                    <li>montažne građevinske elemente</li>
                    <li>metalne konstrukcije</li>
                    <li>građevinsku opremu i alate</li>
                    <li>velike i teške elemente za gradnju i renovaciju</li>
                </ul>
                <p>Zahvaljujući kamionskoj dizalici moguće je precizno postaviti materijal direktno na željeno mjesto na gradilištu.</p>
            </>
        ),
    },
    {
        title: "Kako izgleda proces prijevoza?",
        children: (
            <>
                <p>Proces prijevoza građevinskog materijala organiziran je kako bi klijent dobio kompletnu uslugu bez komplikacija:</p>
                <ol>
                    <li>Dogovor termina i procjena tereta</li>
                    <li>Dolazak kamiona s kranom na lokaciju</li>
                    <li>Siguran utovar materijala kranom</li>
                    <li>Transport do odredišta</li>
                    <li>Precizan istovar direktno na gradilištu</li>
                </ol>
                <p>Ovakav način rada smanjuje vrijeme rada i povećava sigurnost manipulacije materijalom.</p>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom",
        children: (
            <>
                <p>Kamion s kranom predstavlja idealno rješenje za prijevoz građevinskog materijala u urbanim područjima poput Zagreba gdje je često ograničen pristup gradilištu.</p>
                <p>Prednosti uključuju:</p>
                <ul>
                    <li>utovar i istovar bez dodatne mehanizacije</li>
                    <li>brži rad na gradilištu</li>
                    <li>precizno postavljanje materijala</li>
                    <li>smanjenje troškova logistike</li>
                    <li>sigurniji transport teških elemenata</li>
                </ul>
            </>
        ),
    },
    {
        title: "Područje djelovanja Zagreb i okolica",
        children: (
            <>
                <p>Uslugu prijevoza građevinskog materijala pružamo na području cijelog Zagreba uključujući Novi Zagreb, Dubravu, Sesvete, Trešnjevku, Črnomerec i Maksimir, kao i okolna mjesta Zaprešić, Velika Gorica i Samobor.</p>
                <p>Dolazak na lokaciju moguć je prema dogovoru, a u većini slučajeva prijevoz je moguće organizirati isti dan.</p>
            </>
        ),
    },
    {
        title: "Zašto odabrati Kranex prijevoze?",
        children: (
            <>
                <p>Kranex prijevozi kombinira iskustvo, profesionalnu opremu i fleksibilan pristup svakom projektu.</p>
                <ul>
                    <li>iskusan vozač kamiona s kranom</li>
                    <li>siguran transport materijala</li>
                    <li>dolazak isti dan prema dostupnosti</li>
                    <li>fleksibilni termini rada</li>
                    <li>pouzdana usluga za privatne i poslovne klijente</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koliko košta prijevoz građevinskog materijala u Zagrebu?", a: "Cijena ovisi o udaljenosti, vrsti tereta i vremenu rada krana." },
    { q: "Da li vršite utovar i istovar kranom?", a: "Da, kamion je opremljen dizalicom koja omogućuje kompletan utovar i istovar." },
    { q: "Radite li dostavu direktno na gradilište?", a: "Da, materijal postavljamo direktno na željenu poziciju." },
];

export default function PrijevozGradevinskogMaterijalaZagreb() {
    return (
        <ServicePageLayout
            title="Prijevoz građevinskog materijala Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate siguran prijevoz građevinskog materijala u Zagrebu?"
            ctaSubtitle="Kontaktirajte nas danas i dogovorite termin prijevoza kamionom s kranom uz brzu i profesionalnu uslugu."
            ctaButtonText="Zatražite ponudu"
            faqHeading="Često postavljana pitanja"
            faq={faq}
            gallerySlug="prijevoz-gradevinskog-materijala-zagreb"
        />
    );
}
