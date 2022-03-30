import React from 'react'

function SonF (props) {
  return <div>
    <button onClick={props.appF}>SonF</button>{props.childJsx}
  </div>
}

// 父组件
class App extends React.Component {
  appF = () => {
    console.log(1)
  }
  render () {
    return (
      <div>
        <SonF appF={this.appF} childJsx={<h2>父组件jsx</h2>}></SonF>
      </div>
    )
  }
}

export default App
