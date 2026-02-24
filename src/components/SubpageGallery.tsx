"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { SUBPAGE_IMAGES, type SubpageGallerySlug } from "@/lib/gallery-images";

export default function SubpageGallery({ slug }: { slug: SubpageGallerySlug }) {
    const images = SUBPAGE_IMAGES[slug];
    if (!images) return null;
    return (
        <section className="mt-10 space-y-4" aria-labelledby="galerija-heading">
            <h2 id="galerija-heading" className="text-2xl font-bold text-zinc-900">
                Galerija
            </h2>
            <div className="mt-4">
                <LightGallery
                    plugins={[lgZoom, lgThumbnail]}
                    speed={300}
                    showCloseIcon
                    mobileSettings={{
                        showCloseIcon: true,
                        controls: true,
                    }}
                    elementClassNames="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {images.map(({ src, alt }) => (
                        <a key={src} href={src} data-sub-html={alt}>
                            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 cursor-pointer">
                                <Image
                                    src={src}
                                    alt={alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover object-center"
                                />
                            </div>
                        </a>
                    ))}
                </LightGallery>
            </div>
        </section>
    );
}
