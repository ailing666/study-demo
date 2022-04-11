import React from 'react'

function SonF (props) {
  return <div>
    <button onClick={() => props.appF('子组件数据')}>SonF</button>
  </div>
}

// 父组件
class App extends React.Component {
  appF = (sonMsg) => {
    console.log(sonMsg)
  }
  render () {
    return (
      <div>
        <SonF appF={this.appF}></SonF>
      </div>
    )
  }
}

export default App
