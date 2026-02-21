import Link from "next/link";

export default function CtaCard() {
  return (
    <article className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-primary to-[#c9451a] p-8 text-white">
      <h3 className="mb-3 text-2xl font-bold">
        Trebate prilagođeno rješenje?
      </h3>
      <p className="mb-6 opacity-90">
        Kontaktirajte nas kako bismo razgovarali o vašim specifičnim
        zahtjevima i dobili prilagođeni iznos ponude.
      </p>
      <Link
        href="/#kontakt"
        className="inline-block rounded-lg bg-white px-6 py-3 text-center font-medium text-primary transition-colors hover:bg-primary/10 active:bg-primary/10"
      >
        Kontaktirajte nas
      </Link>
    </article>
  );
}
