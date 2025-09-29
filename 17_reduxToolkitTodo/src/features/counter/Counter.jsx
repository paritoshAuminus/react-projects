import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'


/*
Step 1 - store.js
Step 2 - counterSlice.js
Step 3 - Counter.jsx
Step 4 - Main.jsx
*/


/*
We will use the slice functionality here with the help of 
redux library's `useSelector` function

In order to do this we extract the value using the useSelector
which takes a callback as a parameter and provides state variable by default,
notice we did not import the `store` or `counterSlice`. All we had to do
was directly destructure the state like state.sliceName.initialStateHolder
*/

function Counter() {
  // useSelector((state) => state.sliceName.initialStateHolder)
  const count = useSelector((state) => state.counter.count)

  const dispatch = useDispatch()
  
  return (
    <>
      <h2>Count: {count}</h2>
      {/* 
      Using dispatch to update the value of the initial state in the slice,
      the value is updated using the same actions created and exported by the 
      `counterSlice.js`
      syntax: event={() => useDispatchvar(actionFnCall())}
      */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default Counter
