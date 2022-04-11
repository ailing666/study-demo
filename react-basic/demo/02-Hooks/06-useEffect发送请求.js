import { useEffect } from 'react'

function App () {
  useEffect(() => {
    console.log(1)
    async function getData () {
      let res = await fetch('url')
      console.log('%cres: ', 'color: #38662e;', res)
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