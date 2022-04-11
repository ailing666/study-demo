import { useStore } from "./store/index"
import { observer } from 'mobx-react-lite'
function App () {
  // 解构出需要用的模块
  const { countStore, listStore } = useStore()
  return (
    <div>
      <div>{countStore.count}</div>
      <div>{listStore.list.join('-')}</div>
      <button onClick={countStore.addCount}>addCount</button>
      <button onClick={listStore.addList}>addList</button>
    </div>
  )
}
export default observer(App)
