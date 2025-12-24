// Redux Slice untuk mengelola state tasks
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action: Ambil semua tasks dari API
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await fetch('/api/tasks');
    return await response.json();
});

// Async action: Tambah task baru
export const addTask = createAsyncThunk('tasks/addTask', async (taskData) => {
    const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
    });
    return await response.json();
});

// Async action: Toggle status completed
export const toggleTask = createAsyncThunk('tasks/toggleTask', async ({ id, completed }) => {
    const response = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed }),
    });
    return await response.json();
});

// Async action: Hapus task
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    return id;
});

// State awal
const initialState = {
    items: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
    filter: 'all', // all, active, completed
};

// Buat slice
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // Ubah filter
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch tasks
            .addCase(fetchTasks.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Add task
            .addCase(addTask.fulfilled, (state, action) => {
                state.items.unshift(action.payload);
            })
            // Toggle task
            .addCase(toggleTask.fulfilled, (state, action) => {
                const index = state.items.findIndex((task) => task.id === action.payload.id);
                if (index !== -1) state.items[index] = action.payload;
            })
            // Delete task
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.items = state.items.filter((task) => task.id !== action.payload);
            });
    },
});

export const { setFilter } = tasksSlice.actions;

// Selector: ambil tasks sesuai filter
export const selectFilteredTasks = (state) => {
    const { items, filter } = state.tasks;
    switch (filter) {
        case 'active': return items.filter((task) => !task.completed);
        case 'completed': return items.filter((task) => task.completed);
        default: return items;
    }
};

export default tasksSlice.reducer;
