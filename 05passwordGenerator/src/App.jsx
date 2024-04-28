import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook 
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str+= "0123456789"
    if (character) str += "`~!@#$%^&*()-_=+[{]}.?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, number, character, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 8)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator, length, number, character])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-lg text-center my-3 font-semibold tracking-wider'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
        <input type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3' 
        placeholder='Generated Password' 
        readOnly
        ref={passwordRef}/>

        <button onClick={copyPasswordToClipBoard} className='outline-none bg-green-800 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}} />
          
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={number}
          id='numberInput'
          onChange={() => {setNumber((prev) => !prev);}} />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={character}
          id='characterInput'
          onChange={() => {setCharacter((prev) => !prev);}} />
          <label htmlFor='characterInput'>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
