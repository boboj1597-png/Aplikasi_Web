// File: src/components/TaskList.jsx
// Komponen utama untuk menampilkan daftar tasks
// Menggunakan useEffect untuk fetch data saat mount

// Directive untuk menandai ini sebagai Client Component
'use client';

// Import hooks dari React
// useEffect: untuk side effects seperti fetch data
import { useEffect } from 'react';

// Import hooks dari react-redux
import { useSelector, useDispatch } from 'react-redux';

// Import async action dan selector
import { fetchTasks, selectFilteredTasks } from '@/store/tasksSlice';

// Import komponen TaskItem
import TaskItem from './TaskItem';

// Komponen TaskList
export default function TaskList() {
    // ============================================
    // REDUX STATE & DISPATCH
    // ============================================

    // Dapatkan dispatch function
    const dispatch = useDispatch();

    // Baca status loading dari Redux state
    const status = useSelector((state) => state.tasks.status);

    // Baca error message dari Redux state
    const error = useSelector((state) => state.tasks.error);

    // Baca filtered tasks menggunakan selector
    const tasks = useSelector(selectFilteredTasks);

    // ============================================
    // EFFECTS
    // ============================================

    // useEffect untuk fetch tasks saat komponen pertama kali dimuat
    useEffect(() => {
        // Hanya fetch jika status masih 'idle' (belum pernah fetch)
        if (status === 'idle') {
            // Dispatch async action fetchTasks
            dispatch(fetchTasks());
        }
    }, [status, dispatch]); // Dependencies: jalankan ulang jika status/dispatch berubah

    // ============================================
    // CONDITIONAL RENDERING
    // ============================================

    // Tampilkan loading spinner saat sedang fetch
    if (status === 'loading') {
        return (
            <div className="task-list-loading">
                {/* Spinner animasi */}
                <div className="spinner"></div>
                <p>Memuat tasks...</p>
            </div>
        );
    }

    // Tampilkan error message jika gagal fetch
    if (status === 'failed') {
        return (
            <div className="task-list-error">
                <p>Error: {error}</p>
                {/* Tombol untuk retry */}
                <button
                    onClick={() => dispatch(fetchTasks())}
                    className="btn btn-primary"
                >
                    Coba Lagi
                </button>
            </div>
        );
    }

    // Tampilkan pesan jika tidak ada tasks
    if (tasks.length === 0) {
        return (
            <div className="task-list-empty">
                {/* Icon kosong */}
                <svg viewBox="0 0 24 24" className="empty-icon">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l5.59-5.58L19 10l-7 7z" />
                </svg>
                <p>Tidak ada task ditemukan.</p>
                <p className="empty-hint">Tambahkan task baru menggunakan form di atas.</p>
            </div>
        );
    }

    // ============================================
    // RENDER LIST
    // ============================================

    return (
        // Container list tasks
        <div className="task-list">
            {/* Render setiap task dengan komponen TaskItem */}
            {tasks.map((task) => (
                // Key unik untuk setiap item (penting untuk React)
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}
