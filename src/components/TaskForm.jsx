// Form untuk menambah task baru
'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '@/store/tasksSlice';

export default function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    // Handler submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) {
            alert('Judul task tidak boleh kosong!');
            return;
        }

        setIsSubmitting(true);
        try {
            await dispatch(addTask({
                title: title.trim(),
                description: description.trim() || null,
            })).unwrap();
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Gagal menambah task:', error);
            alert('Gagal menambah task. Silakan coba lagi.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h2 className="form-title">Tambah Task Baru</h2>

            <div className="form-group">
                <label htmlFor="title" className="form-label">
                    Judul Task <span className="required">*</span>
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Masukkan judul task..."
                    className="form-input"
                    disabled={isSubmitting}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="description" className="form-label">Deskripsi (Opsional)</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Masukkan deskripsi task..."
                    className="form-textarea"
                    rows={3}
                    disabled={isSubmitting}
                />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting || !title.trim()}>
                {isSubmitting ? 'Menambahkan...' : 'Tambah Task'}
            </button>
        </form>
    );
}
