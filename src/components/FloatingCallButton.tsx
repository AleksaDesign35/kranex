import Link from "next/link";
import { Phone } from "lucide-react";
import { KONTAKT } from "@/lib/constants";

export default function FloatingCallButton() {
  return (
    <Link
      href={KONTAKT.telHref}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:bottom-8 md:right-8 md:h-16 md:w-16"
      aria-label="Nazovi nas"
    >
      <Phone className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2} />
    </Link>
  );
}
