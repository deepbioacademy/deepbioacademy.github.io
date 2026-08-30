import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogProgramsCTA from "@/components/sections/BlogProgramsCTA";
import { getPublishedPosts, getPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Story Not Found" };
  return {
    title: `${post.title} | Mentee Stories`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <main className="min-h-screen bg-[var(--bg)] py-12">
        <article className="max-w-3xl mx-auto px-6 lg:px-8 font-dm-sans">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline mb-8"
          >
            ← All stories
          </Link>

          {post.tags.length > 0 && (
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 mb-10 pb-10 border-b border-[var(--border)]">
            {post.cover ? (
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
                <Image
                  src={post.cover}
                  alt={post.author}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="w-11 h-11 rounded-full bg-indigo-600/10 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0">
                {post.author
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
            )}
            <div>
              <div className="text-sm font-bold text-[var(--text-primary)]">
                {post.author}
                {post.role ? ` · ${post.role}` : ""}
              </div>
              <div className="text-xs text-[var(--text-label)]">
                {[post.university, formatDate(post.date)].filter(Boolean).join(" · ")}
              </div>
            </div>
          </div>

          {post.cover && (
            <div className="relative w-full max-w-sm mx-auto aspect-[4/5] mb-12 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-alt)] shadow-lg">
              <Image
                src={post.cover}
                alt={post.author || post.title}
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          )}

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </main>
      <BlogProgramsCTA currentAuthor={post.author} />
    </>
  );
}
