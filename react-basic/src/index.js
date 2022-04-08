import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Context from './hooks/Context.js'
ReactDOM.render(
  <React.StrictMode>
    {/* 传递的静态值，只会在初始化时渲染 */}
    <Context.Provider value={100}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)