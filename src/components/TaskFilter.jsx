// File: src/components/TaskFilter.jsx
// Komponen untuk filter tasks berdasarkan status
// All, Active, Completed

// Directive untuk menandai ini sebagai Client Component
'use client';

// Import hooks dari react-redux
// useSelector: untuk membaca state dari store
// useDispatch: untuk mengirim actions
import { useSelector, useDispatch } from 'react-redux';

// Import action setFilter dari tasksSlice
import { setFilter } from '@/store/tasksSlice';

// Komponen TaskFilter
export default function TaskFilter() {
    // ============================================
    // REDUX STATE & DISPATCH
    // ============================================

    // Baca filter aktif dari Redux state
    const currentFilter = useSelector((state) => state.tasks.filter);

    // Baca items untuk menghitung statistik
    const items = useSelector((state) => state.tasks.items);

    // Dapatkan dispatch function
    const dispatch = useDispatch();

    // ============================================
    // STATISTIK TASKS
    // ============================================

    // Total semua tasks
    const totalTasks = items.length;

    // Jumlah tasks aktif (belum selesai)
    const activeTasks = items.filter((task) => !task.completed).length;

    // Jumlah tasks selesai
    const completedTasks = items.filter((task) => task.completed).length;

    // ============================================
    // DAFTAR FILTER
    // ============================================

    // Array berisi opsi filter
    const filters = [
        { value: 'all', label: 'Semua', count: totalTasks },
        { value: 'active', label: 'Aktif', count: activeTasks },
        { value: 'completed', label: 'Selesai', count: completedTasks },
    ];

    // ============================================
    // EVENT HANDLERS
    // ============================================

    // Handler untuk mengubah filter
    const handleFilterChange = (filterValue) => {
        // Dispatch action setFilter dengan nilai filter baru
        dispatch(setFilter(filterValue));
    };

    // ============================================
    // RENDER
    // ============================================

    return (
        // Container filter dengan styling flex
        <div className="task-filter">
            {/* Label untuk filter group */}
            <span className="filter-label">Filter:</span>

            {/* Render semua opsi filter */}
            <div className="filter-buttons">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        onClick={() => handleFilterChange(filter.value)}
                        className={`filter-btn ${currentFilter === filter.value ? 'filter-btn-active' : ''
                            }`}
                    >
                        {/* Label filter */}
                        {filter.label}

                        {/* Badge dengan jumlah */}
                        <span className="filter-count">{filter.count}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
