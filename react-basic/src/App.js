// 引入需要的组件
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// 引入路由跳转的组件
import Home from './pages/Home.js'
import About from './pages/About.js'
import Login from './pages/Login.js'

function App () {
  return (
    // BrowserRouter包裹整个根组件
    <BrowserRouter>
      {/* 用于指定导航链接，完成路由跳转，会渲染成a链接 */}
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Link to="/login">登录</Link>
      {/* 提供路由出口，满足条件的路由组件会渲染到组件内部，定义path和组件的对应关系 */}
      <Routes>
        {/* 用于指定导航链接，完成路由匹配 */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App