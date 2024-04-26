import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp() {
//   return (
//     <>
//       <h1>This Is A custom App!!</h1>
//     </>
//   )
// }


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>
//     Click me to visit Google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   'Click me to visit Google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // ReactElement

  // anotherElement

  // reactElement
)
