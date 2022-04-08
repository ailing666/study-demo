// 引入 useNavigate 钩子
import { useNavigate } from 'react-router-dom'
function Login () {
  // 调用useNavigate赋值给navigate
  const navigate = useNavigate()
  const toAbout = () => {
    // navigate传入要跳转的路由
    navigate('/about?id=1001&name=loveZero')
    // replace: true：表示在导航时不会向 history 添加新记录
    // navigate('/about', { replace: true })
  }
  return (
    <div>
      Login
      <button onClick={toAbout}>跳转到about</button>
    </div>
  )
}

export default Login