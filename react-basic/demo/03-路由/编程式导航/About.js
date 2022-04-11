// 引入 useSearchParams 钩子
import { useSearchParams } from 'react-router-dom'
function About () {
  // 调用 useSearchParams 函数，通过结构赋值拿到 params 对象
  const [params] = useSearchParams()
  // 调用 params 对象的 get 方法，将要获取的路由参数作为实参传入
  let id = params.get('id')
  let name = params.get('name')
  return (
    <div>About---{id}---{name}</div>
  )
}

export default About