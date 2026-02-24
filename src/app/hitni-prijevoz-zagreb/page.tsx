import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Hitni prijevoz Zagreb – Dolazak isti dan | Kranex prijevozi",
    description:
        "Hitni prijevoz građevinskog materijala i tereta u Zagrebu. Dolazak isti dan, fleksibilni termini. Kontaktirajte nas odmah za brzu ponudu.",
    alternates: { canonical: "/hitni-prijevoz-zagreb" },
};

const intro = (
    <>
        <p>
            Trebate hitan prijevoz građevinskog materijala ili tereta u Zagrebu? Kranex prijevozi nudi brzu uslugu – u većini slučajeva dolazak isti dan, ovisno o dostupnosti. Brzo organiziramo{" "}
            <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">prijevoz na gradilište Zagreb</Link>
            {" "}kada je potrebno.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Brz odziv, fleksibilnost",
        children: (
            <p>Razumijemo da gradilišta često zahtijevaju brzu reakciju. Zato nastojimo odgovoriti na upite u najkraćem mogućem roku i organizirati prijevoz čim prije. Fleksibilni termini i iskusan vozač osiguravaju da vaš materijal stigne na vrijeme.</p>
        ),
    },
    {
        title: "Što prevozimo hitno?",
        children: (
            <p>Građevinski materijal (pijesak, šljunak, cigla, beton), palete, metalne konstrukcije, građevinski alat i ostali teret. Kamion s kranom obavlja utovar i istovar direktno na lokaciji. Nazovite nas za besplatnu i brzu ponudu.</p>
        ),
    },
    {
        title: "Hitni prijevoz materijala isti dan",
        children: (
            <>
                <p>Gradilišta često zahtijevaju brzu reakciju kada nedostaje materijal ili oprema. Hitni prijevoz u Zagrebu omogućuje organizaciju transporta u kratkom roku, često isti dan, ovisno o dostupnosti.</p>
                <p>Kamion s kranom omogućuje brzo rješenje jer obavlja utovar, transport i istovar bez dodatne koordinacije više izvođača.</p>
            </>
        ),
    },
    {
        title: "Kada koristiti hitni prijevoz?",
        children: (
            <>
                <p>Hitni prijevoz koristi se kada:</p>
                <ul>
                    <li>nedostaje građevinski materijal na gradilištu</li>
                    <li>potrebno je brzo premjestiti opremu</li>
                    <li>kasni isporuka dobavljača</li>
                    <li>potrebno je hitno dizanje tereta kranom</li>
                </ul>
                <p>Brza dostupnost i fleksibilni termini omogućuju nastavak radova bez zastoja.</p>
            </>
        ),
    },
];

export default function HitniPrijevozZagreb() {
    return (
        <ServicePageLayout
            title="Hitni prijevoz Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate hitnu ponudu?"
            ctaSubtitle="Kontaktirajte nas za hitnu ponudu."
            ctaButtonText="Kontaktirajte nas za hitnu ponudu"
            faqHeading="Često postavljana pitanja"
            faq={[]}
            gallerySlug="hitni-prijevoz-zagreb"
        />
    );
}
