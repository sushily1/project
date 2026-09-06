import { useState } from 'react'
import Skills from './modules/Skills'
import Radio from './modules/radio'
import Show from './modules/Show'
import Clock from './modules/Clock'

function App() {
const [color,setcolor]=useState('green')

  return (
    <div>
      <h1>Degital Clock in react js</h1>
       <Clock color={color} />
      <select onChange={(event)=>setcolor(event.target.value)}>
        <option value={"red"}>red</option>
        <option value={"blue"}>blue</option>
        <option value={"green"}>green</option>
        <option value={"orange"}>orange</option>
      </select>
      <Skills />
      <Radio />
      <Show />
    </div>
  )
}

export default App
