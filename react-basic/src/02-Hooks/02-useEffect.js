// 导入useEffect
import { useState, useEffect } from 'react'

function App () {
  const [count, setCount] = useState(0)
  // 调用useEffect并传入回调函数
  useEffect(() => {
    console.log('处理副作用函数')
    document.title = count
  })
  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
    </>
  )
}

export default App