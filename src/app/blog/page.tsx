import Link from "next/link";
import Image from "next/image";
import { getPublishedPosts, formatDate } from "@/lib/blog";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog & Mentee Stories — DeepBio Academy",
  description: "Read inspiring stories, bioinformatics research journeys, and tutorials from DeepBio Academy fellows.",
};

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Insights & Stories
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Academy Blog & Case Studies
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Discover the real stories, publications, and scientific breakthroughs achieved by our mentees and fellows.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {post.cover && (
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.author || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {post.tags && post.tags.length > 0 && (
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                    <span>{formatDate(post.date)}</span>
                    {post.role && (
                      <>
                        <span>•</span>
                        <span>{post.role}</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <div className="flex items-center gap-2">
                    {post.cover && (
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
                        <Image
                          src={post.cover}
                          alt={post.author}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                    <span className="text-slate-700 font-semibold">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
