import './App.css'
import React from 'react'
import Counter from './features/counter/Counter'
import UserDisplay from './features/userData/userDisplay'
import NewUserDisplay from './features/newUsers/newUserDisplay'

const App = () => {
  return (
    <>
      <h1>Welcome to redux App:</h1>
      <Counter />
      <UserDisplay />
      <NewUserDisplay />
    </>
  )
}

export default App