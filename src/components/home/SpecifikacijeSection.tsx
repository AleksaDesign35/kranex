import Link from "next/link";
import { Phone } from "lucide-react";
import {
    Truck,
    Ruler,
    ArrowUpFromLine,
    Package,
    LayoutGrid,
    ArrowDownToLine,
    Boxes,
    Crosshair,
} from "lucide-react";

const SPECIFIKACIJE = [
    {
        title: "Nosivost vozila – do 12 tona",
        description:
            "Omogućuje siguran prijevoz građevinskog materijala, paleta i teških elemenata bez potrebe za dodatnim transportom ili pretovarom.",
        Icon: Truck,
    },
    {
        title: "Maksimalni doseg krana – do 20 m",
        description:
            "Hidraulički kran omogućuje precizno dizanje tereta na veće udaljenosti i teško dostupne lokacije na gradilištu.",
        Icon: Ruler,
    },
    {
        title: "Maksimalna visina dizanja – do 20 m",
        description:
            "Idealno za podizanje materijala na više katove stambenih i poslovnih objekata bez korištenja vanjskih dizalica.",
        Icon: ArrowUpFromLine,
    },
    {
        title: "Dimenzije tovarnog prostora – 6,20 m × 2,50 m",
        description:
            "Prostrana platforma omogućuje stabilan prijevoz dužih građevinskih elemenata i većih količina materijala.",
        Icon: Package,
    },
    {
        title: "Ravna platforma",
        description:
            "Osigurava stabilnost i sigurnost tereta tijekom prijevoza, posebno kod osjetljivih ili nepravilnih tereta.",
        Icon: LayoutGrid,
    },
    {
        title: "Utovar i istovar – hidraulički kran",
        description:
            "Samostalno obavljamo utovar i istovar tereta direktno na lokaciji bez potrebe za dodatnom mehanizacijom.",
        Icon: ArrowDownToLine,
    },
    {
        title: "Rad s paletama i građevinskim materijalom",
        description:
            "Prilagođeno rukovanje paletiranim materijalom, blokovima, ciglom, montažnim elementima i ostalom građevinskom opremom.",
        Icon: Boxes,
    },
    {
        title: "Precizno dizanje tereta na gradilištu",
        description:
            "Iskusan operater osigurava sigurno i kontrolirano postavljanje materijala na željenu poziciju.",
        Icon: Crosshair,
    },
] as const;

export default function SpecifikacijeSection() {
    return (
        <section
            id="specifikacije"
            className="scroll-mt-20 bg-zinc-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
        >
            <div className="mx-auto max-w-[1280px]">
                <h2 className="text-left text-2xl font-bold text-zinc-900 sm:text-3xl md:text-center">
                    Tehničke karakteristike kamiona s kranom
                </h2>
                <p className="mt-4 max-w-3xl text-left text-base leading-relaxed text-zinc-600 md:mx-auto md:text-center">
                    Specifikacije našeg kamiona s kranom omogućuju prijevoz tereta do 12 tona te dizanje materijala
                    na visinu i do 20 m. Zahvaljujući snažnom hidrauličkom kranu i stabilnoj platformi, idealni
                    smo za prijevoz građevinskog materijala i rad na gradilištima u Zagrebu i okolici.
                </p>
                <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
                    {SPECIFIKACIJE.map(({ title, description, Icon }) => (
                        <article
                            key={title}
                            className="group flex flex-col items-start rounded-2xl border-2 border-zinc-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                        >
                            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFEDD4] transition-colors group-hover:bg-primary">
                                <Icon
                                    className="h-7 w-7 text-primary transition-colors group-hover:text-white"
                                    strokeWidth={2}
                                    aria-hidden
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-zinc-900">{title}</p>
                                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{description}</p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-6 flex justify-center md:mt-14">
                    <Link
                        href="/#kontakt"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:opacity-95"
                    >
                        <Phone className="h-5 w-5" strokeWidth={2} aria-hidden />
                        Kontaktirajte nas za ponudu
                    </Link>
                </div>
            </div>
        </section>
    );
}
