import { PREDNOSTI } from "@/lib/constants";

export default function ONamaSection() {
  return (
    <section id="o-nama" className="scroll-mt-20 bg-zinc-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
          Tko smo mi
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-zinc-600">
          Kranex prijevozi je obiteljska firma s višegodišnjim iskustvom u
          sektoru cestovnog prijevoza i građevinskih usluga. Naš glavni cilj
          je pružiti kvalitetnu, sigurnu i brzu uslugu svakom klijentu.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-zinc-600">
          Posjedujemo veliki kamion s kranom koji omogućuje fleksibilnost u
          radu – dizanje tereta, prijevoz rasutog materijala, kipanje i više.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium text-zinc-700">
          Naš stručni tim osigurava profesionalan pristup svakom poslu, bez
          obzira na veličinu projekta i nudi sljedeće prednosti:
        </p>
        <ul className="mx-auto mt-4 flex max-w-2xl flex-wrap justify-center gap-3">
          {PREDNOSTI.map((p) => (
            <li
              key={p}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm ring-1 ring-zinc-200"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
