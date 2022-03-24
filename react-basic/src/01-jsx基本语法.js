function sum (x, y) {
  return x + y
}

function App () {
  return (
    <div className="App">

      {/* 注释 */}
      React
      {/* 嵌入数据 */}
      <div>{'loveZero'}</div>
      <div>{18}</div>
      <div>{[1, 2, 'asdf', 'abc']}</div>
      {/* 不显示在页面中 */}
      <div>{true}</div>
      <div>{false}</div>
      <div>{null}</div>
      <div>{undefined}</div>


      {/* 不能嵌入对象 */}
      {/* <div>{{id: '007'}}</div> */}

      {/* 嵌入表达式 */}
      <div>{1 + 1}</div>
      <div>{true ? '真' : '假'}</div>

      {/* 函数调用 */}
      <div>{sum(6, 1)}</div>
    </div>
  )
}

export default App
