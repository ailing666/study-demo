import { useState } from 'react'

function computedCount (params) {
  let num = 0
  for (let i = 0; i < params; i++) {
    num += 2
  }
  return num
}
function Sonf (props) {
  const [count, setCount] = useState(() => {
    return computedCount(props.count)
  })
  return (
    <button onClick={() => setCount(count + 1)}>按钮{count}</button>
  )
}

function App () {
  return (
    <Sonf count={10} />
  )
}

export default App