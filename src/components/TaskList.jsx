// Komponen daftar tasks
'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, selectFilteredTasks } from '@/store/tasksSlice';
import TaskItem from './TaskItem';

export default function TaskList() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);
    const tasks = useSelector(selectFilteredTasks);

    // Fetch tasks saat pertama kali dimuat
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasks());
        }
    }, [status, dispatch]);

    // Tampilan loading
    if (status === 'loading') {
        return (
            <div className="task-list-loading">
                <div className="spinner"></div>
                <p>Memuat tasks...</p>
            </div>
        );
    }

    // Tampilan error
    if (status === 'failed') {
        return (
            <div className="task-list-error">
                <p>Error: {error}</p>
                <button onClick={() => dispatch(fetchTasks())} className="btn btn-primary">
                    Coba Lagi
                </button>
            </div>
        );
    }

    // Tampilan kosong
    if (tasks.length === 0) {
        return (
            <div className="task-list-empty">
                <svg viewBox="0 0 24 24" className="empty-icon">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l5.59-5.58L19 10l-7 7z" />
                </svg>
                <p>Tidak ada task ditemukan.</p>
                <p className="empty-hint">Tambahkan task baru menggunakan form di samping.</p>
            </div>
        );
    }

    // Tampilan daftar tasks
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}
