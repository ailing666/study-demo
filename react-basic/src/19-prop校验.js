import React from 'react'
import PropTypes from 'prop-types'

function SonF ({ list }) {
  return (
    <div>{list.map(item => <li key={item}>{item}</li>)}</div>
  )

}
SonF.propTypes = {
  list: PropTypes.array
}

class App extends React.Component {
  render () {
    return (
      <SonF list={1}></SonF>
      // <SonF list={[1, 2, 3, 4]}></SonF>
    )
  }
}

export default App