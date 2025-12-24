// Redux Store - tempat penyimpanan state global
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer, // State tasks dikelola oleh tasksReducer
    },
});
