import { useState } from 'react'
import Skills from './modules/Skills'
import Radio from './modules/radio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Skills/> 
      <Radio/>
      </div>
  )
}

export default App
