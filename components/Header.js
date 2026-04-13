export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">B</span>
          </div>
          <h1
            className="text-2xl font-black tracking-tight text-stone-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My<span className="text-amber-500">Blog</span>
          </h1>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium text-stone-600 hover:text-amber-500 transition-colors">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-stone-600 hover:text-amber-500 transition-colors">
            Articles
          </a>
          <a href="#" className="text-sm font-medium text-stone-600 hover:text-amber-500 transition-colors">
            About
          </a>
        </nav>

        {/* CTA */}
        <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200 shadow-sm">
          Subscribe
        </button>
      </div>
    </header>
  );
}
