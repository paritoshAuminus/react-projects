import React, { createContext } from 'react'

const user = {
    name: 'John',
    age: 32,
    work: 'software engineer',
    salary: 23665
}

export const userData = createContext();

function MyContext({children}) {
  return (
    <userData.Provider value={user}>
        {children}
    </userData.Provider>
  )
}

export default MyContext