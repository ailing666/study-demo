// export const name = "loveZero";
// export const age = 18;
// export const sayHello = function (name) {
//   console.log("你好" + name);
// }

// 第二种导出方式
const name = "loveZero";
const age = 18;
const sayHello = function (name) {
  console.log("你好" + name);
}
export {
  // 可以给导出的变量起别名，使用时也需要使用别名
  name as nameAlias,
  age,
  sayHello
}