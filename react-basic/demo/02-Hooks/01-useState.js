// 导入useState
import { useState } from 'react'

function App () {
  /**
   * useState(0): 0是count的初始值
   * [count, setCount]是解构赋值：名字可以自定义，但是顺序不能变，第一个参数是数据状态，第二个参数是修改数据的方法
   * setCount函数：是用来修改count的方法，依旧不能直接修改原值，需要生成一个新的值替换原值
   * count和setCount是绑定在一起的，setCount只能用来修改count的值
   */
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([1, 2, 3, 4])
  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
      <button onClick={() => { setFlag(!flag) }}>{flag ? "true" : 'flase'}</button>
      <button onClick={() => { setList(list.filter(item => item > 2)) }}>{list}</button>
    </>
  )
}

export default App
