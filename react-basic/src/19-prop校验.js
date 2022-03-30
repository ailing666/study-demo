import React from 'react'
import PropTypes from 'prop-types'

function SonF () {
  return (
    <div></div>
  )

}
SonF.propTypes = {
  // 必填
  list: PropTypes.array.isRequired,
  // 必须是函数
  handle: PropTypes.func,
  // 必须是特定结构
  obj: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalElement: PropTypes.element,
  })
}

const styleObj = { color: 1, fontSize: 2 }
class App extends React.Component {
  handle = () => console.log(1)
  render () {
    return (
      <SonF list={[1, 2, 3, 4]} handle={this.handle} obj={styleObj}></SonF >
    )
  }
}

export default App