import { CircleCheckBig } from "lucide-react";
import { PREDNOSTI } from "@/lib/constants";

export default function ONamaSection() {
    return (
        <section id="o-nama" className="scroll-mt-20 bg-zinc-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <div className="mb-8 text-left sm:mb-12 md:text-center lg:mb-16">
                    <h2 className="mb-4 text-3xl font-bold text-zinc-900 sm:mb-6 md:text-4xl lg:text-5xl lg:mb-8">
                        Tko smo mi
                    </h2>
                    <p className="max-w-4xl text-left text-base leading-relaxed text-zinc-700 pb-4 sm:pb-6 md:mx-auto md:text-center lg:pb-8">
                        Kranex prijevozi je obiteljska firma s višegodišnjim iskustvom u
                        sektoru cestovnog prijevoza i građevinskih materijala i usluga. Naš glavni cilj
                        je pružiti kvalitetnu, sigurnu i brzu uslugu svakom klijentu.
                    </p>
                    <p className="max-w-4xl text-left text-base leading-relaxed text-zinc-700 md:mx-auto md:text-center">
                        Posjedujemo veliki kamion s kranom koji omogućuje fleksibilnost u
                        radu – dizanje tereta,prijevoz građevinskog materijala, prijevoz rasutog materijala, kipanje i više.
                    </p>
                </div>
                <div className="mb-8 sm:mb-12 lg:mb-16">
                    <p className="mb-4 text-left text-base leading-relaxed text-zinc-700 sm:mb-6 md:text-center lg:mb-8">
                        Naš stručni tim osigurava profesionalan pristup svakom poslu, bez
                        obzira na veličinu projekta i nudi sljedeće prednosti:
                    </p>
                    <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:gap-6 lg:mb-12 md:grid-cols-2">
                        {PREDNOSTI.map((text) => (
                            <article
                                key={text}
                                className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-md"
                            >
                                <CircleCheckBig
                                    className="mt-1 h-6 w-6 shrink-0 text-primary"
                                    strokeWidth={2}
                                    aria-hidden
                                />
                                <p className="text-base text-zinc-700">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
