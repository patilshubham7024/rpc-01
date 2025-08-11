import { configureStore } from "@reduxjs/toolkit";
import rpsSlice from './rpsSlice';

// Store
const store = configureStore({
    reducer: {
        rps: rpsSlice,
    }
});

export default store;