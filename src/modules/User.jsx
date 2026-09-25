import React, { useState } from 'react'
import Todo from './Todo'

const User = () => {
    const [counter,setCounter]=useState(0)
    const [rCounter,setRCounter]=useState(10)
  return (
    <div>
      <h1>Counter Val:{counter}</h1>
      <h1>R counter:{rCounter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increase Counter Val</button>
      <button onClick={()=>setRCounter(rCounter-1)}>Update r counter</button>
      <Todo/>
    </div>
  )
}

export default User;
