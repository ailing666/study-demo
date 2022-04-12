import './index.css'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/index'
import { useState } from 'react'
import uuid from 'react-uuid'
function Task () {
  const [taskValue, setTaskValue] = useState('')
  const { taskStore } = useStore()
  // 添加项
  const addTodo = () => {
    taskStore.addTodo({
      id: uuid(),
      name: taskValue,
      isDone: false
    })
  }

  // 键盘弹起事件
  const keyUpHandler = (e) => {
    if (e.keyCode === 13) {
      addTodo()
      setTaskValue('')
    }
  }

  // 改变input值
  const changeValue = (e) => setTaskValue(e.target.value)
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          value={taskValue}
          placeholder="What needs to be done?"
          onKeyUp={keyUpHandler}
          onChange={changeValue}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={taskStore.allCheck}
          checked={taskStore.isAll}
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
                <button className="destroy" onClick={() => taskStore.delItem(item.id)}></button>
              </div>
            </li>
          )}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          任务总数: {taskStore.list.length} 已完成: {taskStore.isFinished}
        </span>
      </footer>
    </section>
  )
}

export default observer(Task)