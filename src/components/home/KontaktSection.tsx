import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { KONTAKT } from "@/lib/constants";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

export default function KontaktSection() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
          Kontaktirajte nas
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-600">
          Spremni ste za početak vašeg projekta? Kontaktirajte nas za
          besplatnu ponudu.
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactCard
              href={KONTAKT.telHref}
              label="Telefon"
              subtitle="Nazovite nas direktno"
              value={KONTAKT.telefon}
              Icon={Phone}
            />
            <ContactCard
              href={KONTAKT.whatsappHref}
              label="WhatsApp"
              subtitle="Pošalite nam poruku na WhatsApp"
              value={KONTAKT.telefon}
              Icon={MessageCircle}
              external
            />
            <ContactCard
              href={`mailto:${KONTAKT.email}`}
              label="Email"
              subtitle="Pošaljite nam upit"
              value={KONTAKT.email}
              Icon={Mail}
            />
            <ContactCard
              href={KONTAKT.mapsHref}
              label="Lokacija poslovnice"
              subtitle="Pokrivamo cijelu Hrvatsku"
              value={KONTAKT.adresa}
              Icon={MapPin}
              external
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
