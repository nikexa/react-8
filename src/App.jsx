import { useState } from 'react'
import './App.css'
import Organism from './Components/__Organism/Organism'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Organism />
    </>
  )
}

export default App
