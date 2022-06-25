import React, { useState } from 'react'

const App = (props) => {
  console.log({props})
  const [count, setCount] = useState(0)

  return (
    <div onClick={()=> setCount(count+10)} >
      <h1>SubApp</h1>
      This is a React Hooks Component.<br />
      Count <h2>Count is : {count}</h2>
      <div onClick={()=> props.onAdd(2)} ><h2>Sum : {props.sum}</h2></div>
    </div>
  )
}

export default App
