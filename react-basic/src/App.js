import React, { useContext } from 'react'
import Context from './hooks/Context.js'
function SonC () {
  return (
    <>
      <div><SunC /></div>
    </>
  )
}
function SunC () {
  const count = useContext(Context)
  return (
    <div>孙组件使用App传来的数据: {count}</div>
  )
}
function App () {
  return (
    <div>
      <SonC />
    </div>
  )
}

export default App