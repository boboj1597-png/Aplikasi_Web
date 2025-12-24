// Komponen Navbar
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Beranda' },
        { href: '/about', label: 'Tentang' },
    ];

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link href="/" className="navbar-brand">
                    <svg viewBox="0 0 24 24" className="brand-icon">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="brand-text">Task Manager</span>
                </Link>

                {/* Menu navigasi */}
                <nav className="navbar-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-link ${pathname === item.href ? 'nav-link-active' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
