import { useState } from 'react'
import Skills from './modules/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Skills/> 
      </div>
  )
}

export default App
