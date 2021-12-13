import React, { Component } from 'react'

class NavBar extends Component {
  render () {
    const { leftSlot, centerSlot, rightSlot } = this.props

    return (
      <div className='nav-item nav-bar'>
        <div className='nav-left'>{leftSlot}</div>
        <div className='nav-item nav-center'>{centerSlot}</div>
        <div className='nav-item nav-right'>{rightSlot}</div>
      </div>
    )
  }
}

export default class Slot extends Component {
  render () {
    const leftJsx = <span>aaa</span>
    return (
      <div>
        <NavBar
          leftSlot={leftJsx}
          centerSlot={<strong>bbb</strong>}
          rightSlot={<a href='/#'>ccc</a>}
        />
      </div>
    )
  }
}
