import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-zinc-900">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-truck.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/60" />
      </div>
      <div className="relative flex min-h-screen flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Vaš pouzdan partner za prijevoz i dizanje tereta
          </h1>
          <Link
            href="/#kontakt"
            className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/10"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </div>
    </section>
  );
}
