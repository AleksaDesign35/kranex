import { CircleCheckBig } from "lucide-react";

const PREDNOSTI_ZAGREB = [
    "Dolazak isti dan",
    "Iskusan vozač krana",
    "Siguran transport",
    "Rad na gradilištima",
    "Fleksibilni termini",
] as const;

export default function ZastoOdabratiSection() {
    return (
        <section className="scroll-mt-20 bg-zinc-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="text-left text-2xl font-bold text-zinc-900 sm:text-3xl md:text-center">
                    Zašto odabrati naš prijevoz u Zagrebu?
                </h2>
                <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 xl:grid-cols-5">
                    {PREDNOSTI_ZAGREB.map((text) => (
                        <article
                            key={text}
                            className="flex items-center gap-4 rounded-2xl border-2 border-zinc-100 bg-white p-5 shadow-sm"
                        >
                            <CircleCheckBig
                                className="h-6 w-6 shrink-0 text-primary"
                                strokeWidth={2}
                                aria-hidden
                            />
                            <p className="font-medium text-zinc-800">{text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
