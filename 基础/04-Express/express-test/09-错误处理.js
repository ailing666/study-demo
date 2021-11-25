const express = require('express')

const app = express()

const USERNAME_DOES_NOT_EXISTS = "USERNAME_DOES_NOT_EXISTS"
const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS"

app.post('/login', (req, res, next) => {
  const isLogin = false
  if (isLogin) {
    res.json("登陆成功")
  } else {
    next(new Error(USERNAME_DOES_NOT_EXISTS))
  }
})

app.post('/register', (req, res, next) => {
  const isExists = true
  if (!isExists) {
    res.json("注册成功")
  } else {
    next(new Error(USERNAME_ALREADY_EXISTS))
  }
})

app.use((err, req, res, next) => {
  let status = 400
  let message = ""
  console.log(err.message)

  switch (err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      status = 201
      message = "用户名不存在"
      break
    case USERNAME_ALREADY_EXISTS:
      status = 200
      message = "用户已存在"
      break
    default:
      message = "404 NOT FOUND"
  }

  res.status(status)

  res.json({
    errCode: status,
    errMessage: message
  })
})

app.listen(8000, () => {
  console.log("路由服务器启动成功~")
})
