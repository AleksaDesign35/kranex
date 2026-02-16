"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const nav = [
  { href: "/", label: "Početna" },
  { href: "/#usluge", label: "Usluge" },
  { href: "/#o-nama", label: "O nama" },
  { href: "/#kontakt", label: "Kontakt" },
  { href: "/pravila-privatnosti", label: "Pravila privatnosti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
          scrolled ? "bg-zinc-800" : "bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_white.svg"
              alt="Kranex prijevozi"
              width={140}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="ml-8 hidden items-center gap-8 md:flex">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-white/90 transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center p-2 text-white md:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Meni"
          >
            <Menu className="h-7 w-7" strokeWidth={2} />
          </button>
        </div>
      </header>

      <div
        className="fixed inset-0 z-[60] md:hidden"
        aria-hidden={!open}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div
          className="absolute inset-0 bg-black/40 transition-opacity duration-300"
          style={{ opacity: open ? 1 : 0 }}
          onClick={() => setOpen(false)}
        />
        <aside
          className="absolute right-0 top-0 flex h-full w-[min(85%,320px)] flex-col bg-white shadow-xl transition-transform duration-300 ease-out"
          style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
        >
          <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-5">
            <h2 className="text-xl font-bold text-zinc-900">Menu</h2>
            <button
              type="button"
              className="rounded p-2 text-zinc-700 hover:bg-zinc-100"
              onClick={() => setOpen(false)}
              aria-label="Zatvori meni"
            >
              <X className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-4">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="border-b border-zinc-100 py-4 text-base font-medium text-zinc-900 first:pt-0 last:border-b-0 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
