import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-semibold text-zinc-900">Kranex prijevozi</p>
          <p className="text-center text-sm text-zinc-600">
            Profesionalne usluge dizalica i transporta
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-zinc-200 pt-6">
          <Link
            href="/impressum"
            className="text-sm text-zinc-600 hover:text-primary"
          >
            Impressum
          </Link>
        </div>
        <p className="mt-4 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Kranex prijevozi. Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
}
