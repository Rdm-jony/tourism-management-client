import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Common/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-belleza'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
