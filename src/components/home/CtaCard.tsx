import Link from "next/link";

export default function CtaCard() {
  return (
    <article className="flex flex-col rounded-xl bg-primary p-6 shadow-sm">
      <h3 className="text-xl font-bold text-white">
        Trebate prilagođeno rješenje?
      </h3>
      <p className="mt-2 flex-1 text-base text-white/95">
        Kontaktirajte nas kako bismo razgovarali o vašim specifičnim
        zahtjevima i dobili prilagođeni iznos ponude.
      </p>
      <Link
        href="/#kontakt"
        className="mt-6 inline-flex w-fit items-center justify-center rounded-lg bg-white px-5 py-2.5 text-base font-semibold text-primary transition hover:bg-white/95"
      >
        Kontaktirajte nas
      </Link>
    </article>
  );
}
