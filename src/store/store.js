// File: src/store/store.js
// Konfigurasi Redux Store menggunakan Redux Toolkit
// Store adalah tempat penyimpanan state global aplikasi

// Import configureStore dari Redux Toolkit
// configureStore menyederhanakan setup store dengan default middleware
import { configureStore } from '@reduxjs/toolkit';

// Import tasksSlice reducer untuk mengelola state tasks
import tasksReducer from './tasksSlice';

// Buat dan export store dengan konfigurasi
// reducer: object berisi semua reducer yang akan digabungkan
export const store = configureStore({
    reducer: {
        // State tasks akan dikelola oleh tasksReducer
        // Bisa diakses dengan state.tasks di seluruh aplikasi
        tasks: tasksReducer,
    },
    // Middleware default sudah termasuk redux-thunk untuk async actions
    // devTools otomatis aktif di development mode
});
