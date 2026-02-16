import { USLUGE } from "@/lib/constants";
import ServiceCard from "./ServiceCard";
import CtaCard from "./CtaCard";

export default function UslugeSection() {
  return (
    <section id="usluge" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
          Naše usluge
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
          Nudimo širok raspon transportnih i građevinskih usluga uz potpunu
          podršku od utovara do istovara.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {USLUGE.map(({ title, text, Icon }) => (
            <ServiceCard key={title} title={title} text={text} Icon={Icon} />
          ))}
          <CtaCard />
        </div>
      </div>
    </section>
  );
}
