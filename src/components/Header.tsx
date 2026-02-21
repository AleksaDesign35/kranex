"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const nav = [
    { href: "/#usluge", label: "Usluge" },
    { href: "/#o-nama", label: "O nama" },
    { href: "/#galerija", label: "Galerija" },
];

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const darkMode = !isHome || scrolled;
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
                className={`fixed top-0 z-40 flex w-full justify-between px-4 py-3 transition-all duration-300 sm:px-6 lg:px-8 xl:items-center xl:justify-around ${darkMode ? "bg-white shadow-sm" : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
                    <Link href="/" aria-label="Početna" className="flex items-center">
                        <Image
                            src={darkMode ? "/images/logo.svg" : "/images/logo_white.svg"}
                            alt="Kranex prijevozi"
                            width={140}
                            height={48}
                            className="h-10 w-auto xl:h-12"
                            priority
                        />
                    </Link>
                    <nav className="max-xl:hidden flex items-center gap-6">
                        <ul className="flex items-center justify-center gap-6 font-bold">
                            {!isHome && (
                                <li>
                                    <Link
                                        href="/"
                                        className={`transition ${darkMode
                                                ? "text-zinc-700 hover:text-primary"
                                                : "text-white/90 hover:text-white"
                                            }`}
                                    >
                                        Početna
                                    </Link>
                                </li>
                            )}
                            {nav.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`transition ${darkMode
                                                ? "text-zinc-700 hover:text-primary"
                                                : "text-white/90 hover:text-white"
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/#kontakt"
                            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
                        >
                            Kontakt
                        </Link>
                    </nav>
                    <button
                        type="button"
                        className="flex h-11 w-11 items-center justify-center xl:hidden"
                        onClick={() => setOpen(true)}
                        aria-expanded={open}
                        aria-label="Meni"
                    >
                        <Menu
                            className={`h-7 w-7 ${darkMode ? "text-primary" : "text-white"}`}
                            strokeWidth={2}
                            aria-hidden
                        />
                    </button>
                </div>
            </header>

            <div
                className="fixed inset-0 z-[60] xl:hidden"
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
                        {!isHome && (
                            <Link
                                href="/"
                                className="border-b border-zinc-100 py-4 text-base font-medium text-zinc-900 hover:text-primary"
                                onClick={() => setOpen(false)}
                            >
                                Početna
                            </Link>
                        )}
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
                        <Link
                            href="/#kontakt"
                            className="mt-4 inline-flex w-fit justify-center rounded-lg bg-primary px-5 py-2.5 text-base font-semibold text-white hover:opacity-95"
                            onClick={() => setOpen(false)}
                        >
                            Kontakt
                        </Link>
                    </nav>
                </aside>
            </div>
        </>
    );
}
