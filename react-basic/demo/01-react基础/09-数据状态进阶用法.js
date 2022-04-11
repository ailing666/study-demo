import React from 'react'
class HelloC extends React.Component {
  // 定义组件状态
  state = {
    count: 1,
    name: '小艾同学',
    list: [1, 2, 3, 4],
    list2: [1, 2, 3, 4],
    person: {
      name: '张三',
      age: 18,
      hobby: '打篮球'
    }
  }
  btnClick = () => {
    // 必须使用setState方法修改状态
    this.setState({
      // number修改，不可使用自增自减
      count: this.state.count + 1,
      name: 'loveZero',
      // 数组增加
      list: [...this.state.list, 5],
      // 数组删除
      list2: this.state.list2.filter(item => item !== 3),
      // 对象修改
      person: {
        ...this.state.person,
        age: 40
      }
    })
  }
  render () {
    return (
      <>
        <button onClick={this.btnClick}>点击修改</button>
        {this.state.name}---{this.state.count}---{this.state.person.name}---{this.state.person.age}
        <ul>{this.state.list.map((item, index) => <li key={index}>{item}</li>)}</ul>
        <ul>{this.state.list2.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </>
    )
  }
}
function App () {
  return (
    <div className="App">
      <HelloC></HelloC>
    </div>
  )
}

export default App
