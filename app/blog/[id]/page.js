import Link from "next/link";
import Badge from "@/components/Badge";

// Fetch chi tiết 1 bài viết theo id
async function getPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Không tìm thấy bài viết");
  }

  return res.json();
}

// Fetch comments của bài viết
async function getComments(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    { cache: "no-store" }
  );
  return res.json();
}

const CATEGORY_LABELS = [
  "Technology", "Lifestyle", "Travel", "Design", "Science",
  "Business", "Health", "Culture", "Education", "Food",
];
const COLORS = ["amber", "indigo", "rose", "teal", "stone"];

export default async function BlogDetailPage({ params }) {
  const { id } = params;
  const [post, comments] = await Promise.all([getPost(id), getComments(id)]);

  const category = CATEGORY_LABELS[post.id % CATEGORY_LABELS.length];
  const colorKey = COLORS[post.id % COLORS.length];
  const readTime = Math.max(2, Math.floor(post.body.length / 200));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-amber-600 transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
        Back to Blog
      </Link>

      {/* Article Header */}
      <article>
        <div className="flex items-center gap-3 mb-4">
          <Badge label={category} color={colorKey} />
          <span className="text-xs text-stone-400">{readTime} min read</span>
        </div>

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h1>

        {/* Author & Meta */}
        <div className="flex items-center gap-3 pb-6 border-b border-stone-200 mb-8">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700">
            {String.fromCharCode(65 + (post.userId % 26))}
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-800">
              Author #{post.userId}
            </p>
            <p className="text-xs text-stone-400">Tác giả · ID #{post.id}</p>
          </div>
        </div>

        {/* Hero block */}
        <div
          className="h-56 sm:h-72 rounded-2xl mb-8 flex items-center justify-center text-7xl"
          style={{
            background: `linear-gradient(135deg, ${getGradientColors(colorKey)})`,
          }}
        >
          {getEmoji(post.id)}
        </div>

        {/* Body */}
        <div className="prose max-w-none">
          <p className="text-stone-600 leading-relaxed text-base sm:text-lg mb-4">
            {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
          </p>
          {/* Nội dung bổ sung để trang chi tiết có chiều sâu hơn */}
          <p className="text-stone-500 leading-relaxed text-base sm:text-lg mb-4">
            Đây là một bài viết được tổng hợp từ nhiều nguồn khác nhau, nhằm
            cung cấp góc nhìn đa chiều và toàn diện về chủ đề{" "}
            <strong className="text-stone-700">{category}</strong>. Chúng tôi hy
            vọng bài viết sẽ mang lại giá trị thực sự cho bạn đọc.
          </p>
          <p className="text-stone-500 leading-relaxed text-base sm:text-lg">
            Nếu bạn thấy bài viết hữu ích, đừng quên chia sẻ và đăng ký nhận
            bản tin hàng tuần của chúng tôi để không bỏ lỡ những nội dung mới
            nhất.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-stone-200">
          {["NextJS", "Tailwind", "Web Dev", category].map((tag) => (
            <span
              key={tag}
              className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full border border-stone-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Comments Section */}
      <section className="mt-12">
        <h2
          className="text-2xl font-bold text-stone-900 mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Comments ({comments.length})
        </h2>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white border border-stone-200 rounded-xl p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
                  {comment.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-stone-800">
                    {comment.name}
                  </p>
                  <p className="text-xs text-stone-400 mb-2">{comment.email}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {comment.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-sm"
        >
          ← Quay lại trang danh sách
        </Link>
      </div>
    </div>
  );
}

function getGradientColors(colorKey) {
  const map = {
    amber: "#fef3c7, #fde68a",
    indigo: "#e0e7ff, #c7d2fe",
    rose: "#ffe4e6, #fecdd3",
    teal: "#ccfbf1, #99f6e4",
    stone: "#f5f5f4, #e7e5e4",
  };
  return map[colorKey] || map.stone;
}

function getEmoji(id) {
  const emojis = ["✍️", "📖", "💡", "🌍", "🎨", "🔬", "💼", "🏃", "🎓", "🍜"];
  return emojis[id % emojis.length];
}
