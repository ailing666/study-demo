const express = require('express')

const app = express()

// 普通中间件
app.use((req, res, next) => {
  next()
})
app.use('/home', (req, res, next) => {
  next()
})
// get监听默认路径
app.get('/', (req, res, next) => {
  res.end('get请求')
})

// post监听默认路径
app.post('/', (req, res, next) => {
  res.end('post请求')
})

app.post('/login', (req, res, next) => {
  res.end('post请求login')
})

app.get("/home", (req, res, next) => {
  console.log("home path and method middleware 02");
  next();
}, (req, res, next) => {
  console.log("home path and method middleware 03");
  next();
}, (req, res, next) => {
  console.log("home path and method middleware 04");
  res.end("home page");
});


app.listen(8000, () => {
  console.log('启动成功');
})