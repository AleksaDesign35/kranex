import { ChevronDown } from "lucide-react";

const FAQ = [
    {
        q: "Kolika je cijena prijevoza građevinskog materijala u Zagrebu?",
        a: "Utovar i istovar kranom iznosi 50 EUR po satu uz minimalni obračun od 1 sata. Dodatno vrijeme na gradilištu naplaćuje se 50 EUR po započetom satu, dodatni radnik 15 EUR po satu, a čekanje na lokaciji 30 EUR po satu ako nije unaprijed dogovoreno. Za duge relacije preko 150 km cijena je od 1,50 EUR do 3,00 EUR po kilometru uz dodatnu naplatu cestarina, dok lokalne vožnje po Zagrebu kreću od 150 EUR. Konačna cijena ovisi o težini tereta, visini i udaljenosti dizanja te lokaciji utovara i istovara.",
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
    {
        q: "Koliko prostora treba za rad krana?",
        a: "Za siguran rad kamiona s kranom potrebno je osigurati dovoljno prostora za parkiranje vozila i stabilizaciju potpornih nogu. U pravilu je potrebno minimalno 2–3 metra širine sa svake strane kamiona za izvlačenje stabilizatora, dok ukupna duljina prostora ovisi o poziciji tereta i dosegu krana. Prije dolaska procjenjujemo situaciju prema vašem opisu ili fotografijama lokacije kako bismo osigurali siguran i učinkovit rad.",
    },
    {
        q: "Trebam li osigurati dozvolu za dizanje?",
        a: "U većini slučajeva na privatnim parcelama nije potrebna posebna dozvola. Međutim, ako se dizanje obavlja na javnoj površini (cesta, nogostup, javno parkiralište) ili je potrebno privremeno zatvaranje prometa, može biti potrebna dozvola nadležnih gradskih službi. U takvim situacijama savjetujemo vas oko procedure i potrebne dokumentacije.",
    },
    {
        q: "Možete li raditi u centru Zagreba?",
        a: "Da, radimo i u centru Zagreba, uključujući zone s otežanim pristupom. Zahvaljujući iskustvu rada na gradilištima i u urbanim sredinama, prilagođavamo pozicioniranje vozila i organizaciju rada uvjetima lokacije. Ako postoji ograničenje prometa ili poseban režim, potrebno je to unaprijed naglasiti kako bismo planirali dolazak.",
    },
    {
        q: "Što ako pada kiša?",
        a: "Rad krana moguć je i u kišnim uvjetima, pod uvjetom da sigurnost nije ugrožena. U slučaju jakog vjetra, olujnih uvjeta ili situacija koje mogu predstavljati sigurnosni rizik, rad se može privremeno odgoditi. Sigurnost tereta, objekta i ljudi uvijek nam je prioritet.",
    },
    {
        q: "Imate li osiguranje?",
        a: "Da, posjedujemo odgovarajuće osiguranje za obavljanje djelatnosti prijevoza i rukovanja teretom. Radimo prema sigurnosnim standardima, a rukovanje kranom obavlja iskusan i kvalificiran operater kako bi rizik bio sveden na minimum.",
    },
] as const;

export default function FaqSection() {
    return (
        <section id="faq" className="scroll-mt-20 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="text-left text-2xl font-bold text-zinc-900 sm:text-3xl md:text-center">
                    Često postavljana pitanja
                </h2>
                <div className="mt-6 max-w-2xl space-y-4 sm:mt-8 md:mx-auto md:mt-12">
                    {FAQ.map(({ q, a }) => (
                        <article key={q}>
                        <details
                            className="group rounded-2xl border-2 border-zinc-100 bg-zinc-50 transition-colors hover:border-primary/20 open:border-primary/20 open:bg-white"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-semibold text-zinc-900 [&::-webkit-details-marker]:hidden">
                                <span>{q}</span>
                                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" strokeWidth={2} />
                            </summary>
                            <p className="border-t border-zinc-200 px-5 py-3 text-base text-zinc-600">
                                {a}
                            </p>
                        </details>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
