// 引入useContext
import React, { createContext, useContext, useState } from 'react'
// 调用createContext函数赋值给Context
const Context = createContext()
function SonC () {
  return (
    <>
      <div><SunC /></div>
    </>
  )
}
function SunC () {
  // 底层组件调用useContext，将Context作为参数传入，就可以获得顶层组件传来的value
  const count = useContext(Context)
  return (
    <div>孙组件使用App传来的数据: {count}</div>
  )
}
function App () {
  const [count, setCount] = useState(0)
  return (
    // Context.Provider包裹顶层组件，通过value传值
    <Context.Provider value={count}>
      <div>
        app
        <button onClick={() => setCount(count + 1)}>count+</button>
        <SonC />
      </div>
    </Context.Provider>
  )
}

export default App