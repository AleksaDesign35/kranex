"use client";

import { useState } from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { ChevronDown, ChevronUp } from "lucide-react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { GALLERY_IMAGES } from "@/lib/gallery-images";

const INITIAL_COUNT = 8;

export default function GallerySection() {
    const [expanded, setExpanded] = useState(false);
    const hasMore = GALLERY_IMAGES.length > INITIAL_COUNT;

    return (
        <section id="galerija" className="scroll-mt-20 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="text-left text-2xl font-bold text-zinc-900 sm:text-3xl md:text-center">
                    Galerija – Kamion s kranom i prijevoz tereta Zagreb
                </h2>
                <p className="mt-4 max-w-2xl text-left text-base text-zinc-600 md:mx-auto md:text-center">
                    Naši kamioni s kranom u akciji – prijevoz građevinskog materijala, dizanje tereta i dostava na gradilište.
                </p>
                <div
                    className="mt-6 [&_.gallery-item-more]:hidden data-[expanded=true]:[&_.gallery-item-more]:block sm:mt-8 md:mt-12"
                    data-expanded={expanded}
                >
                    <LightGallery
                        plugins={[lgZoom, lgThumbnail]}
                        speed={300}
                        showCloseIcon
                        elementClassNames="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                        mobileSettings={{
                            showCloseIcon: true,
                            controls: true,
                        }}
                    >
                        {GALLERY_IMAGES.map(({ src, alt }, i) => (
                            <a
                                key={src}
                                href={src}
                                data-sub-html={alt}
                                className={i >= INITIAL_COUNT ? "gallery-item-more" : ""}
                            >
                                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 cursor-pointer">
                                    <Image
                                        src={src}
                                        alt={alt}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </a>
                        ))}
                    </LightGallery>
                    {hasMore && (
                        <button
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            className="mt-6 mx-auto flex w-fit items-center justify-center gap-2 rounded-xl border-2 border-primary bg-white px-5 py-3 font-semibold text-primary transition hover:bg-primary/5"
                        >
                            {expanded ? (
                                <>
                                    Prikaži manje
                                    <ChevronUp className="h-5 w-5" strokeWidth={2} />
                                </>
                            ) : (
                                <>
                                    Vidi sve slike
                                    <ChevronDown className="h-5 w-5" strokeWidth={2} />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
