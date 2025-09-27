import { createSlice } from "@reduxjs/toolkit"

// defining the initial state
const initialState = {
    count: 1
}


/*
creating a slice
name: name of the slice
intialState
reducers: functionality provided by the slice 
over the inital state (state control)
*/

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inrement: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        } 
    }
})

// exporting the slice functionality as `actions` provided by it
export const {increment, decrement} = counterSlice.actions

// exporting the reducer by default
export default counterSlice.reducer