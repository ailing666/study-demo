import React from 'react'

function btnClick () {
  console.log('HelloF')
}
function HelloF () {
  return (
    <button onClick={btnClick}>HelloF</button>
  )
}

class HelloC extends React.Component {
  btnClick = () => {
    console.log('HelloC')
  }
  render () {
    return (
      <button onClick={this.btnClick}>HelloC</button>
    )
  }
}
function App () {
  return (
    <div className="App">
      <HelloF></HelloF>
      <HelloC></HelloC>
    </div>
  )
}

export default App
