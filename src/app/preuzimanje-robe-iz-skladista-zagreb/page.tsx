import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Preuzimanje robe iz skladišta Zagreb | Dostava na gradilište | Kranex",
    description:
        "Preuzimanje robe iz skladišta Zagreb – preuzimanje iz trgovine, dostava na gradilište, prijevoz paletirane robe, istovar bez viljuškara. Kranex.",
    alternates: { canonical: "/preuzimanje-robe-iz-skladista-zagreb" },
};

const intro = (
    <>
        <p>
            U dinamičnom ritmu Zagreba, svaka minuta je važna. Kada se suočavate s potrebom za efikasnim preuzimanjem i dostavom robe, bilo iz skladišta ili trgovine, na pravo mjesto u pravo vrijeme, naš tim je spreman pružiti vrhunsku uslugu. Specijalizirani smo za{" "}
            <Link href="/preuzimanje-robe-iz-skladista-zagreb" className="font-medium text-primary hover:underline">preuzimanje robe iz skladišta</Link>
            {" "}i dostavu na gradilišta diljem grada, osiguravajući siguran transport i pravovremenu isporuku bez obzira na uvjete.
        </p>
        <p>
            Naša usluga{" "}
            <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">prijevoz kamionom Zagreb</Link>
            {" "}omogućava vam da se usredotočite na ono što je najvažnije, dok mi brinemo o logistici. Bilo da se radi o paletiranoj robi ili specifičnim građevinskim materijalima, naš tim osigurava{" "}
            <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">brzu dostavu</Link>
            {" "}i precizno rukovanje svakim teretom.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Usluga preuzimanja i dostave robe posebno je korisna za građevinske tvrtke, trgovce građevinskim materijalima te sve one koji zahtijevaju efikasnu i pouzdanu logističku podršku. Ako imate potrebu za{" "}
                    <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">dostavom iz skladišta</Link>
                    {" "}na gradilište ili želite olakšati{" "}
                    <Link href="/preuzimanje-robe-iz-skladista-zagreb" className="font-medium text-primary hover:underline">preuzimanje robe iz trgovine</Link>
                    {" "}i njenu isporuku na točnu lokaciju, naš stručni tim će vam rado pomoći.</p>
                <p>Osim građevinskog sektora, ova usluga je korisna i za trgovačke lance koji trebaju{" "}
                    <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">prijevoz paletirane robe</Link>
                    {" "}do različitih distribucijskih centara i prodajnih mjesta unutar Zagreba. U situacijama kada vrijeme igra ključnu ulogu, a viljuškari nisu dostupni, naš{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link> pruža idealno rješenje.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naše usluge prijevoza i dostave pokrivaju sve aspekte, od inicijalnog preuzimanja do konačne isporuke na gradilište. Evo kako to izgleda:</p>
                <ol>
                    <li><strong>Kontakt i dogovor:</strong> Telefonski ili putem e-maila dogovaramo detalje o{" "}
                        <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">transportu robe Zagreb</Link>, uključujući odredište i vrstu tereta.</li>
                    <li><strong>Preuzimanje robe:</strong> Naši vozači preuzimaju robu iz skladišta ili trgovine, osiguravajući da je sve ispravno zapakirano i spremno za{" "}
                        <Link href="/prijevoz-kamionom-zagreb" className="font-medium text-primary hover:underline">prijevoz kamionom Zagreb</Link>.</li>
                    <li><strong>Dostava na lokaciju:</strong> Robu dostavljamo na dogovoreno gradilište ili odredište unutar Zagreba i okolice.</li>
                    <li><strong>Istovar:</strong> Koristeći{" "}
                        <Link href="/istovar-bez-viljuskara-zagreb" className="font-medium text-primary hover:underline">dostavu bez viljuškara</Link>, naš tim koristi kamion s kranom za precizan istovar, čak i na teško dostupnim lokacijama.</li>
                    <li><strong>Završna provjera:</strong> Nakon istovara, provjeravamo stanje isporučene robe i završavamo proces uz vašu potvrdu.</li>
                </ol>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <ul>
                    <li>Građevinski materijal (cigle, blokovi) za gradilišta u centru Zagreba.</li>
                    <li>Paletirana roba za trgovačke centre na periferiji grada.</li>
                    <li>Montažni elementi za stambene zgrade.</li>
                    <li>Osjetljivi tereti poput staklenih panela za poslovne objekte.</li>
                    <li>Dostava opreme za manifestacije i sajmove.</li>
                    <li>Redovita dostava građevinskih alata na različite lokacije.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <ul>
                    <li><strong>Fleksibilnost:</strong> Mogućnost pristupa uskim ulicama i skučenim prostorima.</li>
                    <li><strong>Preciznost:</strong> Točno pozicioniranje tereta na željeno mjesto.</li>
                    <li><strong>Samostalnost:</strong> Nema potrebe za dodatnom opremom poput viljuškara.</li>
                    <li><strong>Ušteda vremena:</strong> Brži proces preuzimanja i isporuke.</li>
                    <li><strong>Sigurnost:</strong> Smanjen rizik od oštećenja tereta prilikom rukovanja.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Tehničke specifikacije kamiona s kranom",
        children: (
            <>
                <p>Naša usluga{" "}
                    <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">dostava na gradilište</Link>
                    {" "}izvedena je specijaliziranim kamionom s hidrauličkim kranom čije karakteristike omogućuju siguran i učinkovit prijevoz.</p>
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
                <p>Priprema lokacije i pravovremena komunikacija ključni su za uspješnu dostavu. Evo nekoliko savjeta:</p>
                <ul>
                    <li>Osigurajte dovoljno prostora za{" "}
                        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">kamion s kranom Zagreb</Link> na mjestu isporuke.</li>
                    <li>Provjerite pristupačne putove do gradilišta i obavijestite nas o mogućim preprekama.</li>
                    <li>Javite nam specifične potrebe vezane uz teret (osjetljivost, posebne upute za rukovanje).</li>
                    <li>Pripremite sve potrebne dozvole za ulazak u zaštićene zone ili gradilišta.</li>
                    <li>Osigurajte odgovornu osobu na licu mjesta za preuzimanje tereta.</li>
                </ul>
            </>
        ),
    },
];

