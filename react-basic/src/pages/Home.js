import { useNavigate } from 'react-router-dom'
function Home () {
  const navigate = useNavigate()
  const toLogin = () => {
    navigate('/login/1001')
  }
  return (
    <div>Home
      <button onClick={toLogin}>去Login</button>
    </div>
  )
}

export default Home