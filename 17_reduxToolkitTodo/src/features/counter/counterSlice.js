import { createSlice } from "@reduxjs/toolkit"


/*
Step 1 - store.js
Step 2 - counterSlice.js
Step 3 - Counter.jsx
Step 4 - Main.jsx
*/


// defining the initial state
const initialState = {
    count: 1
}


/*
creating a slice
name: name of the slice,
intialState,
reducers: functionality provided by the slice 
over the inital state (state control)
*/

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        }
    }
})

// exporting the slice functionality as `actions` provided by it
export const {increment, decrement, reset} = counterSlice.actions

// exporting the reducer by default
export default counterSlice.reducer