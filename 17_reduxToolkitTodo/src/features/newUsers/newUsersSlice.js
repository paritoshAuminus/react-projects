import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null
}

export const fetchUsers = createAsyncThunk(
    'newUsers/fetchUsers',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
    }
)

export const newUserSlice = createSlice({
    name: 'newUsers',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default newUserSlice.reducer