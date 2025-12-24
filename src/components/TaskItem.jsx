// Komponen item task individual
'use client';

import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '@/store/tasksSlice';

export default function TaskItem({ task }) {
    const dispatch = useDispatch();

    // Toggle status selesai
    const handleToggle = () => {
        dispatch(toggleTask({ id: task.id, completed: !task.completed }));
    };

    // Hapus task
    const handleDelete = () => {
        if (window.confirm('Apakah Anda yakin ingin menghapus task ini?')) {
            dispatch(deleteTask(task.id));
        }
    };

    // Format tanggal Indonesia
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit',
        });
    };

    return (
        <div className={`task-item ${task.completed ? 'task-completed' : ''}`}>
            {/* Checkbox */}
            <div className="task-checkbox">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleToggle}
                    id={`task-${task.id}`}
                    className="checkbox"
                />
                <label htmlFor={`task-${task.id}`} className="checkbox-label">
                    {task.completed && (
                        <svg className="checkmark" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                    )}
                </label>
            </div>

            {/* Konten */}
            <div className="task-content">
                <h3 className="task-title">{task.title}</h3>
                {task.description && <p className="task-description">{task.description}</p>}
                <span className="task-date">Dibuat: {formatDate(task.createdAt)}</span>
            </div>

            {/* Tombol hapus */}
            <div className="task-actions">
                <button onClick={handleDelete} className="btn btn-danger btn-small" title="Hapus task">
                    <svg viewBox="0 0 24 24" className="icon">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
