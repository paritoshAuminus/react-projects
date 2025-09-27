import { useSelector } from 'react-redux'
import './App.css'

/*
We will use the slice functionality here with the help of 
redux library's `useSelector` function

In order to do this we extract the value using the useSelector
which takes a callback as a parameter and provides state variable by default,
notice we did not import the `store` or `counterSlice`. All we had to do
was directly destructure the state like state.sliceName.initialStateHolder
*/

function App() {
  // useSelector((state) => state.sliceName.initialStateHolder)
  const count = useSelector((state) => state.counter.count)

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <h2>Count: {count}</h2>
    </>
  )
}

export default App
