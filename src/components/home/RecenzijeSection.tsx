"use client";

import { useState } from "react";

const RECENZIJE = [
    { ime: "Top G", lokacija: "prije 4 mjeseca", tekst: "Odlican odgovor na upit za prijevoz gradevinskog materijala, dogovorili se u kratkom roku i usluga izvrsena profesionalno i brzo. Svaka preporuka." },
    { ime: "Marija Malarić", lokacija: "prije mjesec dana", tekst: "Kranex prijevoz je pravo osvježenje u svijetu građevinskog transporta. Dogovor brz i jasan, bez skrivenih troškova, a isporuka točna i profesionalna. Roba je stigla sigurno i u savršenom stanju, a komunikacija tijekom cijelog procesa bila je izvrsna." },
    { ime: "Mido Talović", lokacija: "prije 4 mjeseca", tekst: "Odlična usluga! Sve je bilo dogovoreno bez problema, prijevoz brz i siguran. Super ekipa, vidi se da rade s voljom i pošteno. Svaka preporuka!" },
    { ime: "Kristijan Jovicic", lokacija: "prije mjesec dana", tekst: "Profesionalna firma i pouzdana usluga. Prijevoz stvari kranom odrađen brzo i sigurno, bez ikakvih zamjerki. Sve preporuke!" },
    { ime: "Antonio Bašić", lokacija: "prije 4 mjeseca", tekst: "Lagan dogovor, jasna i jednostavna komunikacija, sve odrađeno brzo i profesionalno. Svaka preporuka!" },
    { ime: "Nikolas Sedlic Bilanovic", lokacija: "prije mjesec dana", tekst: "Svaka pohvala od same komunikacije, pristupa klijentu pa sve do realizacije! Odrađeno sve u roku i po dogovoru! Svaka preporuka." },
    { ime: "Sara Pracaic", lokacija: "prije 3 mjeseca", tekst: "Brzi, pouzdani i simpatični. Napokon netko tko zna raditi svoj posao i nad kime ne moraš bdijeti za svaki potez. Muž i ja smo oduševljeni profesionalnošću. Ako tražite prijevoz građevinskog materijala, ovo je jedina adresa koja vam treba." },
    { ime: "Cvitko", lokacija: "prije 4 mjeseca", tekst: "Odlična ekipa! Sve su odradili brzo i bez komplikacija. Kamion s kranom je pun pogodak, istovarili su materijal točno gdje je trebalo, bez gubljenja vremena. Ljudi su super, pristupačni i znaju svoj posao." },
    { ime: "Marko Dubravica", lokacija: "prije mjesec dana", tekst: "Izuzetni vozači, posao su odradili na vrhunskoj razini. Sve pohvale 10/10." },
    { ime: "Filip Petanjek", lokacija: "prije 4 mjeseca", tekst: "Svaka preporuka, brzi, efikasni, snalažljivi u prometu i ono najbitnije, tečni hrvatski jezik se priča u firmi. Sve pohvale za Kranex." },
    { ime: "Bernarda Malarić", lokacija: "prije 3 mjeseca", tekst: "Svaka čast! Sve pohvale, iznad očekivanja. Svaka preporuka." },
    { ime: "Anamarija Papp", lokacija: "prije 4 mjeseca", tekst: "Brzi i efikasni prijevoz uredskog kontejnera. Sve preporuke. 10+." },
    { ime: "Dario Sušić", lokacija: "prije 4 mjeseca", tekst: "Vrlo uslužni i pristupačni. Sve je napravljeno kako smo se i dogovorili. Moja iskrena preporuka svima." },
    { ime: "David K", lokacija: "prije 4 mjeseca", tekst: "Lagan dogovor, sve odrađeno brzo i profesionalno. Svaka preporuka!" },
    { ime: "Karlo Krstic", lokacija: "prije mjesec dana", tekst: "Najbolji u gradu, sve preporuke!" },
    { ime: "Dominik Papp", lokacija: "prije 4 mjeseca", tekst: "Dečki su bili vrhunski! Sve su odradili brzo i bez greške, prijevoz i istovar na vrh zgrade prošli su savršeno. Jako sam zadovoljan i svakako ih preporučujem dalje!" },
    { ime: "Filip Berišić", lokacija: "prije mjesec dana", tekst: "Profesionalna usluga i vrlo pristupačne cijene usluga, sve odrađeno po dogovoru!" },
    { ime: "Filip Vlahovic", lokacija: "prije 3 mjeseca", tekst: "Top usluga, sve smo se lako dogovorili i riješili. Preporuke!" },
    { ime: "Petar Lukić", lokacija: "prije mjesec dana", tekst: "Brzi, efikasni, prezadovoljan sa cijenom. Svaka preporuka." },
    { ime: "Luka Skorin", lokacija: "prije mjesec dana", tekst: "Svaka preporuka! Odlično rade posao." },
    { ime: "Antun Berisic", lokacija: "prije mjesec dana", tekst: "Dečki brzi i pouzdani, svaka preporuka." },
    { ime: "Karla Novak", lokacija: "prije 4 mjeseca", tekst: "Dečki su bili super, jako brzo i bez greške odrađen posao. Velika preporuka od mene." },
    { ime: "Jozo Ćurlin", lokacija: "prije 3 mjeseca", tekst: "Svaka preporuka za dečke. Odlično rade svoj posao." },
    { ime: "Domi99", lokacija: "prije mjesec dana", tekst: "Svaka čast dečku, usluga je na nivou." },
    { ime: "Marin Matić", lokacija: "prije 2 mjeseca", tekst: "Svaka čast na profesionalnosti!" },
    { ime: "Anita", lokacija: "prije 3 mjeseca", tekst: "Usluga na nivou! Svaka pohvala!" },
    { ime: "Katarina Rupić", lokacija: "prije 4 mjeseca", tekst: "Vrlo pristupačni, sve preporuke." },
    { ime: "Igor Roki", lokacija: "prije 3 mjeseca", tekst: "Super ekipa, sve preporuke." },
    { ime: "Leopold Ivan Matic", lokacija: "prije 4 mjeseca", tekst: "Sve pohvale, korektni i brzi." },
    { ime: "Jasmina Kelecija", lokacija: "prije 4 mjeseca", tekst: "Ljubaznost, profesionalnost, sve preporuke." },
] as const;

