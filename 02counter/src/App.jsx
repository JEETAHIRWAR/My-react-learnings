import { useState } from 'react'
import './App.css'

function App() {

let [value, setValue] = useState(0)


  // let value = 0

  const increaseValue = () => {
    value = value+1
    setValue(value)
    console.log(value)

    // document.querySelector('h2').textContent = `Value: ${value}`

  }

  const decreaseValue = () => {
    value = value-1
    setValue(value)
    console.log(value)

    // document.querySelector('h2').textContent = `Value: ${value}`
  }

  const resetValue = () => {
    value = 0
    setValue(value)

    // document.querySelector('h2').textContent = `Value: ${value}`
  }

  return (
    <>
    <h1>Number Counter</h1>

    <h2>Value: {value}</h2>

    <div>
    <button onClick={increaseValue}>Increase value</button>
    <button onClick={resetValue}>Reset value</button>
    <button onClick={decreaseValue}>Decrease value</button>
    </div>
    </>
  )
}

export default App
