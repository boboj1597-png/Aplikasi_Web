# Video Script - Task Manager Application

## Durasi: Maksimal 5 Menit

---

## INTRO (30 detik)
**[Tampilkan wajah Anda di camera]**

"Halo, nama saya [NAMA ANDA]. Pada video ini, saya akan menjelaskan aplikasi Task Manager yang telah saya buat menggunakan Next.js, Redux, Prisma, dan SQLite."

---

## BAGIAN 1: OVERVIEW APLIKASI (1 menit)
**[Tampilkan browser dengan aplikasi terbuka]**

"Task Manager adalah aplikasi pengelola tugas sederhana yang membantu pengguna untuk:
- Menambah tugas baru
- Menandai tugas sebagai selesai
- Menghapus tugas yang tidak diperlukan
- Memfilter tugas berdasarkan status"

**[Demo navigasi halaman]**
"Aplikasi ini memiliki dua halaman utama, yaitu Beranda untuk mengelola tugas dan halaman Tentang yang berisi informasi aplikasi."

---

## BAGIAN 2: TEKNOLOGI YANG DIGUNAKAN (1.5 menit)
**[Tampilkan code editor dengan struktur folder]**

1. **Next.js 14 dengan App Router**
   "Saya menggunakan Next.js versi 14 dengan App Router untuk routing dan server-side rendering."

2. **React Hooks**
   "Komponen-komponen menggunakan React Hooks seperti useState untuk state lokal, useEffect untuk side effects, dan custom hooks dari Redux."

3. **Redux Toolkit**
   "Untuk state management global, saya menggunakan Redux Toolkit dengan createSlice dan createAsyncThunk untuk mengelola data tasks."

4. **Prisma ORM dengan SQLite**
   "Database menggunakan SQLite dengan Prisma sebagai ORM. Schema Task memiliki field id, title, description, completed, createdAt, dan updatedAt."

---

## BAGIAN 3: DEMO FITUR (1.5 menit)
**[Tampilkan browser dan demo live]**

1. **Tambah Task**
   "Saya akan menambah task baru dengan mengisi form..."
   [Demo menambah task]

2. **Toggle Completed**
   "Untuk menandai task selesai, cukup klik checkbox..."
   [Demo toggle checkbox]

3. **Filter Tasks**
   "Kita bisa memfilter tasks berdasarkan status..."
   [Demo menggunakan filter All, Active, Completed]

4. **Hapus Task**
   "Untuk menghapus task, klik tombol hapus..."
   [Demo hapus task]

---

## BAGIAN 4: STRUKTUR CODE (30 detik)
**[Tampilkan struktur folder di code editor]**

"Struktur kode aplikasi terdiri dari:
- `src/app` - Halaman dan API routes
- `src/components` - Komponen React
- `src/store` - Redux store dan slices
- `src/lib` - Prisma client
- `prisma` - Schema database"

"Setiap file sudah saya beri komentar untuk menjelaskan fungsi dari setiap line code."

---

## OUTRO (30 detik)
**[Tampilkan wajah Anda kembali]**

"Demikian penjelasan aplikasi Task Manager yang telah saya buat. Aplikasi ini mendemonstrasikan penggunaan Next.js, React Hooks, Redux, dan Prisma dengan SQLite secara terintegrasi. Terima kasih."

---

## TIPS RECORDING

1. **Pencahayaan**: Pastikan wajah terlihat jelas
2. **Audio**: Gunakan microphone yang jelas
3. **Demonstrasi**: Lakukan demo aplikasi secara perlahan agar terlihat jelas
4. **Durasi**: Pastikan tidak melebihi 5 menit

## UPLOAD VIDEO

Setelah selesai recording:
1. Upload video ke YouTube (bisa unlisted) atau Google Drive
2. Dapatkan link embed
3. Edit file `src/app/about/page.js` untuk menyematkan video
