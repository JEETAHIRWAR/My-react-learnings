import { useState } from 'react'

function App() {
  const [color, setColor] = useState("White")

  return (
    <>
      <div className="w-full h-screen duration-200 flex justify-center items-center"  style={{backgroundColor: color}}>
        <h3 className="text-3xl font-black subpixel-antialiased text-blue-950 " style={{fontFamily: 'Dancing Script, cursive'}}>Click these colors to change the Background</h3>
        <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl">
            <button className="outline-none px-5 py-2 rounded-lg bg-slate-950 text-white shadow-lg" onClick={() => setColor("black")}></button>
            <button className="outline-none px-5 py-2 rounded-lg bg-red-600 text-white shadow-lg" onClick={() => setColor("red")}></button>
            <button className="outline-none px-5 py-2 rounded-lg bg-blue-600 text-white shadow-lg" onClick={() => setColor("blue")}></button>
            <button className="outline-none px-5 py-2 rounded-lg bg-green-600 text-white shadow-lg" onClick={() => setColor("Green")}></button>
            <button className="outline-none px-5 py-2 rounded-lg bg-yellow-600 text-white shadow-lg" onClick={() => setColor("Yellow")}></button>
            <button className="outline-none px-5 py-2 rounded-lg bg-purple-600 text-white shadow-lg" onClick={() => setColor("Purple")}></button>
            <button className="outline-none px-5 py-2 rounded-lg bg-orange-600 text-white shadow-lg" onClick={() => setColor("Orange")}></button>
            <button className="outline-none px-5 py-2 rounded-lg bg-pink-600 text-white shadow-lg" onClick={() => setColor("Pink")}></button>
            <button className="outline-none px-5 py-2 rounded-lg bg-amber-900 text-white shadow-lg" onClick={() => setColor("saddlebrown")}></button>
            <button className="outline-none px-5 py-2 rounded-lg bg-gray-600 text-white shadow-lg" onClick={() => setColor("Gray")}></button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
