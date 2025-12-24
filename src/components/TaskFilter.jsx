// Komponen filter tasks
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '@/store/tasksSlice';

export default function TaskFilter() {
    const currentFilter = useSelector((state) => state.tasks.filter);
    const items = useSelector((state) => state.tasks.items);
    const dispatch = useDispatch();

    // Hitung statistik
    const totalTasks = items.length;
    const activeTasks = items.filter((task) => !task.completed).length;
    const completedTasks = items.filter((task) => task.completed).length;

    const filters = [
        { value: 'all', label: 'Semua', count: totalTasks },
        { value: 'active', label: 'Aktif', count: activeTasks },
        { value: 'completed', label: 'Selesai', count: completedTasks },
    ];

    return (
        <div className="task-filter">
            <span className="filter-label">Filter:</span>
            <div className="filter-buttons">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        onClick={() => dispatch(setFilter(filter.value))}
                        className={`filter-btn ${currentFilter === filter.value ? 'filter-btn-active' : ''}`}
                    >
                        {filter.label}
                        <span className="filter-count">{filter.count}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
