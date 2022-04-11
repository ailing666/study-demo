// 1. 导入 countStore 实例
import countStore from './store/count'
// 4. 导入 observer 钩子
import { observer } from "mobx-react-lite"
function App () {
  return (
    <div>
      {/* 2. 使用 countStore 中的数据 */}
      {countStore.count}
      {/* 3. 调用 countStore 中的方法修改数据 */}
      <button onClick={countStore.addCount}>+</button>
    </div>
  )
}

// 5. 使用 observer 包裹 App 组件使组件视图响应式变化
export default observer(App)
