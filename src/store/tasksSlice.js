// File: src/store/tasksSlice.js
// Redux Slice untuk mengelola state tasks
// Slice adalah kumpulan reducer dan actions untuk fitur tertentu

// Import createSlice dan createAsyncThunk dari Redux Toolkit
// createSlice: membuat reducer dan actions sekaligus
// createAsyncThunk: membuat async action dengan lifecycle (pending/fulfilled/rejected)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ============================================
// ASYNC THUNKS - Actions yang melakukan API calls
// ============================================

// Async action untuk mengambil semua tasks dari API
// Akan dispatch pending, fulfilled, atau rejected action secara otomatis
export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks', // Nama aksi unik
    async () => {
        // Fetch data dari API endpoint
        const response = await fetch('/api/tasks');
        // Parse response JSON
        const data = await response.json();
        // Return data sebagai payload
        return data;
    }
);

// Async action untuk menambah task baru
// Menerima object {title, description} sebagai parameter
export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (taskData) => {
        // Kirim POST request dengan data task baru
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });
        // Parse dan return task yang baru dibuat
        const data = await response.json();
        return data;
    }
);

// Async action untuk toggle status completed task
// Menerima object {id, completed} sebagai parameter
export const toggleTask = createAsyncThunk(
    'tasks/toggleTask',
    async ({ id, completed }) => {
        // Kirim PUT request untuk update status completed
        const response = await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed }),
        });
        // Parse dan return task yang diupdate
        const data = await response.json();
        return data;
    }
);

// Async action untuk menghapus task
// Menerima id task sebagai parameter
export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id) => {
        // Kirim DELETE request
        await fetch(`/api/tasks/${id}`, {
            method: 'DELETE',
        });
        // Return id untuk menghapus dari state
        return id;
    }
);

// ============================================
// SLICE - Reducer dan state awal
// ============================================

// State awal untuk tasks
const initialState = {
    items: [],           // Array untuk menyimpan list tasks
    status: 'idle',      // Status: idle, loading, succeeded, failed
    error: null,         // Menyimpan pesan error jika ada
    filter: 'all',       // Filter aktif: all, active, completed
};

// Buat slice dengan createSlice
const tasksSlice = createSlice({
    name: 'tasks', // Nama slice, digunakan sebagai prefix action
    initialState,  // State awal
    reducers: {
        // Reducer untuk mengubah filter
        // Action ini bukan async jadi bisa langsung di reducers
        setFilter: (state, action) => {
            // Mengubah nilai filter dengan payload yang dikirim
            state.filter = action.payload;
        },
    },
    // Extra reducers untuk menangani async actions
    extraReducers: (builder) => {
        builder
            // ======= FETCH TASKS =======
            // Saat fetchTasks pending (loading)
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            // Saat fetchTasks berhasil
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload; // Set items dengan data dari API
            })
            // Saat fetchTasks gagal
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; // Simpan pesan error
            })

            // ======= ADD TASK =======
            // Saat addTask berhasil, tambahkan task baru ke awal array
            .addCase(addTask.fulfilled, (state, action) => {
                state.items.unshift(action.payload);
            })

            // ======= TOGGLE TASK =======
            // Saat toggleTask berhasil, update task di state
            .addCase(toggleTask.fulfilled, (state, action) => {
                // Cari index task yang diupdate
                const index = state.items.findIndex(
                    (task) => task.id === action.payload.id
                );
                // Jika ditemukan, replace dengan data baru
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })

            // ======= DELETE TASK =======
            // Saat deleteTask berhasil, hapus task dari state
            .addCase(deleteTask.fulfilled, (state, action) => {
                // Filter out task yang dihapus berdasarkan id
                state.items = state.items.filter(
                    (task) => task.id !== action.payload
                );
            });
    },
});

// Export action setFilter untuk digunakan di komponen
export const { setFilter } = tasksSlice.actions;

// Export selector untuk mengambil filtered tasks
// Selector adalah function untuk mengambil data dari state
export const selectFilteredTasks = (state) => {
    const { items, filter } = state.tasks;

    // Return tasks berdasarkan filter yang aktif
    switch (filter) {
        case 'active':
            // Hanya task yang belum selesai
            return items.filter((task) => !task.completed);
        case 'completed':
            // Hanya task yang sudah selesai
            return items.filter((task) => task.completed);
        default:
            // Semua tasks
            return items;
    }
};

// Export reducer untuk digunakan di store
export default tasksSlice.reducer;
