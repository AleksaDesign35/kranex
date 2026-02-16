export default function ContactForm() {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6">
      <h3 className="text-lg font-semibold text-zinc-900">
        Pošalji nam poruku
      </h3>
      <p className="mt-1 text-sm text-zinc-600">
        Ispunite obrazac i kontaktirat ćemo vas uskoro s ponudom
        prilagođenom vašim potrebama.
      </p>
      <form
        action="#"
        method="post"
        className="mt-6 grid gap-4 sm:grid-cols-2"
      >
        <div className="sm:col-span-2">
          <label htmlFor="ime" className="block text-sm font-medium text-zinc-700">
            Ime i prezime
          </label>
          <input
            type="text"
            id="ime"
            name="ime"
            required
            className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-zinc-700">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="naslov" className="block text-sm font-medium text-zinc-700">
            Naslov
          </label>
          <input
            type="text"
            id="naslov"
            name="naslov"
            className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="poruka" className="block text-sm font-medium text-zinc-700">
            Poruka
          </label>
          <textarea
            id="poruka"
            name="poruka"
            rows={4}
            required
            className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white shadow transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Pošalji poruku
          </button>
        </div>
      </form>
    </div>
  );
}
