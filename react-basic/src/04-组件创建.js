import React from 'react'
// 创建组件，首字母大写，必须return一个jsx语法的结构,如果声明都不渲染需要返回null
function HelloComponent () {
  return (
    <div className="HelloComponent">HelloComponent</div>
  )
}

// 创建类组件继承自React.Component,首字母大写，必须return一个jsx语法的结构,如果声明都不渲染需要返回null
class HelloC extends React.Component {
  render () {
    return (
      [<div>HelloC</div>, <div>HelloC2</div>]
    )
  }
}
function App () {
  return (
    <div className="App">
      <HelloComponent></HelloComponent>
      <HelloC></HelloC>
    </div>
  )
}

export default App
