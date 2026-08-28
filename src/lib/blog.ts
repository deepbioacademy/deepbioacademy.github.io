import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  author: string;
  role?: string;
  university?: string;
  date: string;
  cover?: string;
  excerpt: string;
  tags: string[];
  comingSoon: boolean;
};

export type Post = PostMeta & { html: string };

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function parse(slug: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;

  // Fallback excerpt: first ~160 chars of plain text from the body.
  const plain = content.replace(/[#>*_`\-]/g, " ").replace(/\s+/g, " ").trim();
  const excerpt = (data.excerpt as string) || `${plain.slice(0, 157)}...`;

  return {
    slug,
    title: data.title ?? slug,
    author: data.author ?? "Mentee",
    role: data.role,
    university: data.university,
    date: data.date ? String(data.date) : "",
    cover: data.cover,
    excerpt,
    tags: Array.isArray(data.tags) ? data.tags : [],
    comingSoon: data.comingSoon === true,
    html,
  };
}

export function getAllPosts(): Post[] {
  return readSlugs()
    .map(parse)
    .sort((a, b) => {
      // Published stories first, coming-soon last; then newest first.
      if (a.comingSoon !== b.comingSoon) return a.comingSoon ? 1 : -1;
      return a.date < b.date ? 1 : -1;
    });
}

export function getPublishedPosts(): Post[] {
  return getAllPosts().filter((p) => !p.comingSoon);
}

export function getPost(slug: string): Post | null {
  if (!readSlugs().includes(slug)) return null;
  const post = parse(slug);
  if (post.comingSoon) return null;
  return post;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatDate(date: string): string {
  if (!date) return "";
  // Parse the date parts directly to avoid timezone-dependent rendering:
  // `new Date("2026-06-21")` is UTC midnight, and `toLocaleDateString` would
  // then shift the day in timezones west of UTC — causing SSR/client
  // hydration mismatches in production.
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(date);
  if (!m) return date;
  const [, year, month, day] = m;
  const name = MONTHS[Number(month) - 1];
  if (!name) return date;
  return `${name} ${Number(day)}, ${year}`;
}
