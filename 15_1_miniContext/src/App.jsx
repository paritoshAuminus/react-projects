import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <>
      <div>
        <h1>React Context</h1>
        <Login />
        {' '}
        <Profile />
      </div>
    </>
  )
}

export default App