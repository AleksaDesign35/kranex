import Link from "next/link";
import { Truck, Phone, MapPin } from "lucide-react";
import { KONTAKT } from "@/lib/constants";
import InstagramIcon from "@/components/icons/InstagramIcon";

const FOOTER_USLUGE = [
    { slug: "kamion-s-kranom-zagreb", label: "Kamion s kranom" },
    { slug: "prijevoz-gradevinskog-materijala-zagreb", label: "Prijevoz građevinskog materijala" },
    { slug: "prijevoz-na-gradiliste-zagreb", label: "Prijevoz na gradilište" },
    { slug: "hitni-prijevoz-zagreb", label: "Hitni prijevoz" },
    { slug: "prijevoz-namjestaja-i-dizanje-kranom-zagreb", label: "Prijevoz namještaja" },
];

export default function Footer() {
    return (
        <footer className="bg-[#111828] py-12 text-white">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex items-start gap-3">
                        <Truck
                            className="mt-1 h-8 w-8 shrink-0 text-primary"
                            strokeWidth={2}
                            aria-hidden
                        />
                        <div>
                            <h3 className="text-xl font-bold">Kranex prijevozi</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                                Profesionalne usluge dizalica i transporta
                            </p>
                        </div>
                    </div>

                    <nav>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                            Usluge
                        </h4>
                        <ul className="mt-4 space-y-3">
                            {FOOTER_USLUGE.map(({ slug, label }) => (
                                <li key={slug}>
                                    <Link
                                        href={`/${slug}`}
                                        className="text-sm text-zinc-400 transition hover:text-white hover:underline"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                            Kontakt
                        </h4>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href={KONTAKT.telHref}
                                    className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                                >
                                    <Phone className="h-4 w-4 shrink-0" strokeWidth={2} />
                                    {KONTAKT.telefon}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={KONTAKT.mapsHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-2 text-sm text-zinc-400 transition hover:text-white"
                                >
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                                    <span>{KONTAKT.adresa}</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={KONTAKT.instagramHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                                    aria-label="Instagram"
                                >
                                    <InstagramIcon className="h-4 w-4 shrink-0" strokeWidth={2} />
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                            Pravne informacije
                        </h4>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="/impressum"
                                    className="text-sm text-zinc-400 transition hover:text-white hover:underline"
                                >
                                    Impressum
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">
                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} Kranex prijevozi. Sva prava pridržana.
                    </p>
                </div>
            </div>
        </footer>
    );
}
