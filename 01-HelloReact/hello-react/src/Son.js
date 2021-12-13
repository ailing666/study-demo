import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 类组件
class ChildCpn extends Component {
  // es6中的class fields写法
  // static propTypes = {
  //   // 字符串类型，必填
  //   name: PropTypes.string.isRequired,
  //   age: PropTypes.number,
  //   height: PropTypes.string
  // }

  // static defaultProps = {
  //   name: 'loveZero',
  //   age: 18,
  //   height: '1.58'
  // }

  render () {
    // 通过this.props拿到父组件传来的数据
    const { name, age, height } = this.props
    return <h2>子组件展示数据: {name + ' ' + age + ' ' + height}</h2>
  }
}

// 属性验证:写法一
ChildCpn.propTypes = {
  // 字符串类型，必填
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.string
}

// 默认值
ChildCpn.defaultProps = {
  name: 'loveZero',
  age: 18,
  height: '1.58'
}
// 函数组件
function ChildFun (props) {
  const { name, age, height } = props
  return <h2>子组件展示数据: {name + ' ' + age + ' ' + height}</h2>
}

class CounterButton extends Component {
  render () {
    const { onClick } = this.props
    return <button onClick={onClick}>+1</button>
  }
}

// 父组件
export default class Son extends Component {
  constructor () {
    super()
    this.state = {
      num: 0
    }
  }
  render () {
    return (
      <div>
        <ChildCpn name='loveZero' age={18} height='1.58' />
        <ChildCpn name='千玺' age={20} height='1.78' />
        <ChildCpn />
        <ChildFun name='loveZero' age='18' height='1.58' />
        <ChildFun name='千玺' age='20' height='1.78' />
        <button
          onClick={e => {
            this.numClick()
          }}
        >
          +
        </button>
        <h2>{this.state.num}</h2>
        <CounterButton
          onClick={e => {
            this.numClick()
          }}
        />
      </div>
    )
  }
  numClick () {
    this.setState({
      num: this.state.num + 1
    })
  }
}
