import Link from "next/link";
import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111828] py-12 text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center gap-3 md:mb-0">
            <Truck
              className="h-8 w-8 shrink-0 text-primary"
              strokeWidth={2}
              aria-hidden
            />
            <div>
              <h3 className="text-xl font-bold">Kranex prijevozi</h3>
              <p className="text-sm text-zinc-400">
                Profesionalne usluge dizalica i transporta
              </p>
              <Link
                href="/impressum"
                className="text-sm text-zinc-400 hover:underline"
              >
                Impressum
              </Link>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Kranex prijevozi. Sva prava pridržana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
