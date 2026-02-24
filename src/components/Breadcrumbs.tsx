"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getBreadcrumbLabel, getBreadcrumbSchema } from "@/lib/breadcrumbs";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  const label = getBreadcrumbLabel(pathname);
  if (!label) return null;
  const schema = getBreadcrumbSchema(pathname);
  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <nav
        aria-label="Put do stranice"
        className="border-b border-zinc-200 bg-zinc-50 px-4 pb-3 pt-20 md:pt-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-[1280px] items-center gap-2 text-base">
          <Link
            href="/"
            className="text-zinc-600 transition hover:text-primary"
          >
            Početna
          </Link>
          <ChevronRight className="h-4 w-4 shrink-0 text-zinc-400" strokeWidth={2} />
          <span className="font-medium text-zinc-900">{label}</span>
        </div>
      </nav>
    </>
  );
}
