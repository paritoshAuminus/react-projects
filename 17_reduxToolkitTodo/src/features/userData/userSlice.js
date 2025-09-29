import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    name: '',
    gmail: '',
    password: ''
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload
        },
        updateGmail: (state, action) => {
            state.gmail = action.payload
        },
        updatePassword: (state, action) => {
            state.password = action.payload
        }
    }
})

export const {updateName, updateGmail, updatePassword} = user.actions;
export default user.reducer;