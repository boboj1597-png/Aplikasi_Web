// Halaman About
export default function AboutPage() {
    return (
        <div className="about-page">
            <section className="about-hero">
                <h1 className="about-title">Tentang Aplikasi</h1>
                <p className="about-subtitle">Task Manager - Aplikasi Pengelola Tugas</p>
            </section>

            <div className="about-content">
                {/* Deskripsi */}
                <section className="about-section">
                    <h2 className="section-title">Apa itu Task Manager?</h2>
                    <p className="section-text">
                        Task Manager artinya aplikasi web untuk membantu mengelola tugas sehari-hari.
                        Dengan karenanya, pengguna dapat dengan mudah menambah, menghapus, dan menandai tugas sebagai selesai.
                    </p>
                </section>

                {/* Fitur */}
                <section className="about-section">
                    <h2 className="section-title">Fitur Utama</h2>
                    <ul className="feature-list">
                        <li className="feature-item">
                            <span className="feature-icon">✅</span>
                            <div className="feature-content">
                                <strong>Tambah Task</strong>
                                <p>Buat task baru dengan judul dan deskripsi</p>
                            </div>
                        </li>
                        <li className="feature-item">
                            <span className="feature-icon">🔄</span>
                            <div className="feature-content">
                                <strong>Toggle Status</strong>
                                <p>Tandai task sebagai selesai atau belum</p>
                            </div>
                        </li>
                        <li className="feature-item">
                            <span className="feature-icon">🗑️</span>
                            <div className="feature-content">
                                <strong>Hapus Task</strong>
                                <p>Hapus task yang tidak diperlukan</p>
                            </div>
                        </li>
                        <li className="feature-item">
                            <span className="feature-icon">🔍</span>
                            <div className="feature-content">
                                <strong>Filter Task</strong>
                                <p>Filter: Semua, Aktif, atau Selesai</p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Modul */}
                <section className="about-section">
                    <h2 className="section-title">Teknologi-Beberapa modul</h2>
                    <div className="tech-grid">
                        <div className="tech-card"><h3>Next.js 14</h3><p>Framework React dengan App Router</p></div>
                        <div className="tech-card"><h3>React Hooks</h3><p>useState, useEffect, useSelector</p></div>
                        <div className="tech-card"><h3>Redux Toolkit</h3><p>State management global</p></div>
                        <div className="tech-card"><h3>Prisma ORM</h3><p>ORM untuk akses database</p></div>
                        <div className="tech-card"><h3>SQLite</h3><p>Database ringan</p></div>
                    </div>
                </section>

                {/* Video */}
                <section className="about-section video-section">
                    <h2 className="section-title">Video Penjelasan</h2>
                    <p className="section-text">Video penjelasan aplikasi:</p>
                    <div className="video-container">
                        <iframe
                            src="https://drive.google.com/file/d/1WYvxUKP3gTfqU5IFSgkKbhlQweF-ICd-/preview"
                            title="Video Penjelasan Task Manager"
                            allow="autoplay"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
}
