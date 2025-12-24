# 📋 Task Manager

Aplikasi pengelola tugas (todo app) sederhana menggunakan **Next.js**, **Redux**, **Prisma**, dan **SQLite**.

---

## 🚀 Cara Menjalankan Aplikasi

### Langkah 1: Install Dependencies
Buka terminal/command prompt di folder ini, lalu jalankan:
```bash
npm install
```

### Langkah 2: Setup Database
Jalankan perintah ini untuk membuat database SQLite:
```bash
npx prisma db push
```

### Langkah 3: Jalankan Aplikasi
```bash
npm run dev
```

### Langkah 4: Buka di Browser
Buka **http://localhost:3000** di browser Anda.

---

## 📁 Struktur Folder

```
aplikasi_web/
├── prisma/
│   ├── schema.prisma    # Definisi model database
│   └── dev.db           # File database SQLite
├── src/
│   ├── app/
│   │   ├── api/tasks/   # API endpoints (GET, POST, PUT, DELETE)
│   │   ├── about/       # Halaman tentang aplikasi
│   │   ├── globals.css  # Styling CSS
│   │   ├── layout.js    # Layout utama
│   │   └── page.js      # Halaman beranda
│   ├── components/
│   │   ├── Navbar.jsx       # Komponen navigasi
│   │   ├── TaskForm.jsx     # Form tambah task
│   │   ├── TaskList.jsx     # Daftar semua task
│   │   ├── TaskItem.jsx     # Item task individual
│   │   └── TaskFilter.jsx   # Filter task
│   ├── lib/
│   │   └── prisma.js    # Konfigurasi Prisma client
│   └── store/
│       ├── store.js         # Redux store
│       ├── tasksSlice.js    # Redux slice untuk tasks
│       └── provider.js      # Redux Provider
├── VIDEO_SCRIPT.md      # Skrip untuk video penjelasan
└── README.md            # File ini
```

---

## ✨ Fitur Aplikasi

| Fitur | Deskripsi |
|-------|-----------|
| ➕ Tambah Task | Menambah tugas baru dengan judul dan deskripsi |
| ✅ Toggle Selesai | Menandai task sebagai selesai/belum selesai |
| 🗑️ Hapus Task | Menghapus task yang tidak diperlukan |
| 🔍 Filter | Memfilter task: Semua, Aktif, atau Selesai |

---

## 🛠️ Teknologi yang Digunakan

- **Next.js 14** - Framework React dengan App Router
- **React Hooks** - useState, useEffect, useSelector, useDispatch
- **Redux Toolkit** - State management global
- **Prisma** - ORM untuk database
- **SQLite** - Database ringan berbasis file

---

## 📤 Cara Upload ke GitHub

### Langkah 1: Buat Repository GitHub
1. Buka [github.com](https://github.com) dan login
2. Klik tombol **"+"** di pojok kanan atas → **"New repository"**
3. Isi nama repository (contoh: `task-manager-app`)
4. Pilih **Public** atau **Private**
5. Klik **"Create repository"**

### Langkah 2: Upload dari Terminal
Jalankan perintah berikut di folder `aplikasi_web`:

```bash
# Inisialisasi git
git init

# Tambah semua file
git add .

# Commit pertama
git commit -m "Initial commit - Task Manager App"

# Hubungkan dengan repository GitHub (ganti URL sesuai milik Anda)
git remote add origin https://github.com/USERNAME/task-manager-app.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### Langkah 3: Bagikan Link
Setelah berhasil push, bagikan link repository:
```
https://github.com/USERNAME/task-manager-app
```

---

## 📥 Cara Orang Lain Menjalankan

Orang lain yang menerima link repository cukup menjalankan:
```bash
# Clone repository
git clone https://github.com/USERNAME/task-manager-app.git

# Masuk ke folder
cd task-manager-app

# Install dependencies
npm install

# Setup database
npx prisma db push

# Jalankan aplikasi
npm run dev
```

Kemudian buka **http://localhost:3000** di browser.

---

## 🎬 Video Penjelasan

Lihat file `VIDEO_SCRIPT.md` untuk skrip pembuatan video.

Setelah video dibuat:
1. Upload ke YouTube atau Google Drive
2. Edit file `src/app/about/page.js`
3. Ganti placeholder dengan iframe embed video

---

## 📝 Catatan

- Database SQLite (`prisma/dev.db`) tidak perlu di-share karena akan dibuat otomatis saat `npx prisma db push`
- Pastikan sudah menginstall **Node.js** sebelum menjalankan aplikasi
- Semua code sudah diberi komentar penjelasan di setiap file

---

**© 2024 Task Manager - Next.js + Redux + Prisma + SQLite**
