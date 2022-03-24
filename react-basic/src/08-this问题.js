import React from 'react'
class HelloC extends React.Component {
  constructor() {
    super()
    this.btnClick = this.btnClick.bind(this)
  }
  btnClick () {
    console.log(this)
  }
  render () {
    return (
      <div>
        <button onClick={this.btnClick}>this</button>
      </div>
    )
  }
}
function App () {
  return (
    <div className="App">
      <HelloC></HelloC>
    </div>
  )
}

export default App
