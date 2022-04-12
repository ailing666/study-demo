import './index.css'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/index'
function Task () {
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
          onChange={taskStore.allCheck}
        />
        <label htmlFor="toggle-all" ></label>
        <ul className="todo-list">
          {taskStore.list.map(item =>
            <li
              className={item.isDone ? "todo completed" : "todo"}
              key={item.id}
            >
              <div className="view">
                <input className="toggle" type="checkbox" checked={item.isDone} onChange={() => taskStore.setIsDone(item.id)} />
                <label >{item.name}</label>
                <button className="destroy" onClick={()=>taskStore.delItem(item.id)}></button>
              </div>
            </li>
          )}
        </ul>
      </section>
    </section>
  )
}

export default observer(Task)