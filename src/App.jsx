import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-yellow-500'>Vite + React</h1>
      <h2 className='text-red-400'>New project started</h2>
    </>
  )
}

export default App
