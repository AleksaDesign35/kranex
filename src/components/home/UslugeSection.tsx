import { SERVICE_PAGES } from "@/lib/service-pages";
import ServiceLinkCard from "./ServiceLinkCard";
import CtaCard from "./CtaCard";

export default function UslugeSection() {
    return (
        <section id="usluge" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
                    Naše usluge prijevoza i kamiona s kranom u Zagrebu
                </h2>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICE_PAGES.map(({ slug, title, description, Icon }) => (
                        <ServiceLinkCard
                            key={slug}
                            href={`/${slug}`}
                            title={title}
                            text={description}
                            Icon={Icon}
                        />
                    ))}
                    <CtaCard />
                </div>
                <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-zinc-600">
                    Usluge prijevoza i dizanja tereta pružamo na području cijelog Zagreba
                    uključujući Novi Zagreb, Dubravu, Sesvete, Trešnjevku, Črnomerec,
                    Maksimir te okolna mjesta Zaprešić, Velika Gorica i Samobor.
                </p>
            </div>
        </section>
    );
}
