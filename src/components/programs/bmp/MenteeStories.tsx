import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/lib/blog";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function MenteeStories() {
  const posts = getAllPosts();
  if (posts.length === 0) return null;

  return (
    <section id="mentee-stories" className="ms-section">
      <div className="ms-header">
        <p className="res-eyebrow">In Their Own Words</p>
        <h2 className="ms-heading">Mentee Stories</h2>
        <p className="ms-subtext">
          Experience blog posts written by mentees — their research journeys, the
          obstacles they cleared, and what the mentorship made possible.
        </p>
      </div>

      <div className="ms-grid">
        {posts.map((post) => {
          const cover = (
            <div className="ms-card-cover">
              {post.cover ? (
                <Image
                  src={`${BASE}${post.cover}`}
                  alt={post.author}
                  fill
                  style={{ objectFit: "cover" }}
                  className="ms-card-img"
                />
              ) : (
                <div className="ms-card-cover-fallback">
                  <span>{getInitials(post.author)}</span>
                </div>
              )}
              {post.comingSoon ? (
                <div className="ms-card-soon-badge">Coming Soon</div>
              ) : (
                post.tags.length > 0 && (
                  <div className="ms-card-tags">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="ms-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )
              )}
            </div>
          );

          if (post.comingSoon) {
            return (
              <div key={post.slug} className="ms-card ms-card-soon">
                {cover}
                <div className="ms-card-body">
                  <h3 className="ms-card-title">{post.author}</h3>
                  {post.university && (
                    <div className="ms-card-uni ms-card-uni-soon">
                      {post.university}
                    </div>
                  )}
                  <p className="ms-card-soon-note">
                    Their story is coming soon.
                  </p>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="ms-card group"
            >
              {cover}
              <div className="ms-card-body">
                <h3 className="ms-card-title">{post.title}</h3>
                <p className="ms-card-excerpt">{post.excerpt}</p>
                <div className="ms-card-footer">
                  <div>
                    <div className="ms-card-author">{post.author}</div>
                    {post.university && (
                      <div className="ms-card-uni">{post.university}</div>
                    )}
                  </div>
                  {post.date && (
                    <span className="ms-card-date">{formatDate(post.date)}</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
