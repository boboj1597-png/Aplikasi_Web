// File: src/app/layout.js
// Root Layout - Komponen layout utama yang membungkus semua halaman
// Layout ini diterapkan ke semua route dalam aplikasi

// Import font dari Google Fonts melalui next/font
// Geist adalah font modern yang cocok untuk UI
import { Geist, Geist_Mono } from "next/font/google";

// Import global CSS styles
import "./globals.css";

// Import Redux Provider wrapper
import ReduxProvider from "@/store/provider";

// Import komponen Navbar
import Navbar from "@/components/Navbar";

// Konfigurasi font Geist Sans untuk teks umum
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS variable untuk font
  subsets: ["latin"],            // Subset karakter yang digunakan
});

// Konfigurasi font Geist Mono untuk code/monospace
const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // CSS variable untuk font mono
  subsets: ["latin"],
});

// Metadata untuk SEO - akan ditampilkan di browser tab dan search results
export const metadata = {
  title: "Task Manager - Kelola Tugas Anda",           // Judul halaman
  description: "Aplikasi pengelola tugas sederhana dengan Next.js, Redux, dan Prisma", // Deskripsi
};

// Komponen RootLayout - layout utama aplikasi
// Menerima children yang merupakan konten halaman
export default function RootLayout({ children }) {
  return (
    // HTML root dengan bahasa Indonesia
    <html lang="id">
      {/* Body dengan font variables */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Redux Provider membungkus seluruh aplikasi */}
        {/* Semua komponen di dalam bisa akses Redux store */}
        <ReduxProvider>
          {/* Navbar ditampilkan di semua halaman */}
          <Navbar />

          {/* Main content area */}
          <main className="main-content">
            {children}
          </main>

          {/* Footer */}
          <footer className="footer">
            <p>© 2024 Task Manager. Dibuat dengan Next.js, Redux & Prisma.</p>
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
