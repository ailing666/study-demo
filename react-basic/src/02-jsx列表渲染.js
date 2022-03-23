const list = [
  {
    name: 'loveZero',
    id: 88
  },
  {
    name: '小艾同学',
    id: 199
  }
]

function App() {
  return (
    <div className="App">
      {/* 条件渲染 */}
      <ul>
        {
          list.map(item => <li key={item.id}> {item.name} </li>)
        }
      </ul>
    </div>
  );
}

export default App;
