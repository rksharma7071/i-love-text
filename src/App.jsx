import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-4xl uppercase font-semibold'>I Love Text</h1> */}
      <Header/>
      <Outlet />
    </>
  )
}

export default App
