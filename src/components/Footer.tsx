import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { KONTAKT } from "@/lib/constants";
import InstagramIcon from "@/components/icons/InstagramIcon";

const FOOTER_USLUGE = [
    { slug: "kamion-s-kranom-zagreb", label: "Kamion s kranom" },
    { slug: "prijevoz-kamionom-zagreb", label: "Prijevoz kamionom" },
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
                    <Link href="/" aria-label="Kranex prijevozi – početna" className="flex items-center">
                        <Image
                            src="/images/logo_white.svg"
                            alt="Kranex prijevozi"
                            width={280}
                            height={96}
                            className="h-20 w-auto md:h-[7.5rem]"
                        />
                    </Link>

                    <nav>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                            Usluge
                        </h4>
                        <ul className="mt-4 space-y-3">
                            {FOOTER_USLUGE.map(({ slug, label }) => (
                                <li key={slug}>
                                    <Link
                                        href={`/${slug}`}
                                        className="text-base text-zinc-400 transition hover:text-white hover:underline"
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
                                    className="flex items-center gap-2 text-base text-zinc-400 transition hover:text-white"
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
                                    className="flex items-start gap-2 text-base text-zinc-400 transition hover:text-white"
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
                                    className="flex items-center gap-2 text-base text-zinc-400 transition hover:text-white"
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
                                    className="text-base text-zinc-400 transition hover:text-white hover:underline"
                                >
                                    Impressum
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">
                    <p className="text-base text-zinc-500">
                        © {new Date().getFullYear()} Kranex prijevozi. Sva prava pridržana.
                    </p>
                </div>
            </div>
        </footer>
    );
}
