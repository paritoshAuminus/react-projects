import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import userReducer from '../features/userData/userSlice'
import newUserReducer from '../features/newUsers/newUsersSlice'


/*
Step 1 - store.js
Step 2 - counterSlice.js
Step 3 - Counter.jsx
Step 4 - Main.jsx
*/


/*
Store is a centralised location from which data is shared and mutated, 
it however doesn't store all the data itself.

In the obove import statement we see that we have imported the reducer from
our slice and merely named it as `contentReducer`. All the slices have
reducers and those reducers are attached inside the store as seen below
*/

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        users: newUserReducer
    }
})