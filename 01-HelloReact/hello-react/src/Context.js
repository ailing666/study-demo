import React, { Component } from 'react'
// 创建Context对象
const UserContext = React.createContext({
  nickname: 'aaaa',
  level: -1
})

class Sun extends Component {
  render () {
    console.log(this.context)
    return (
      <div>
        <h2>用户昵称: {this.context.nickname}</h2>
        <h2>用户等级: {this.context.level}</h2>
      </div>
    )
  }
}
Sun.contextType = UserContext

function Sun2 () {
  return (
    <UserContext.Consumer>
      {value => {
        return (
          <div>
            <h2>用户昵称:{value.nickname} </h2>
            <h2>用户等级:{value.level} </h2>
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}

class Son extends Component {
  render () {
    return (
      <div>
        <Sun />
        <Sun2 />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
        </ul>
      </div>
    )
  }
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
        <UserContext.Provider value={this.state}>
          <Son />
        </UserContext.Provider>
      </div>
    )
  }
}
