// File: src/components/TaskForm.jsx
// Komponen form untuk menambah task baru
// Menggunakan React Hooks dan Redux

// Directive untuk menandai ini sebagai Client Component
// Diperlukan karena komponen ini menggunakan hooks dan interaktif
'use client';

// Import hooks dari React
// useState: untuk state lokal form
import { useState } from 'react';

// Import hooks dari react-redux
// useDispatch: untuk mengirim actions ke Redux store
import { useDispatch } from 'react-redux';

// Import async action untuk menambah task
import { addTask } from '@/store/tasksSlice';

// Komponen TaskForm
export default function TaskForm() {
    // ============================================
    // STATE LOKAL
    // ============================================

    // State untuk menyimpan nilai input judul
    const [title, setTitle] = useState('');

    // State untuk menyimpan nilai input deskripsi
    const [description, setDescription] = useState('');

    // State untuk menandai proses submit sedang berjalan
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ============================================
    // REDUX DISPATCH
    // ============================================

    // Dapatkan dispatch function dari Redux
    const dispatch = useDispatch();

    // ============================================
    // EVENT HANDLERS
    // ============================================

    // Handler untuk submit form
    const handleSubmit = async (e) => {
        // Mencegah refresh halaman saat submit
        e.preventDefault();

        // Validasi: judul tidak boleh kosong
        if (!title.trim()) {
            alert('Judul task tidak boleh kosong!');
            return;
        }

        // Set status submitting untuk disable button
        setIsSubmitting(true);

        try {
            // Dispatch action addTask dengan data form
            // await menunggu async thunk selesai
            await dispatch(addTask({
                title: title.trim(),
                description: description.trim() || null,
            })).unwrap(); // unwrap() untuk mendapat promise yang proper

            // Reset form setelah berhasil
            setTitle('');
            setDescription('');
        } catch (error) {
            // Tampilkan error jika gagal
            console.error('Gagal menambah task:', error);
            alert('Gagal menambah task. Silakan coba lagi.');
        } finally {
            // Reset status submitting
            setIsSubmitting(false);
        }
    };

    // ============================================
    // RENDER
    // ============================================

    return (
        // Form container dengan onSubmit handler
        <form onSubmit={handleSubmit} className="task-form">
            {/* Judul section form */}
            <h2 className="form-title">Tambah Task Baru</h2>

            {/* Grup input untuk judul */}
            <div className="form-group">
                {/* Label untuk input judul */}
                <label htmlFor="title" className="form-label">
                    Judul Task <span className="required">*</span>
                </label>

                {/* Input judul - required */}
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

            {/* Grup input untuk deskripsi */}
            <div className="form-group">
                {/* Label untuk textarea deskripsi */}
                <label htmlFor="description" className="form-label">
                    Deskripsi (Opsional)
                </label>

                {/* Textarea deskripsi - opsional */}
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

            {/* Tombol submit */}
            <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting || !title.trim()}
            >
                {/* Text berubah saat submitting */}
                {isSubmitting ? 'Menambahkan...' : 'Tambah Task'}
            </button>
        </form>
    );
}
