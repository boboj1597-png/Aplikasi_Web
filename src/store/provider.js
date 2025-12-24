// File: src/store/provider.js
// Redux Provider Wrapper Component
// Komponen ini membungkus aplikasi dengan Redux Provider

// Directive untuk menandai ini sebagai Client Component
// Diperlukan karena Provider menggunakan React Context
'use client';

// Import Provider dari react-redux
// Provider membuat Redux store tersedia di seluruh komponen
import { Provider } from 'react-redux';

// Import store yang sudah dikonfigurasi
import { store } from './store';

// Komponen ReduxProvider
// Menerima children sebagai prop (komponen yang akan dibungkus)
export default function ReduxProvider({ children }) {
    return (
        // Provider menerima store sebagai prop
        // Semua komponen di dalam Provider bisa akses store
        <Provider store={store}>
            {children}
        </Provider>
    );
}
