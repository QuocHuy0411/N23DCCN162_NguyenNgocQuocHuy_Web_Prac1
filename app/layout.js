import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "MyBlog – Bài Thực Hành 1",
  description: "Blog listing page được xây dựng với NextJS & Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-stone-50">
        <Header />
        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-stone-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-stone-400">
            <p>
              © 2025 MyBlog · Thực hành Web – NextJS & Tailwind CSS
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
