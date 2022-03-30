function btnClick (e) {
  // 阻止默认事件
  e.preventDefault()
  console.log('HelloF', e)
}
function HelloF () {
  return (
    <a href="http://www.baidu.com" onClick={btnClick}>HelloF</a>
  )
}

function App () {
  return (
    <div className="App">
      <HelloF></HelloF>
    </div>
  )
}

export default App
