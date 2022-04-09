import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div onClick={()=> setCount(count+10)} >
      <h1>SubApp</h1>
      This is a React Hooks Component.<br />
      Count <h2>Count is : {count}</h2>
    </div>
  )
}

export default App
