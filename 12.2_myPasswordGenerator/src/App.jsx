import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*(){}[]_-+=?`'

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, setPassword])



  return (
    <>
      {/* Upper section */}
      <div className="w-full max-w-lg p-5 bg-gray-700 mx-auto my-12 rounded-md text-orange-600 text-xl flex flex-col gap-3">
        <div className="flex bg-white rounded-xl">
          <input type="text"
            className="w-full h-full bg-white rounded-md p-3 outline-none"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="text-white bg-blue-600 px-2 py-1 rounded-e-xl cursor-pointer">Copy</button>
        </div>
        {/* lower section */}
        <div className="flex gap-2">
          {/* length */}
          <div className="flex gap-3">
            <input
              type="range"
              id="Number"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="text-sm text-orange-300">Length: {length}</span>
          </div>
          {/* Number */}
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="numberAllowed"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberAllowed" className="text-white text-sm">Number</label>
            {/* Characters */}
            <input
              type="checkbox"
              id="charAllowed"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="charAllowed" className="text-white text-sm">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
