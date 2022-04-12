import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/layout' element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App