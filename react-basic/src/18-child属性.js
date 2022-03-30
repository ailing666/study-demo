import React from 'react'

function SonF ({ children }) {
  // children()
  return (
    <div>{children}</div>
  )
}
class App extends React.Component {
  render () {
    return (
      <SonF>
        {/* {() => console.log(1)} */}
        <div>
          <p>ss</p>
        </div>
      </SonF>
    )
  }
}

export default App