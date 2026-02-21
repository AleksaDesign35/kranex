import { ChevronDown } from "lucide-react";

const FAQ = [
    {
        q: "Kolika je cijena prijevoza građevinskog materijala u Zagrebu?",
        a: "Cijena ovisi o udaljenosti, težini i vremenu rada krana.",
    },
    {
        q: "Da li vršite utovar i istovar kranom?",
        a: "Da, kamion je opremljen hidrauličkim kranom.",
    },
    {
        q: "Dolazite li isti dan?",
        a: "U većini slučajeva da, ovisno o dostupnosti.",
    },
    {
        q: "Radite li prijevoz namještaja kranom u Zagrebu?",
        a: "Da, omogućujemo sigurno dizanje namještaja kranom na više katove i teško dostupne lokacije.",
    },
    {
        q: "Na kojim područjima Zagreba radite?",
        a: "Radimo na području cijelog Zagreba i okolice.",
    },
    {
        q: "Koliko brzo možete organizirati prijevoz?",
        a: "U većini slučajeva prijevoz je moguće organizirati isti dan.",
    },
] as const;

export default function FaqSection() {
    return (
        <section id="faq" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
                    Često postavljana pitanja
                </h2>
                <div className="mx-auto mt-12 max-w-2xl space-y-4">
                    {FAQ.map(({ q, a }) => (
                        <details
                            key={q}
                            className="group rounded-2xl border-2 border-zinc-100 bg-zinc-50 transition-colors hover:border-primary/20 open:border-primary/20 open:bg-white"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-zinc-900 [&::-webkit-details-marker]:hidden">
                                <span>{q}</span>
                                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" strokeWidth={2} />
                            </summary>
                            <p className="border-t border-zinc-200 px-6 py-4 text-zinc-600">
                                {a}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
