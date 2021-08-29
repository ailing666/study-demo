function init () {
  let name = 'hello' // name 是一个被 init 创建的局部变量
  // displayName() 是内部函数，一个闭包
  function displayName () {
    console.log(name) // 使用了父函数中声明的变量
  }
  displayName()
}
init()
