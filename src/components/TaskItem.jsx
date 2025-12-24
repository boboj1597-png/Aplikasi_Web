// File: src/components/TaskItem.jsx
// Komponen untuk menampilkan satu item task
// Mengelola toggle completed dan delete task

// Directive untuk menandai ini sebagai Client Component
'use client';

// Import useDispatch dari react-redux
import { useDispatch } from 'react-redux';

// Import async actions dari tasksSlice
import { toggleTask, deleteTask } from '@/store/tasksSlice';

// Komponen TaskItem menerima task object sebagai prop
export default function TaskItem({ task }) {
    // ============================================
    // REDUX DISPATCH
    // ============================================

    // Dapatkan dispatch function dari Redux
    const dispatch = useDispatch();

    // ============================================
    // EVENT HANDLERS
    // ============================================

    // Handler untuk toggle status completed
    const handleToggle = () => {
        // Dispatch toggleTask dengan id dan status baru (kebalikan dari sekarang)
        dispatch(toggleTask({
            id: task.id,
            completed: !task.completed,
        }));
    };

    // Handler untuk menghapus task
    const handleDelete = () => {
        // Konfirmasi sebelum hapus
        if (window.confirm('Apakah Anda yakin ingin menghapus task ini?')) {
            // Dispatch deleteTask dengan id task
            dispatch(deleteTask(task.id));
        }
    };

    // Format tanggal ke format Indonesia
    const formatDate = (dateString) => {
        // Buat object Date dari string
        const date = new Date(dateString);

        // Return format tanggal Indonesia
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // ============================================
    // RENDER
    // ============================================

    return (
        // Container item dengan class berbeda untuk completed
        <div className={`task-item ${task.completed ? 'task-completed' : ''}`}>
            {/* Checkbox untuk toggle completed */}
            <div className="task-checkbox">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleToggle}
                    id={`task-${task.id}`}
                    className="checkbox"
                />
                {/* Custom checkbox visual */}
                <label htmlFor={`task-${task.id}`} className="checkbox-label">
                    {/* Icon checkmark jika completed */}
                    {task.completed && (
                        <svg className="checkmark" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                    )}
                </label>
            </div>

            {/* Konten task */}
            <div className="task-content">
                {/* Judul task dengan strikethrough jika completed */}
                <h3 className="task-title">{task.title}</h3>

                {/* Deskripsi task jika ada */}
                {task.description && (
                    <p className="task-description">{task.description}</p>
                )}

                {/* Tanggal dibuat */}
                <span className="task-date">
                    Dibuat: {formatDate(task.createdAt)}
                </span>
            </div>

            {/* Tombol aksi */}
            <div className="task-actions">
                {/* Tombol hapus */}
                <button
                    onClick={handleDelete}
                    className="btn btn-danger btn-small"
                    title="Hapus task"
                >
                    {/* Icon trash */}
                    <svg viewBox="0 0 24 24" className="icon">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
