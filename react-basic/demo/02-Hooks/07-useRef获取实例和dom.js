import React, { useEffect, useRef } from 'react'


class SonC extends React.Component {
  state = {
    id: '1'
  }
  sayHi () {
    console.log('Hi~')
  }
  render () {
    return <div>SonC</div>
  }
}
function App () {
  const h1Ref = useRef(null)
  const SonCRef = useRef(null)
  useEffect(() => {
    // 可以获取到DOM元素
    console.log('%ch1Ref: ', 'color: #dd0083;', h1Ref.current)
    // SonCRef.current就是类组件的实例
    console.log('%cSonCRef: ', 'color: #ad4c9f;', SonCRef.current)
    SonCRef.current.sayHi()
  }, [])
  return (
    <div>
      <SonC ref={SonCRef} />
      <h1 ref={h1Ref}>h1</h1>
    </div>
  )
}

export default App