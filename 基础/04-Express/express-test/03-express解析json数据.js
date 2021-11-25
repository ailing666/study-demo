const express = require('express')

const app = express()

// 使用express提供的body解析
app.use(express.json())
// extended
// true: 使用qs解析urlencoded
// false: 使用querystring解析urlencoded
app.use(express.urlencoded({ extended: true }))

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end("请求成功")
})

app.listen(8000, () => {
  console.log("express初体验服务器启动成功~")
})
