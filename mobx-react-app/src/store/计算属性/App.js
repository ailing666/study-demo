import countList from "./store/countList"
function App () {
  return (
    <div>
      <div>list： {countList.list.join('-')}</div>
      {/* 使用经过计算后的数组 */}
      <div>filterList： {countList.filterList.join('-')}</div>
    </div>
  )
}
export default App
