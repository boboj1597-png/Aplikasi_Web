# 📋 Task Manager

Saya sangat suka menggunakan github. Dikarenakan gratis dan konfigurasinya tanpa batas.
Aplikasi pengelola tugas todo app saya dengan **Next.js**, **Redux**, **Prisma**, dan **SQLite**.

---

## 🚀 Cara Menjalankan Aplikasi
### Langkah 1: Install
Buka terminal, lalu comment prompt di folder bapak, jalankan:
```bash
npm install
```

### Langkah 2: Setup Database
Jalankan perintah untuk membuat database SQLite:
```bash
npx prisma db push
```

### Langkah 3: Jalankan Aplikasi
```bash
npm run dev
```

### Langkah 4: Buka di Browser
Buka **http://localhost:3000** di browser bapak.

---

## ✨ Fitur Aplikasi

| Fitur | Deskripsi |
|-------|-----------|
| ➕ Tambah Task | Menambah tugas baru dengan judul dan deskripsi |
| ✅ Toggle Selesai | Menandai task sebagai selesai/belum selesai |
| 🗑️ Hapus Task | Menghapus task yang tidak diperlukan |
| 🔍 Filter | Memfilter task: Semua, Aktif, atau Selesai |

---

## 🛠️ Sesuai Syarat Yang Digunakan

- **Next.js 14** - Framework React dengan App Router
- **React Hooks** - useState, useEffect, useSelector, useDispatch
- **Redux Toolkit** - State management global
- **Prisma** - ORM untuk database
- **SQLite** - Database ringan berbasis file