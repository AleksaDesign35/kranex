import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Prijevoz na gradilište Zagreb – Direktno na lokaciju | Kranex prijevozi",
    description:
        "Prijevoz materijala direktno na gradilište u Zagrebu i okolici. Bez dodatne mehanizacije – kamion s kranom obavi utovar, transport i istovar. Kontaktirajte nas.",
};

export default function PrijevozNaGradilisteZagreb() {
    return (
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-0 md:pt-10 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-zinc-900">
                Prijevoz na gradilište Zagreb
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                Kranex prijevozi nudi{" "}
                <Link href="/prijevoz-gradevinskog-materijala-zagreb" className="font-medium text-primary hover:underline">
                    prijevoz građevinskog materijala Zagreb
                </Link>
                {" "}i tereta direktno na vaše gradilište u Zagrebu i okolici. Naš{" "}
                <Link href="/kamion-s-kranom-zagreb" className="font-medium text-primary hover:underline">
                    kamion s kranom Zagreb
                </Link>
                {" "}omogućuje siguran utovar, transport i istovar bez potrebe za dodatnom mehanizacijom.
            </p>
            <article className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
                <section>
                <h2 className="text-xl font-semibold text-zinc-900">
                    Sve na jednom mjestu
                </h2>
                <p>
                    Naš kamion s kranom obavlja cijeli posao – od utovara u skladištu ili
                    kamenolomu do preciznog istovara na gradilištu. Za vas to znači manje
                    organizacije, manje strojeva i brži napredak radova.
                </p>
                </section>
                <section>
                <h2 className="text-xl font-semibold text-zinc-900">
                    Pokrivamo Zagreb i okolicu
                </h2>
                <p>
                    Radimo na gradilištima širom Zagreba i šire regije. Dolazak isti dan
                    kada je moguće, fleksibilni termini. Kontaktirajte nas za besplatnu
                    ponudu prilagođenu vašem projektu.
                </p>
                </section>
                <section>
                <h2 className="text-xl font-semibold text-zinc-900">
                    Organizirani prijevoz materijala direktno na gradilište
                </h2>
                <p>
                    Prijevoz na gradilište u Zagrebu zahtijeva preciznu logistiku kako bi
                    materijal stigao točno u trenutku kada je potreban. Naš kamion s
                    kranom omogućuje dostavu građevinskog materijala bez dodatnih
                    manipulacija i čekanja.
                </p>
                <p>
                    Materijal se može podići kranom i postaviti direktno na željenu
                    poziciju na gradilištu, čime se ubrzava izvođenje radova i smanjuje
                    potreba za dodatnom opremom.
                </p>
                </section>
                <section>
                <h2 className="text-xl font-semibold text-zinc-900">
                    Kamion za gradilište Zagreb
                </h2>
                <p>
                    Kamion za gradilište idealan je za transport paletiranog materijala,
                    montažnih elemenata i građevinske opreme. Zahvaljujući kamionskoj
                    dizalici moguće je raditi i na lokacijama s ograničenim pristupom.
                </p>
                <p>
                    Uslugu često koriste građevinske firme, izvođači radova i privatni
                    investitori koji trebaju pouzdan prijevoz materijala na gradilište u
                    Zagrebu i okolici.
                </p>
                </section>
            </article>
            <aside aria-label="Poziv na akciju">
            <Link
                href="/#kontakt"
                className="mt-10 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-95"
            >
                Kontaktirajte nas za ponudu
            </Link>
            </aside>
        </main>
    );
}
