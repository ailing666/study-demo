import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Article from './Article'
import Home from './Home'
import Board from './Board'
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/layout" element={<Layout />}>
          {/* 嵌套二级路由 */}
          <Route path="board" element={<Board />}></Route>
          {/* 设置为默认的二级路由 */}
          {/* <Route index element={<Board />}></Route> */}
          <Route path="article" element={<Article />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App