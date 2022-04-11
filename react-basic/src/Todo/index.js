import './index.css'
import { useStore } from '../store/index'
function Task () {
  // taskStore
  const { taskStore } = useStore()
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {taskStore.list.map(item =>
            <li
              className="todo completed"
              key={item.id}
            >
              <div className="view">
                <input className="toggle" type="checkbox" defaultChecked={item.isDone} />
                <label >{item.name}</label>
                <button className="destroy"></button>
              </div>
            </li>
          )}
          {/* 列表 completed控制是否完成*/}
        </ul>
      </section>
    </section>
  )
}

export default Task