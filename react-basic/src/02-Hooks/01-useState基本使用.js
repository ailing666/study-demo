// 导入useState
import { useState } from 'react'

function App () {
  // 参数：状态初始值。设置count初始值为0
  // 返回值：返回数组。state和修改状态的函数setCount
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}

export default App
