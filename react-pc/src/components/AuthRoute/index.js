// 路由鉴权组件
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'
const AuthRoute = ({ children }) => {
  // 获取token
  const token = getToken()
  return (
    // token存在则渲染组件，否则就重定向到login页
    token ? <>{children}</> : <Navigate to="/" replace />
  )
}
export default AuthRoute