import { useCallback, useEffect, useRef, useState } from 'react'

/*
useCallback is not for running so do not compare the dependencies of useCallback 
with useEffect. It only monitors the dependencies and whenever they change it optimizes
the program with 'memoization'.

We have decalred our function with the useCallback for the same exact reason, while our useEffect
handles everything happening with the re-render
*/

function App() {

  const [length, setLength] = useState(8)
  const [password, setPasswrod] = useState('')
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*(){}[]_-+=?`'

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPasswrod(pass)

  }, [length, numberAllowed, charAllowed, setPasswrod])

  const copyPasswordToClipboard = useCallback(() => {
    // to select the text visually (no logical importance)
    passwordRef.current?.select()
    // direct method
    window.navigator.clipboard.writeText(password)
  }, [password])
  

  /*
  useEffect on the other hand runs the given function inside the callback 
  (which is it's first parameter) and triggers that everytime anything changes
  with the given dependecies
  */
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const passwordRef = useRef(null)

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 bg-gray-700'>
        <h1 className='text-3xl text-white text-center mb-1'>Password generator</h1>
        <div className='bg-white rounded-xl flex'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 text-gray-600'
            placeholder='Password'
            readOnly
            ref={passwordRef} // this is password (element) reference for hook 
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 m-0.5 rounded-xl cursor-pointer'
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-orange-500'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              name='numberAllowed'
              id='numberAllowed'
              defaultChecked={numberAllowed}
              className='cursor-pointer'
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor='numberAllowed' className='text-white cursor-pointer'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              name='charAllowed'
              id='charAllowed'
              defaultChecked={charAllowed}
              className='cursor-pointer'
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor='charAllowed' className='text-white cursor-pointer'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
