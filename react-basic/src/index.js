// react: react框架的核心代码
import React from 'react';
// react-dom： 完成渲染挂载的核心代码
import ReactDOM from 'react-dom';
// 根组件
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);