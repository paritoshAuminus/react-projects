import React, { useContext } from 'react'
import { userData } from '../hooks/MyContext'

const ContextUser = () => {

    const user = useContext(userData)

  return (
    <>
        <div>Name: {user.name}</div>
        <div>Name: {user.age}</div>
        <div>Name: {user.work}</div>
        <div>Name: {user.salary}</div>
    </>
  )
}

export default ContextUser