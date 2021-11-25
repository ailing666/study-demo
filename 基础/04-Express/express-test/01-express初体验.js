// 引入express
const express = require('express')

// 返回app
const app = express()

// get监听默认路径
app.get('/', (req, res, next) => {
  res.end("Hello Express Get")
})

// post默认监听路径
app.post('/', (req, res, next) => {
  res.end("Hello Express Post")
})

// 指定路径
app.post('/login', (req, res, next) => {
  res.end("Hello Express login")
})

// 开启监听
app.listen(8000, () => {
  console.log("express初体验服务器启动成功~")
})