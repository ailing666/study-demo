import React, { Component } from 'react'

function Sun (props) {
  return (
    <div>
      <h2>用户昵称: {props.nickname}</h2>
      <h2>用户等级: {props.level}</h2>
    </div>
  )
}

function Son (props) {
  return (
    <div>
      <Sun {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class Father extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nickname: 'loveZero',
      level: 99
    }
  }

  render () {
    return (
      <div>
        <Son {...this.state} />
      </div>
    )
  }
}
