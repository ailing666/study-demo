import React, { Component } from 'react'

class DemoSon extends Component {
  constructor () {
    super()
    this.state = {
      currentIndex: 0
    }
  }
  render () {
    const { tabList } = this.props
    const { currentIndex } = this.state
    return (
      <div className='tab'>
        {tabList.map((item, index) => {
          return (
            <div
              className={index === currentIndex ? 'active' : ''}
              onClick={e => this.tabClick(index)}
              key={item}
            >
              {item}
            </div>
          )
        })}
      </div>
    )
  }
  tabClick (index) {
    this.setState({
      currentIndex: index
    })
    // 接收父组件的onClick
    const { onClick } = this.props
    // 调用onClick并传入index
    onClick(index)
  }
}

export default class Demo extends Component {
  constructor () {
    super()
    this.tabList = ['tab1', 'tab2', 'tab3']
    this.state = {
      currentTitle: 'tab1'
    }
  }
  render () {
    return (
      <div>
        <DemoSon
          onClick={index => this.tabClick(index)}
          tabList={this.tabList}
        ></DemoSon>
        <h2>{this.state.currentTitle}</h2>
      </div>
    )
  }
  tabClick (index) {
    this.setState({
      currentTitle: this.tabList[index]
    })
  }
}
