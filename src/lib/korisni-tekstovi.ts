import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "korisni-tekstovi");

export type KorisniTekstMeta = {
    title: string;
    meta_title?: string;
    slug: string;
    date: string;
    excerpt?: string;
    image?: string;
    image_alt?: string;
    keywords?: string[];
    published?: boolean;
};

export type KorisniTekst = {
    meta: KorisniTekstMeta;
    content: string;
};

function getSlugFromFilename(filename: string): string {
    return filename.replace(/\.md$/, "");
}

export function getAllSlugs(): string[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
    const slugs: string[] = [];
    for (const f of files) {
        const slug = getSlugFromFilename(f);
        const fullPath = path.join(CONTENT_DIR, f);
        const raw = fs.readFileSync(fullPath, "utf-8");
        const parsed = matter(raw);
        if ((parsed.data as KorisniTekstMeta).published !== false) slugs.push(slug);
    }
    return slugs;
}

export function getTekst(slug: string): KorisniTekst | null {
    const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const raw = fs.readFileSync(fullPath, "utf-8");
    let data: KorisniTekstMeta;
    let body: string;
    if (raw.startsWith("```yaml")) {
        const end = raw.indexOf("```", 7);
        const yamlBlock = raw.slice(8, end);
        const parsed = matter("---\n" + yamlBlock + "\n---");
        data = parsed.data as KorisniTekstMeta;
        body = raw.slice(end + 3).trim();
    } else {
        const parsed = matter(raw);
        data = parsed.data as KorisniTekstMeta;
        body = parsed.content.trim();
    }
    if (data.published === false) return null;
    return { meta: data, content: body };
}

export function getAllTekstoviMeta(): { slug: string; meta: KorisniTekstMeta }[] {
    const slugs = getAllSlugs();
    const list: { slug: string; meta: KorisniTekstMeta }[] = [];
    for (const slug of slugs) {
        const post = getTekst(slug);
        if (post) list.push({ slug, meta: post.meta });
    }
    list.sort((a, b) => String(b.meta.date || "").localeCompare(String(a.meta.date || "")));
    return list;
}
