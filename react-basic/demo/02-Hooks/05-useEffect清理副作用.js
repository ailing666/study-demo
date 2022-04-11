import { useEffect, useState } from 'react'

function Foo () {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('副作用函数执行了')
    }, 1000)
    // 添加清理副作用函数
    // 一旦组件被销毁，定时器也被清理
    return () => {
      clearInterval(timerId)
    }
  })
  return <div>Foo</div>
}
function App () {
  const [flag, setFlag] = useState(true)
  return (
    <>
      <button onClick={() => setFlag(false)}>click</button>
      {flag ? <Foo /> : null}
    </>
  )
}

export default App