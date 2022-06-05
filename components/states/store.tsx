import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
const store=  configureStore({
    reducer: {
        user: userSlice
    }
});
export default store;
export type AppDispatch= typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;