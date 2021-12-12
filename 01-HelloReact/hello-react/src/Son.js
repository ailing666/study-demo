import React, { Component } from 'react'

// 类组件
class ChildCpn extends Component {
  componentDidMount () {
    console.log(this.props, 'componentDidMount')
  }

  render () {
    // 通过this.props拿到父组件传来的数据
    const { name, age, height } = this.props
    return <h2>子组件展示数据: {name + ' ' + age + ' ' + height}</h2>
  }
}

// 函数组件
function ChildFun (props) {
  const { name, age, height } = props
  return <h2>子组件展示数据: {name + ' ' + age + ' ' + height}</h2>
}

// 父组件
export default class Son extends Component {
  render () {
    return (
      <div>
        <ChildCpn name='loveZero' age='18' height='1.58' />
        <ChildCpn name='千玺' age='20' height='1.78' />
        <ChildFun name='loveZero' age='18' height='1.58' />
        <ChildFun name='千玺' age='20' height='1.78' />
      </div>
    )
  }
}
