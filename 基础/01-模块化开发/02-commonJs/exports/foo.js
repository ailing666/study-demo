// let age = 18;
// const obj = { id: 757 };
// function sayHello(name) {
//   console.log("Hello " + name);
// }

// // 挂载到对象可以使用别名
// exports.ageAlias = age
// exports.obj = obj
// exports.sayHello = sayHello


// 验证
// 1
// let age = 18;

// setTimeout(() => {
//   exports.age = 23;
// }, 1000)

// exports.age = age

// 2
let age = 18;

setTimeout(() => {
  console.log('foo---age', exports.age);
}, 2000)

exports.age = age