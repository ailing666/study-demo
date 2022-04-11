import { Outlet } from 'react-router-dom'
function Layout () {
  return (
    <div>Layout
      {/* 配置路由出口 */}
      <Outlet />
    </div>
  )
}

export default Layout