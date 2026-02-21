import { CircleCheckBig } from "lucide-react";
import { PREDNOSTI } from "@/lib/constants";

export default function ONamaSection() {
    return (
        <section id="o-nama" className="scroll-mt-20 bg-zinc-50 py-20">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-8 text-4xl font-bold text-zinc-900 md:text-5xl">
                        Tko smo mi
                    </h2>
                    <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-700 pb-4 sm:pb-6 lg:pb-8">
                        Kranex prijevozi je obiteljska firma s višegodišnjim iskustvom u
                        sektoru cestovnog prijevoza i građevinskih materijala i usluga. Naš glavni cilj
                        je pružiti kvalitetnu, sigurnu i brzu uslugu svakom klijentu.
                    </p>
                    <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-700">
                        Posjedujemo veliki kamion s kranom koji omogućuje fleksibilnost u
                        radu – dizanje tereta,prijevoz građevinskog materijala, prijevoz rasutog materijala, kipanje i više.
                    </p>
                </div>
                <div className="mb-16">
                    <h3 className="mb-8 text-center text-2xl font-bold text-zinc-900">
                        Naš stručni tim osigurava profesionalan pristup svakom poslu, bez
                        obzira na veličinu projekta i nudi sljedeće prednosti:
                    </h3>
                    <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {PREDNOSTI.map((text) => (
                            <article
                                key={text}
                                className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md"
                            >
                                <CircleCheckBig
                                    className="mt-1 h-6 w-6 shrink-0 text-primary"
                                    strokeWidth={2}
                                    aria-hidden
                                />
                                <p className="text-zinc-700">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
