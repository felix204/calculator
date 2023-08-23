import { useState } from 'react'
import CalcForm from './components/CalcForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CalcForm />
    </div>
  )
}

export default App
