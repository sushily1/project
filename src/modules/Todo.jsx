import React from 'react'

const Todo = () => {

  const name = "sushil";
  let x = 20;
  let y = 30

  function callfun() {
    alert("function call")
  }

  function sun(a,b){
    return a+b
  }
  
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1YruP3oTDAtK5cr2saDYNBnPyShekiIDaBIp7LT7LIg&s" alt='sg' className='photo' />
      <ul>
        <li>invent a traffice light</li>
        <li>invent a traffice light</li>
        <li>invent a traffice light</li>
      </ul>
      <h3>{name}</h3>
      <h3>{x + y}</h3>
      <button onClick={callfun}>Click Me</button>
    </div>
  )
}

export default Todo;
