import Link from "next/link";
import { CircleCheckBig } from "lucide-react";

const BULLETS = [
    "Dolazak isti dan",
    "Nosivost do 12 tona",
    "Doseg krana 20 m",
    "Radimo Zagreb i okolicu",
] as const;

export default function CtaCard() {
  return (
    <article className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-primary to-[#c9451a] p-5 text-white">
      <h3 className="mb-3 text-2xl font-bold">
        Trebate prilagođeno rješenje?
      </h3>
      <p className="mb-4 text-base opacity-90">
        Kontaktirajte nas kako bismo razgovarali o vašim specifičnim
        zahtjevima i dobili prilagođeni iznos ponude.
      </p>
      <Link
        href="/#kontakt"
        className="inline-block rounded-lg bg-white px-6 py-3 text-center font-medium text-primary transition-colors hover:bg-primary/10 active:bg-primary/10"
      >
        Kontaktirajte nas
      </Link>
      <ul className="mt-4 space-y-2 border-t border-white/20 pt-4">
        {BULLETS.map((text) => (
          <li key={text} className="flex items-center gap-2 text-base">
            <CircleCheckBig className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
