import React, { Component } from 'react'

class DemoSon extends Component {
  constructor () {
    super()
    this.state = {
      current: 0
    }
  }
  render () {
    const { tabList } = this.props
    const { current } = this.state
    return (
      <div className='tab'>
        {tabList.map((item, index) => {
          return (
            <div
              className={index === current ? 'active' : ''}
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
      current: index
    })
  }
}

export default class Demo extends Component {
  constructor () {
    super()
    this.tabList = ['tab1', 'tab2', 'tab3']
  }
  render () {
    return <DemoSon tabList={this.tabList}></DemoSon>
  }
}
