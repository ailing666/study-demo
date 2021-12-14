# setState

## 一、为什么使用 setState

1.因为直接修改 state 的值 React 并不知道数据发生了变化，必须通过 setState 来告知 React 数据已发生变化
2.setState 方法是从 Component 中继承过来的
![为什么使用 setState](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/16394936635791639493663574.png)

## 二、setState 时候异步还是同步

- 在组件生命周期或 React 合成事件中，setState 是异步；
- 在 setTimeout 或者原生 dom 事件中，setState 是同步；

### 1.异步

通过 setState 改变数据后打印该数据，发现页面数据发生了改变，但打印的仍然是改变之前的数据，可见 setState 是异步的操作，我们并不能在执行完 setState 之后立马拿到最新的 state 的结果

```js
import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: 'Hello World'
    }
  }

  render () {
    return (
      <div>
        <h2>当前计数: {this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText () {
    this.setState({
      message: '你好'
    })
    console.log(this.state.message)
  }
}
```

![异步](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/16394938250681639493825066.png)

#### 1.1 为什么是异步？

**提升性能**

- 如果每次调用 setState 都进行一次更新，那么 render 函数会被频繁调用，界面重新渲染，这样效率非常低，最好的办法应该是获取到多个更新，之后进行批量更新
- 如果同步更新了 state，但是还没有执行 render 函数，那么 state 和 props 不能保持同步

#### 1.2 如何拿到异步 setState 结果

方法一：setState 第二个参数传入回调函数，这个回调函数会在更新后会执行

```js
  changeText () {
    this.setState(
      {
        message: '你好'
      },
      e => {
        console.log(this.state.message)
      }
    )
  }
```

方法二：componentDidUpdate 生命周期中获取

```js
  componentDidUpdate () {
    // 方式二: 获取异步更新的state
    console.log(this.state.message)
  }
```

### 2.同步

#### 2.1 将 setState 放入到定时器中

```js
 changeText () {
    setTimeout(() => {
      this.setState({
        message: '你好'
      })
      console.log(this.state.message)
    }, 0)
  }
```

#### 2.2 原生事件中

```js
  render () {
    return (
      <div>
        <button id='btn'>改变文本</button>
      </div>
    )
  }

  componentDidMount () {
    document.getElementById('btn').addEventListener('click', e => {
      this.setState({/
        message: '你好'
      })
      console.log(this.state.message)
    })
  }
```
