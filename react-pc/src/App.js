import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from '@/pages/Login'
import AuthRoute from '@/components/AuthRoute'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/layout' element={
          <AuthRoute><Layout /></AuthRoute>
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App