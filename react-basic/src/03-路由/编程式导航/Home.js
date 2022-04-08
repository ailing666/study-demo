import { useNavigate } from 'react-router-dom'
function Home () {
  const navigate = useNavigate()
  const toLogin = () => {
    // 直接在path后面加参数
    navigate('/login/1001')
  }
  return (
    <div>Home
      <button onClick={toLogin}>去Login</button>
    </div>
  )
}

export default Home