const KORAK = 6;

export default function RecenzijeSection() {
    const [brojPrikazanih, setBrojPrikazanih] = useState(KORAK);
    const prikazaneRecenzije = RECENZIJE.slice(0, brojPrikazanih);
    const imaJosRecenzija = brojPrikazanih < RECENZIJE.length;
    const otvoreneRecenzije = brojPrikazanih > KORAK;

    return (
        <section id="recenzije" className="scroll-mt-20 bg-zinc-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="text-left text-2xl font-bold text-zinc-900 sm:text-3xl md:text-center">
                    Iskustva zadovoljnih korisnika
                </h2>
                <p className="mt-3 max-w-3xl text-left text-zinc-600 md:mx-auto md:text-center">
                    Stvarne recenzije korisnika koji su koristili kamion s kranom za prijevoz i dizanje tereta u Zagrebu. Do sada imamo preko 1000 odvezenih tura.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {prikazaneRecenzije.map((recenzija) => (
                        <article key={recenzija.ime} className="rounded-2xl border border-zinc-200 bg-white p-5">
                            <p className="text-sm font-semibold text-primary">★★★★★</p>
                            <p className="mt-2 text-zinc-700">{recenzija.tekst}</p>
                            <p className="mt-3 text-sm font-semibold text-zinc-900">
                                {recenzija.ime}, {recenzija.lokacija}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    {imaJosRecenzija ? (
                        <button
                            type="button"
                            onClick={() => setBrojPrikazanih((trenutno) => Math.min(trenutno + KORAK, RECENZIJE.length))}
                            className="inline-flex rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-zinc-800 transition-colors hover:border-primary hover:text-primary"
                        >
                            Prikaži više
                        </button>
                    ) : null}
                    {otvoreneRecenzije ? (
                        <button
                            type="button"
                            onClick={() => setBrojPrikazanih(KORAK)}
                            className="inline-flex rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-zinc-800 transition-colors hover:border-primary hover:text-primary"
                        >
                            Zatvori recenzije
                        </button>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
