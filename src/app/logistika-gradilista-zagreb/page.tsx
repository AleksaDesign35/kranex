import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout, { type ServicePageSection } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Logistika gradilišta Zagreb | Opskrba i doprema materijala | Kranex",
    description:
        "Logistika gradilišta Zagreb – opskrba gradilišta, doprema materijala, planiranje dostava, fazne dostave. Kranex.",
    alternates: { canonical: "/logistika-gradilista-zagreb" },
};

const intro = (
    <>
        <p>
            U dinamičnom svijetu građevine, logistika gradilišta igra ključnu ulogu u osiguravanju da svi materijali stignu na vrijeme i na pravo mjesto. U Zagrebu, gdje su gradilišta često smještena u urbanim zonama s ograničenim pristupom, organizacija prijevoza postaje izazovna. Naša usluga omogućuje besprijekornu{" "}
            <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">opskrbu gradilišta</Link>
            {" "}te osigurava da doprema materijala bude brza i učinkovita. Efikasna logistika ne samo da smanjuje troškove već i poboljšava sigurnost na gradilištu, čineći svaki projekt uspješnijim. U svijetu gdje vrijeme znači novac, pravovremena dostava materijala može biti razlika između uspjeha i neuspjeha projekta.
        </p>
        <p>
            Bez obzira na veličinu vašeg projekta, precizno{" "}
            <Link href="/istovar-materijala-na-gradilistu-zagreb" className="font-medium text-primary hover:underline">planiranje dostava</Link>
            {" "}i{" "}
            <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">faze dostave</Link>
            {" "}omogućit će vam smanjenje zastoja i povećanje učinkovitosti. Naša stručnost u{" "}
            <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">dostavi bez viljuškara</Link>
            {" "}te isporuci na kat omogućava fleksibilnost koja je potrebna za uspjeh na terenu.
        </p>
    </>
);

const sections: ServicePageSection[] = [
    {
        title: "Kada treba ova usluga i kome je namijenjena",
        children: (
            <>
                <p>Logistika gradilišta postaje nužna kada se suočavate s kompleksnim projektima koji zahtijevaju koordinaciju velikog broja materijala. Ovo je posebno važno za projekte u Zagrebu gdje su prilazi često uski i zahtijevaju precizno{" "}
                    <Link href="/istovar-materijala-na-gradilistu-zagreb" className="font-medium text-primary hover:underline">planiranje dostava</Link>. Naša usluga pomaže građevinskim tvrtkama, izvođačima radova, kao i investitorima kojima je potrebna pouzdana{" "}
                    <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">opskrba gradilišta</Link>.</p>
                <p>Bez obzira na to vodite li izgradnju stambenog kompleksa ili renovirate poslovni prostor, dobro organizirana logistika može napraviti razliku. Nema više kašnjenja zbog nedostatka materijala – naš tim osigurava da sve bude isporučeno točno kada je potrebno. Uz to, pravovremena dostava omogućava optimalno korištenje radne snage, smanjujući vrijeme čekanja i povećavajući produktivnost na gradilištu.</p>
            </>
        ),
    },
    {
        title: "Što uključuje usluga i kako izgleda proces",
        children: (
            <>
                <p>Naša usluga uključuje sve aspekte{" "}
                    <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">logistike gradilišta</Link>, od inicijalnog savjetovanja do finalne dostave materijala. Proces je dizajniran kako bi osigurao maksimalnu učinkovitost i smanjenje zastoja:</p>
                <ol>
                    <li><strong>Konsultacija i procjena potreba</strong> – Razumijevanje specifičnih zahtjeva vašeg projekta.</li>
                    <li><strong>Izrada prilagođenog plana dostave</strong> – Definiranje{" "}
                        <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">faza dostave</Link> i vremenskih okvira.</li>
                    <li><strong>Koordinacija prijevoza</strong> – Organizacija prijevoza svih potrebnih materijala uz minimalne smetnje.</li>
                    <li><strong>Dostava i istovar</strong> –{" "}
                        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">Dostava bez viljuškara</Link> s mogućnošću isporuke na kat.</li>
                    <li><strong>Praćenje i izvještavanje</strong> – Održavanje transparentnosti kroz cijeli proces.</li>
                </ol>
                <p>Svaka faza procesa pažljivo je osmišljena kako bi se osigurala maksimalna učinkovitost i smanjenje zastoja. Naša stručnost u logistici omogućuje nam da predvidimo i riješimo potencijalne probleme prije nego što postanu prepreka.</p>
            </>
        ),
    },
    {
        title: "Tipični tereti i situacije (primjeri iz prakse)",
        children: (
            <>
                <ul>
                    <li>Dostava građevinskih blokova na uska gradilišta u centru Zagreba.</li>
                    <li>Isporuka staklenih panela na visoke katove zgrada.</li>
                    <li>Prijevoz čeličnih konstrukcija za industrijske objekte.</li>
                    <li>Opskrba stambenih kompleksa montažnim elementima.</li>
                    <li>Dostava drvene građe za renovacije povijesnih zdanja.</li>
                    <li><Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">Hitni prijevoz</Link> za nepredviđene potrebe.</li>
                </ul>
                <p>Naša sposobnost da se prilagodimo specifičnim potrebama svakog projekta omogućuje nam da pružimo uslugu koja je ne samo pouzdana već i visoko personalizirana. Bez obzira na izazove, naš tim je spreman pronaći rješenje koje će zadovoljiti vaše potrebe.</p>
            </>
        ),
    },
    {
        title: "Prednosti kamiona s kranom u Zagrebu",
        children: (
            <>
                <p>Upotreba kamiona s kranom donosi mnoge prednosti koje čine našu uslugu logistike gradilišta izuzetno efikasnom:</p>
                <ul>
                    <li><strong>Fleksibilnost u dostavi:</strong> Omogućuje{" "}
                        <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">dostavu bez viljuškara</Link> i na nepristupačna mjesta.</li>
                    <li><strong>Brzina i preciznost:</strong> Skraćuje vrijeme potrebno za utovar i istovar.</li>
                    <li><strong>Povećana sigurnost:</strong> Smanjuje rizik od oštećenja materijala tijekom transporta.</li>
                    <li><strong>Ekonomska isplativost:</strong> Smanjuje potrebu za dodatnom opremom.</li>
                    <li><strong>Prilagodljivost:</strong> Idealan za{" "}
                        <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">prijevoz na gradilište</Link> u urbanim područjima.</li>
                </ul>
                <p>Osim toga, kamioni s kranom omogućuju rad u uvjetima gdje bi tradicionalne metode dostave bile nepraktične ili nemoguće. Ova tehnologija omogućuje nam da pružimo uslugu koja je brza, sigurna i ekonomična, čime se dodatno povećava vrijednost za naše klijente.</p>
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
                <p>Ove specifikacije čine uslugu idealnom za urbane gradilišne izazove, gdje je pristup blokiran ili ograničen, i gdje je precizna dostava ključna za učinkovit tijek radova. Naša oprema omogućuje nam da odgovorimo na sve izazove koje gradilište može postaviti.</p>
            </>
        ),
    },
    {
        title: "Kako pripremiti lokaciju i što nam javiti prije dolaska",
        children: (
            <>
                <p>Prije našeg dolaska, važno je osigurati da je lokacija spremna za prijem materijala. Evo nekoliko koraka koje trebate poduzeti:</p>
                <ol>
                    <li><strong>Provjerite pristupne puteve</strong> – Osigurajte da su putevi do gradilišta prohodni i bez prepreka.</li>
                    <li><strong>Označite mjesto istovara</strong> – Jasno označite gdje želite da se materijal istovari.</li>
                    <li><strong>Osigurajte dovoljan prostor</strong> – Provjerite ima li dovoljno prostora za naš kamion i kran.</li>
                    <li><strong>Obavijestite o specifičnim zahtjevima</strong> – Ako imate posebne zahtjeve za dostavu, obavezno ih najavite unaprijed.</li>
                    <li><strong>Koordinirajte s osobljem na gradilištu</strong> – Osigurajte da su vaši radnici spremni za prijem i skladištenje materijala.</li>
                </ol>
                <p>Priprema lokacije ključna je za osiguranje glatkog i učinkovitog procesa dostave. Naš tim je uvijek spreman pružiti savjete i podršku kako bi se osiguralo da sve teče bez problema.</p>
            </>
        ),
    },
];

