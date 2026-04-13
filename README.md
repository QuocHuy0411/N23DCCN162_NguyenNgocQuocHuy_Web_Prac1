# Thực Hành 1 – Blog Listing Page với NextJS & Tailwind CSS

## Thông tin sinh viên
- **Họ và tên:** Nguyễn Ngọc Quốc Huy  
- **MSSV:** N23DCCN162  
- **Môn học:** Thực hành lập trình Web  

---

## Mô tả dự án

Blog Listing Page được xây dựng bằng **NextJS 14 (App Router)** và **Tailwind CSS**, lấy dữ liệu thực tế từ [JSONPlaceholder API](https://jsonplaceholder.typicode.com).

### Tính năng chính
- ✅ Trang danh sách bài viết (12 bài, lưới Responsive 1-2-3 cột)
- ✅ Trang chi tiết bài viết với dynamic route `/blog/[id]`
- ✅ Hiển thị Comments của từng bài viết
- ✅ Component tái sử dụng: `Header`, `Badge`, `BlogCard`
- ✅ Giao diện Responsive (Mobile / Tablet / Desktop)
- ✅ Fetch dữ liệu bằng Server Component (Next.js App Router)

---

## Cấu trúc thư mục

```
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js                  # Trang danh sách bài viết
│   └── blog/
│       └── [id]/
│           └── page.js          # Trang chi tiết bài viết
├── components/
│   ├── Header.js
│   ├── Badge.js
│   └── BlogCard.js
└── README.md
```

---

## Cách chạy dự án

```bash
# Cài dependencies
npm install

# Chạy development server
npm run dev
```

Mở trình duyệt tại [http://localhost:3000](http://localhost:3000)

---

## API sử dụng

| Endpoint | Mục đích |
|---|---|
| `GET /posts` | Lấy danh sách bài viết |
| `GET /posts/:id` | Lấy chi tiết 1 bài viết |
| `GET /posts/:id/comments` | Lấy comments của bài viết |

---

## Công nghệ sử dụng

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **API:** JSONPlaceholder
- **Font:** Playfair Display + DM Sans (Google Fonts)
