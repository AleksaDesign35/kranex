import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src", "blog");

export type BlogMeta = {
    title: string;
    meta_title?: string;
    slug: string;
    date: string;
    keywords?: string[];
};

export type BlogPost = {
    meta: BlogMeta;
    content: string;
};

function getSlugFromFilename(filename: string): string {
    return filename.replace(/\.md$/, "");
}

export function getAllSlugs(): string[] {
    if (!fs.existsSync(BLOG_DIR)) return [];
    return fs
        .readdirSync(BLOG_DIR)
        .filter((f) => f.endsWith(".md"))
        .map(getSlugFromFilename);
}

export function getPost(slug: string): BlogPost | null {
    const fullPath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const raw = fs.readFileSync(fullPath, "utf-8");
    let data: BlogMeta;
    let body: string;
    if (raw.startsWith("```yaml")) {
        const end = raw.indexOf("```", 7);
        const yamlBlock = raw.slice(8, end);
        const parsed = matter("---\n" + yamlBlock + "\n---");
        data = parsed.data as BlogMeta;
        body = raw.slice(end + 3).trim();
    } else {
        const parsed = matter(raw);
        data = parsed.data as BlogMeta;
        body = parsed.content.trim();
    }
    return { meta: data, content: body };
}

export function getAllPostsMeta(): { slug: string; meta: BlogMeta }[] {
    const slugs = getAllSlugs();
    const posts: { slug: string; meta: BlogMeta }[] = [];
    for (const slug of slugs) {
        const post = getPost(slug);
        if (post) posts.push({ slug, meta: post.meta });
    }
    posts.sort((a, b) => String(b.meta.date || "").localeCompare(String(a.meta.date || "")));
    return posts;
}
