import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';
import { status } from '../../constrant';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
        status: status.idle,
    },
    reducers: { 
        setUser: (state, action) => {
            state.data = action.payload;
        },
        setUserStatus:(state, action) => {
            state.status = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.status = status.loading;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = status.idle;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = status.error;
            });
    },
    
});
export const { setUser,setUserStatus } = userSlice.actions;
export default userSlice.reducer;


// Thunk
export const fetchUser = createAsyncThunk('users/fetch', async () => {
    const res = await fetch('/api/auth/me');
    const data = await res.json();
    return data;
});
