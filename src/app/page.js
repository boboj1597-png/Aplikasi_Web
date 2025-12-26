// Halaman utama aplikasi
import TaskForm from "@/components/TaskForm";
import TaskFilter from "@/components/TaskFilter";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <div className="home-page">
      {/* Header */}
      <section className="hero-section">
        <h1 className="hero-title">Kelola Tugas</h1>
        <p className="hero-subtitle">Tambah, kelola, dan selesaikan tugas dengan mudah</p>
      </section>

      {/* Konten utama */}
      <div className="content-container">
        <aside className="sidebar">
          <TaskForm />
        </aside>
        <section className="main-section">
          <TaskFilter />
          <TaskList />
        </section>
      </div>
    </div>
  );
}