const faq = [
    { q: "Koliko unaprijed trebam rezervirati uslugu?", a: <>Preporučujemo rezervaciju najmanje 24 sata unaprijed, no za <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">hitni prijevoz Zagreb</Link>, kontaktirajte nas što je prije moguće.</> },
    { q: "Može li se dostava obaviti izvan radnog vremena?", a: "Moguća je dostava izvan standardnog radnog vremena prema dogovoru." },
    { q: "Koje vrste tereta možete prevoziti?", a: "Specijalizirani smo za razne vrste tereta, uključujući građevinski materijal, paletiranu robu i osjetljive elemente." },
    { q: "Što ako moja lokacija nema pristup za kamion?", a: <>Naš <Link href="/kamion-odmah-zagreb" className="font-medium text-primary hover:underline">kamion odmah Zagreb</Link> nudi fleksibilna rješenja čak i za teško dostupne lokacije.</> },
    { q: "Kako se obračunava cijena usluge?", a: "Cijena se određuje prema težini tereta, udaljenosti i specifičnim zahtjevima dostave." },
];

export default function PreuzimanjeRobeIzSkladistaZagreb() {
    return (
        <ServicePageLayout
            title="Preuzimanje robe iz skladišta i dostava Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate preuzimanje i dostavu?"
            ctaSubtitle={
                <>
                    Ako vam je potrebna pouzdana i efikasna usluga preuzimanja i dostave robe u Zagrebu i okolici, obratite nam se s povjerenjem. Posjetite našu stranicu za{" "}
                    <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">prijevoz na gradilište Zagreb</Link>
                    {" "}ili nas kontaktirajte izravno kako bismo dogovorili sve detalje i osigurali da vaša roba stigne na odredište brzo i sigurno.{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">Kamion s kranom Zagreb</Link> čeka vaš poziv!
                </>
            }
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="preuzimanje-robe-iz-skladista-zagreb"
        />
    );
}
