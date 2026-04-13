import BlogCard from "@/components/BlogCard";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Không thể tải dữ liệu bài viết");
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "2.5rem 1.5rem" }}>

      {/* Hero Section */}
      <section style={{ textAlign: "center", paddingTop: "3rem", paddingBottom: "2.5rem", marginBottom: "2.5rem" }}>
        <p style={{ color: "#f59e0b", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          Welcome to MyBlog
        </p>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#1c1917", lineHeight: 1.2, marginBottom: "1rem" }}>
          Khám phá những{" "}
          <span style={{ color: "#f59e0b", fontStyle: "italic" }}>câu chuyện</span>
          <br />
          truyền cảm hứng
        </h1>

        <p style={{ color: "#78716c", fontSize: "1rem", maxWidth: "36rem", margin: "0 auto 2rem auto", lineHeight: 1.7 }}>
          Tổng hợp các bài viết hay về công nghệ, đời sống, du lịch và nhiều chủ đề thú vị khác.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: "4rem", marginTop: "1.5rem" }}>
          {[{ value: "100+", label: "Bài viết" }, { value: "10", label: "Chủ đề" }, { value: "5K+", label: "Độc giả" }].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "#1c1917", margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: "0.75rem", color: "#a8a29e", fontWeight: 500, marginTop: "0.25rem", margin: "0.25rem 0 0 0" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section title */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", whiteSpace: "nowrap", margin: 0 }}>
          Bài viết mới nhất
        </h2>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#e7e5e4" }} />
        <span style={{ fontSize: "0.875rem", color: "#a8a29e", fontWeight: 500, whiteSpace: "nowrap" }}>12 bài viết</span>
      </div>

      {/* Blog Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "1.5rem" }}>
        {posts.slice(0, 12).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load more */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <button style={{ border: "2px solid #d6d3d1", background: "transparent", color: "#78716c", fontWeight: 600, padding: "0.75rem 2rem", borderRadius: "9999px", cursor: "pointer", fontSize: "0.875rem" }}>
          Xem thêm bài viết
        </button>
      </div>
    </div>
  );
}
