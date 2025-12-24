// File: src/app/about/page.js
// Halaman About (route: /about)
// Berisi deskripsi aplikasi dan section untuk embed video

// Komponen AboutPage
export default function AboutPage() {
    return (
        // Container halaman about
        <div className="about-page">
            {/* Header section */}
            <section className="about-hero">
                <h1 className="about-title">Tentang Aplikasi</h1>
                <p className="about-subtitle">
                    Task Manager - Aplikasi Pengelola Tugas
                </p>
            </section>

            {/* Konten utama */}
            <div className="about-content">
                {/* Section deskripsi aplikasi */}
                <section className="about-section">
                    <h2 className="section-title">Apa itu Task Manager?</h2>
                    <p className="section-text">
                        Task Manager adalah aplikasi web sederhana untuk membantu Anda
                        mengelola tugas sehari-hari. Dengan antarmuka yang intuitif,
                        Anda dapat dengan mudah menambah, menghapus, dan menandai
                        tugas sebagai selesai.
                    </p>
                </section>

                {/* Section fitur */}
                <section className="about-section">
                    <h2 className="section-title">Fitur Utama</h2>
                    <ul className="feature-list">
                        <li className="feature-item">
                            <span className="feature-icon">✅</span>
                            <div className="feature-content">
                                <strong>Tambah Task</strong>
                                <p>Buat task baru dengan judul dan deskripsi opsional</p>
                            </div>
                        </li>
                        <li className="feature-item">
                            <span className="feature-icon">🔄</span>
                            <div className="feature-content">
                                <strong>Toggle Status</strong>
                                <p>Tandai task sebagai selesai atau belum selesai</p>
                            </div>
                        </li>
                        <li className="feature-item">
                            <span className="feature-icon">🗑️</span>
                            <div className="feature-content">
                                <strong>Hapus Task</strong>
                                <p>Hapus task yang tidak diperlukan lagi</p>
                            </div>
                        </li>
                        <li className="feature-item">
                            <span className="feature-icon">🔍</span>
                            <div className="feature-content">
                                <strong>Filter Task</strong>
                                <p>Filter berdasarkan status: Semua, Aktif, atau Selesai</p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Section teknologi */}
                <section className="about-section">
                    <h2 className="section-title">Teknologi yang Digunakan</h2>
                    <div className="tech-grid">
                        <div className="tech-card">
                            <h3>Next.js 14</h3>
                            <p>Framework React modern dengan App Router</p>
                        </div>
                        <div className="tech-card">
                            <h3>React Hooks</h3>
                            <p>useState, useEffect, dan custom hooks</p>
                        </div>
                        <div className="tech-card">
                            <h3>Redux Toolkit</h3>
                            <p>State management dengan createSlice dan createAsyncThunk</p>
                        </div>
                        <div className="tech-card">
                            <h3>Prisma ORM</h3>
                            <p>ORM modern untuk akses database</p>
                        </div>
                        <div className="tech-card">
                            <h3>SQLite</h3>
                            <p>Database ringan tanpa konfigurasi server</p>
                        </div>
                    </div>
                </section>

                {/* Section video penjelasan */}
                <section className="about-section video-section">
                    <h2 className="section-title">Video Penjelasan</h2>
                    <p className="section-text">
                        Berikut adalah video penjelasan mengenai aplikasi Task Manager
                        dan fitur-fitur yang tersedia:
                    </p>

                    {/* Container untuk embed video */}
                    <div className="video-container">
                        {/* 
              INSTRUKSI EMBED VIDEO:
              ========================
              Ganti placeholder di bawah ini dengan video Anda.
              
              Opsi 1: YouTube
              <iframe 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Video Penjelasan Task Manager"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              Opsi 2: Video lokal (simpan di folder public)
              <video controls>
                <source src="/video-penjelasan.mp4" type="video/mp4" />
                Browser Anda tidak mendukung video tag.
              </video>
              
              Opsi 3: Google Drive
              <iframe 
                src="https://drive.google.com/file/d/YOUR_FILE_ID/preview"
                title="Video Penjelasan Task Manager"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            */}

                        {/* Placeholder video - GANTI DENGAN VIDEO ANDA */}
                        <div className="video-placeholder">
                            <div className="placeholder-icon">🎬</div>
                            <h3>Tempat Embed Video</h3>
                            <p>
                                Video penjelasan akan ditampilkan di sini.
                                <br />
                                Silakan edit file <code>src/app/about/page.js</code>
                                <br />
                                untuk menyematkan video Anda.
                            </p>
                            <div className="placeholder-instructions">
                                <strong>Cara menyematkan video:</strong>
                                <ol>
                                    <li>Upload video ke YouTube atau Google Drive</li>
                                    <li>Dapatkan link embed video</li>
                                    <li>Ganti placeholder ini dengan iframe embed</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section pembuat */}
                <section className="about-section">
                    <h2 className="section-title">Pembuat</h2>
                    <p className="section-text">
                        Aplikasi ini dibuat sebagai tugas untuk mendemonstrasikan
                        penggunaan teknologi web modern termasuk Next.js, Redux,
                        Prisma, dan SQLite.
                    </p>
                </section>
            </div>
        </div>
    );
}
