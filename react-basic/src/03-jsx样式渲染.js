import './app.css'
const divStyle = { color: 'blue', fontSize: '28px' }
function App () {
  return (
    <div className="App">
      <div style={{ color: 'red', fontSize: '28px' }}>行内样式</div>
      <div style={divStyle}>行内样式2</div>

      <div className="yellowText">类名样式</div>

      <div className={false ? "yellowText" : "greenText"}>动态类名控制</div>
    </div>
  )
}

export default App
