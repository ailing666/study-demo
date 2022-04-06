import { useWindowScroll, useLocalStorage } from './hooks/hooks.js'

function App () {
  const [message, setMessage] = useLocalStorage('name', 'loveZero')
  setTimeout(() => {
    setMessage('小艾同学')
  }, 2000)
  return (
    <div style={{ height: '1000px' }}>{useWindowScroll()},{message}</div>
  )
}

export default App