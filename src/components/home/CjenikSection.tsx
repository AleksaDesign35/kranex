const STAVKE_CJENIKA = [
    { usluga: "Utovar / istovar kranom", cijena: "50 € / sat", napomena: "Minimalni obračun: 1 sat" },
    { usluga: "Dodatno vrijeme na gradilištu", cijena: "50 € / sat", napomena: "Naplaćuje se po započetom satu" },
    { usluga: "Dodatni radnik", cijena: "15 € / sat", napomena: "" },
    { usluga: "Čekanje na lokaciji", cijena: "30 € / sat", napomena: "Ako nije unaprijed dogovoreno" },
    { usluga: "Hitne intervencije (isti dan)", cijena: "+20%", napomena: "Na ukupnu cijenu" },
    { usluga: "Rad subotom", cijena: "+10%", napomena: "" },
    { usluga: "Rad nedjeljom i praznikom", cijena: "+30%", napomena: "" },
    { usluga: "Duga relacija (preko 150 km)", cijena: "1,50 € - 3,00 € / km", napomena: "Cestarine se dodatno naplaćuju" },
    { usluga: "Lokalne vožnje po Zagrebu", cijena: "od 150 €", napomena: "" },
    { usluga: "Program teških tereta (5-10 t)", cijena: "Po dogovoru", napomena: "Podizanje i prebacivanje" },
] as const;

export default function CjenikSection() {
    return (
        <section id="cjenik" className="scroll-mt-20 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="text-left text-2xl font-bold text-zinc-900 sm:text-3xl md:text-center">
                    Cjenik usluga
                </h2>
                <p className="mt-3 max-w-3xl text-left text-zinc-600 md:mx-auto md:text-center">
                    Transparentne cijene za prijevoz i rad kamionom s kranom. Za točnu ponudu potrebno je definirati težinu tereta, visinu i udaljenost dizanja te lokaciju utovara i istovara.
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-zinc-200 bg-white">
                            <thead className="bg-zinc-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900">Usluga</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900">Cijena</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900">Napomena</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100">
                                {STAVKE_CJENIKA.map((stavka) => (
                                    <tr key={stavka.usluga}>
                                        <td className="px-4 py-3 text-sm text-zinc-700">{stavka.usluga}</td>
                                        <td className="px-4 py-3 text-sm font-semibold text-zinc-900">{stavka.cijena}</td>
                                        <td className="px-4 py-3 text-sm text-zinc-600">{stavka.napomena || "-"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
