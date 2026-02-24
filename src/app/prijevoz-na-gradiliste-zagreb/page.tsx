import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Prijevoz na gradilište Zagreb – Direktno na lokaciju | Kranex prijevozi",
    description:
        "Prijevoz materijala direktno na gradilište u Zagrebu i okolici. Bez dodatne mehanizacije – kamion s kranom obavi utovar, transport i istovar. Kontaktirajte nas.",
    alternates: { canonical: "/prijevoz-na-gradiliste-zagreb" },
};

const intro = (
    <p>
        Kranex prijevozi nudi{" "}
        <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">prijevoz građevinskog materijala Zagreb</Link>
        {" "}i tereta direktno na vaše gradilište u Zagrebu i okolici. Naš{" "}
        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link>
        {" "}omogućuje siguran utovar, transport i istovar bez potrebe za dodatnom mehanizacijom.
    </p>
);

const sections: ServicePageSection[] = [
    {
        title: "Sve na jednom mjestu",
        children: (
            <p>
                Naš kamion s kranom obavlja cijeli posao – od utovara u skladištu ili kamenolomu do preciznog istovara na gradilištu. Za vas to znači manje organizacije, manje strojeva i brži napredak radova.
            </p>
        ),
    },
    {
        title: "Pokrivamo Zagreb i okolicu",
        children: (
            <p>
                Radimo na gradilištima širom Zagreba i šire regije. Dolazak isti dan kada je moguće, fleksibilni termini. Kontaktirajte nas za besplatnu ponudu prilagođenu vašem projektu.
            </p>
        ),
    },
    {
        title: "Organizirani prijevoz materijala direktno na gradilište",
        children: (
            <>
                <p>
                    Prijevoz na gradilište u Zagrebu zahtijeva preciznu logistiku kako bi materijal stigao točno u trenutku kada je potreban. Naš kamion s kranom omogućuje dostavu građevinskog materijala bez dodatnih manipulacija i čekanja.
                </p>
                <p>
                    Materijal se može podići kranom i postaviti direktno na željenu poziciju na gradilištu, čime se ubrzava izvođenje radova i smanjuje potreba za dodatnom opremom.
                </p>
            </>
        ),
    },
    {
        title: "Kamion za gradilište Zagreb",
        children: (
            <>
                <p>
                    Kamion za gradilište idealan je za transport paletiranog materijala, montažnih elemenata i građevinske opreme. Zahvaljujući kamionskoj dizalici moguće je raditi i na lokacijama s ograničenim pristupom.
                </p>
                <p>
                    Uslugu često koriste građevinske firme, izvođači radova i privatni investitori koji trebaju pouzdan prijevoz materijala na gradilište u Zagrebu i okolici.
                </p>
            </>
        ),
    },
];

export default function PrijevozNaGradilisteZagreb() {
    return (
        <ServicePageLayout
            title="Prijevoz na gradilište Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate prijevoz na gradilište?"
            ctaSubtitle="Kontaktirajte nas za besplatnu ponudu prilagođenu vašem projektu."
            faqHeading="Često postavljana pitanja"
            faq={[]}
            gallerySlug="prijevoz-na-gradiliste-zagreb"
        />
    );
}
