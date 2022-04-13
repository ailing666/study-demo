import { Route, Routes } from 'react-router-dom'
import GeekLayout from '@/pages/Layout'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Publish from '@/pages/Publish'
import Article from '@/pages/Article'
import AuthRoute from '@/components/AuthRoute'
import { HistoryRouter, history } from './utils/history'
function App () {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={
          <AuthRoute><GeekLayout /></AuthRoute>
        }>

          <Route index element={<Home />}></Route>
          <Route path='/article' element={<Article />}></Route>
          <Route path='/publish' element={<Publish />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </HistoryRouter>
  )
}
export default App