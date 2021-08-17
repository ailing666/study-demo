const foo = require('./foo')
// console.log('bar---obj', foo.obj);
// console.log('bar---age', foo.ageAlias);
// foo.sayHello('loveZero')


// 验证
// 1
// console.log('bar---age', foo.age);
// setTimeout(() => {
//   console.log('bar---age', foo.age);
// }, 2000)

// 2
setTimeout(() => {
  foo.age = 99
}, 1000)