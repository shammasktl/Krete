import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Navbar />
      <Header />
    </div>
    </>
  )
}

export default App