const faq = [
    { q: "Kako brzo možete organizirati dostavu?", a: "Dostavu možemo organizirati vrlo brzo, ovisno o vašim potrebama i našim trenutnim kapacitetima." },
    { q: "Koje vrste materijala možete transportirati?", a: "Specijalizirani smo za širok raspon građevinskih materijala, uključujući paletizirane terete, montažne elemente i blokove." },
    { q: "Je li moguće dostaviti materijal na više katove?", a: <>Da, naš kamion s kranom omogućuje <Link href="/istovar-materijala-na-gradilistu-zagreb" className="font-medium text-primary hover:underline">dostavu na kat</Link>.</> },
    { q: "Trebamo li osigurati dodatnu opremu za istovar?", a: <>Ne, naš kamion s kranom opremljen je za <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">dostavu bez viljuškara</Link>.</> },
    { q: "Mogu li pratiti status dostave?", a: "Da, nudimo praćenje i redovito izvještavanje tijekom cijelog procesa." },
];

export default function LogistikaGradilistaZagreb() {
    return (
        <ServicePageLayout
            title="Logistika gradilišta Zagreb"
            intro={intro}
            sections={sections}
            ctaTitle="Trebate logistiku gradilišta?"
            ctaSubtitle={
                <>
                    Učinkovita{" "}
                    <Link href="/prijevoz-na-gradiliste-zagreb" className="font-medium text-primary hover:underline">logistika gradilišta</Link>
                    {" "}ključna je za uspjeh svakog građevinskog projekta u Zagrebu i okolici. Naša usluga osigurava da doprema materijala bude pravovremena i precizno izvedena. Kontaktirajte nas danas kako biste saznali više o našim uslugama i zatražili personaliziranu ponudu. Posjetite nas i saznajte kako možemo pomoći u{" "}
                    <Link href="/hitni-prijevoz-zagreb" className="font-medium text-primary hover:underline">smanjenju zastoja</Link> i optimizaciji vašeg projekta.
                </>
            }
            faqHeading="Često postavljana pitanja (FAQ)"
            faq={faq}
            gallerySlug="logistika-gradilista-zagreb"
        />
    );
}
