import Link from "next/link";
import { Phone } from "lucide-react";

export default function MobileCta() {
    return (
        <div className="flex justify-center py-6 md:hidden">
            <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:opacity-95"
            >
                <Phone className="h-5 w-5" strokeWidth={2} aria-hidden />
                Kontaktirajte nas
            </Link>
        </div>
    );
}
