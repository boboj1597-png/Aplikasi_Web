// File: src/app/page.js
// Halaman utama aplikasi (route: /)
// Menampilkan form tambah task, filter, dan daftar tasks

// Import komponen-komponen yang dibutuhkan
import TaskForm from "@/components/TaskForm";
import TaskFilter from "@/components/TaskFilter";
import TaskList from "@/components/TaskList";

// Komponen Home - halaman utama
export default function Home() {
  return (
    // Container utama halaman
    <div className="home-page">
      {/* Header section dengan judul */}
      <section className="hero-section">
        <h1 className="hero-title">
          Kelola Tugas Anda
        </h1>
        <p className="hero-subtitle">
          Tambah, kelola, dan selesaikan tugas dengan mudah
        </p>
      </section>

      {/* Container untuk konten utama dengan layout dua kolom */}
      <div className="content-container">
        {/* Sidebar kiri - Form tambah task */}
        <aside className="sidebar">
          <TaskForm />
        </aside>

        {/* Konten utama - Filter dan daftar task */}
        <section className="main-section">
          {/* Filter tasks */}
          <TaskFilter />

          {/* Daftar tasks */}
          <TaskList />
        </section>
      </div>
    </div>
  );
}
