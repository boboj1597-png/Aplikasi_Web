// File: src/components/Navbar.jsx
// Komponen navigasi utama aplikasi
// Berisi link ke halaman Home dan About

// Directive untuk menandai ini sebagai Client Component
// Diperlukan karena menggunakan hooks dan interaksi
'use client';

// Import Link dari Next.js untuk navigasi client-side
// Link lebih baik dari <a> karena tidak melakukan full page reload
import Link from 'next/link';

// Import usePathname untuk mengetahui halaman aktif
import { usePathname } from 'next/navigation';

// Komponen Navbar
export default function Navbar() {
    // ============================================
    // HOOKS
    // ============================================

    // Dapatkan pathname saat ini untuk highlight menu aktif
    const pathname = usePathname();

    // ============================================
    // DAFTAR MENU
    // ============================================

    // Array berisi semua menu navigasi
    const navItems = [
        { href: '/', label: 'Beranda' },
        { href: '/about', label: 'Tentang' },
    ];

    // ============================================
    // RENDER
    // ============================================

    return (
        // Header container dengan navbar
        <header className="navbar">
            {/* Container untuk konten navbar */}
            <div className="navbar-container">
                {/* Logo dan nama aplikasi */}
                <Link href="/" className="navbar-brand">
                    {/* Icon checklist */}
                    <svg viewBox="0 0 24 24" className="brand-icon">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {/* Nama aplikasi */}
                    <span className="brand-text">Task Manager</span>
                </Link>

                {/* Navigasi menu */}
                <nav className="navbar-nav">
                    {/* Render semua menu items */}
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-link ${pathname === item.href ? 'nav-link-active' : ''
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
