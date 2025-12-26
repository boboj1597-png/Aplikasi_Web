// membungkus semua halaman
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/provider";
import Navbar from "@/components/Navbar";

// Konfigurasi font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata untuk SEO
export const metadata = {
  title: "Task Manager atau Kelola Tugas",
  description: "Aplikasi pengelola tugas dengan Next.js, Redux, dan Prisma",
};

// Komponen Rootlayout
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <Navbar />
          <main className="main-content">{children}</main>
          <footer className="footer">
            <p>© 2025 Task Manager. Dipake dengan Next.js, Redux & Prisma.</p>
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
