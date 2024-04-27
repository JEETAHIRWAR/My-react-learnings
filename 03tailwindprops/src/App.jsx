import './App.css'
import Card from './components/Card'

function App() {

  // let firstObj={
  //   username: "HelloJeet",
  //   age: 22,
  //   from: "Bhopal",
  //   // btnText: "hello jio"
  // }

  // let newArr=[1,2,3,4]

  return (
    <>
      
      <h1 className='bg-green-800 p-4 rounded-lg text-3xl font-bold mb-4'>Chala jata hu kisi ki dhun me</h1>
      <Card username="HelloBro" btnText="Click Here" />
      <Card username="Jeet Ahirwar" />
    </>
  )
}

export default App
