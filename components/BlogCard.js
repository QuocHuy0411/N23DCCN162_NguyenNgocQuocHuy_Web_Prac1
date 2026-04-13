"use client";

const GRADIENTS = {
  amber: ["#fef3c7", "#fde68a"],
  indigo: ["#e0e7ff", "#c7d2fe"],
  rose:   ["#ffe4e6", "#fecdd3"],
  teal:   ["#ccfbf1", "#99f6e4"],
  stone:  ["#f5f5f4", "#e7e5e4"],
};

const BADGE_COLORS = {
  amber: { bg: "#fef3c7", color: "#92400e", border: "#fcd34d" },
  indigo: { bg: "#e0e7ff", color: "#3730a3", border: "#a5b4fc" },
  rose:   { bg: "#ffe4e6", color: "#9f1239", border: "#fda4af" },
  teal:   { bg: "#ccfbf1", color: "#134e4a", border: "#5eead4" },
  stone:  { bg: "#f5f5f4", color: "#44403c", border: "#d6d3d1" },
};

const COLOR_KEYS = ["amber", "indigo", "rose", "teal", "stone"];
const CATEGORIES = ["Technology", "Lifestyle", "Travel", "Design", "Science", "Business", "Health", "Culture", "Education", "Food"];
const EMOJIS = ["✍️", "📖", "💡", "🌍", "🎨", "🔬", "💼", "🏃", "🎓", "🍜"];

export default function BlogCard({ post }) {
  const colorKey = COLOR_KEYS[post.id % COLOR_KEYS.length];
  const category = CATEGORIES[post.id % CATEGORIES.length];
  const emoji = EMOJIS[post.id % EMOJIS.length];
  const readTime = Math.max(2, Math.floor(post.body.length / 200));
  const [g1, g2] = GRADIENTS[colorKey];
  const badge = BADGE_COLORS[colorKey];
  const authorLetter = String.fromCharCode(65 + (post.userId % 26));

  return (
    <div style={{
      background: "#ffffff",
      borderRadius: "1rem",
      border: "1px solid #e7e5e4",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      transition: "box-shadow 0.3s, transform 0.3s",
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {/* Card Header Image */}
      <div style={{
        height: "10rem",
        background: `linear-gradient(135deg, ${g1}, ${g2})`,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Emoji center */}
        <span style={{ fontSize: "3rem", opacity: 0.4, userSelect: "none" }}>{emoji}</span>

        {/* Badge — top left */}
        <span style={{
          position: "absolute",
          top: "0.75rem",
          left: "0.75rem",
          background: badge.bg,
          color: badge.color,
          border: `1px solid ${badge.border}`,
          fontSize: "0.65rem",
          fontWeight: 700,
          padding: "0.2rem 0.6rem",
          borderRadius: "9999px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
        }}>
          {category}
        </span>

        {/* Read time — top right */}
        <span style={{
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
          background: "rgba(255,255,255,0.85)",
          color: "#78716c",
          fontSize: "0.65rem",
          fontWeight: 600,
          padding: "0.2rem 0.6rem",
          borderRadius: "9999px",
          whiteSpace: "nowrap",
        }}>
          {readTime} min read
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "#1c1917",
          lineHeight: 1.4,
          marginBottom: "0.5rem",
          marginTop: 0,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h2>

        <p style={{
          color: "#78716c",
          fontSize: "0.875rem",
          lineHeight: 1.6,
          marginBottom: "1rem",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          flex: 1,
          marginTop: 0,
        }}>
          {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
        </p>

        {/* Footer */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "1rem",
          borderTop: "1px solid #f5f5f4",
          marginTop: "auto",
        }}>
          {/* Author */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{
              width: "1.75rem",
              height: "1.75rem",
              borderRadius: "50%",
              background: "#e7e5e4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#57534e",
              flexShrink: 0,
            }}>
              {authorLetter}
            </div>
            <span style={{ fontSize: "0.75rem", color: "#a8a29e", fontWeight: 500 }}>
              Author #{post.userId}
            </span>
          </div>

          {/* Read more */}
          <a href={`/blog/${post.id}`} style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#d97706",
            border: "1.5px solid #fcd34d",
            padding: "0.3rem 0.9rem",
            borderRadius: "9999px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "all 0.2s",
          }}>
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}
