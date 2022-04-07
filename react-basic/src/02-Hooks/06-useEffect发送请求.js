import { useEffect } from 'react'

function App () {
  useEffect(() => {
    console.log(1)
    async function getData () {
      let res = await fetch('http://geek.itheima.net/v1_0/channels')
    }
    getData()
  }, [])
  return (
    <div>
      App
    </div>
  )
}

export default App