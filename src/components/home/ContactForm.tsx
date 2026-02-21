export default function ContactForm() {
  return (
    <form action="#" method="post" className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="ime" className="mb-2 block text-sm font-medium text-zinc-900">
            Ime i prezime
          </label>
          <input
            type="text"
            id="ime"
            name="ime"
            required
            placeholder="Unesite vaše ime"
            className="w-full rounded-lg border-2 border-zinc-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="vasa@email.com"
            className="w-full rounded-lg border-2 border-zinc-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="mb-2 block text-sm font-medium text-zinc-900">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            placeholder="+385 (91) 234 5678"
            className="w-full rounded-lg border-2 border-zinc-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="naslov" className="mb-2 block text-sm font-medium text-zinc-900">
            Naslov
          </label>
          <input
            type="text"
            id="naslov"
            name="naslov"
            required
            placeholder="Naslov poruke"
            className="w-full rounded-lg border-2 border-zinc-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="poruka" className="mb-2 block text-sm font-medium text-zinc-900">
          Poruka
        </label>
        <textarea
          id="poruka"
          name="poruka"
          required
          rows={5}
          placeholder="Unesite vašu poruku..."
          className="w-full resize-none rounded-lg border-2 border-zinc-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-95 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Pošalji poruku
      </button>
    </form>
  );
}
