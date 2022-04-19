// import '@babel/polyfill'
// 箭头函数
window.sayHello = () => alert('hello')

// promise
new Promise((resolve) => {
  setTimeout(() => {
    alert('promise')
  }, 1000)
  resolve()
})