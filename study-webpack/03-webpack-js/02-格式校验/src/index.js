// import '@babel/polyfill'
// 箭头函数
// eslint-disable-next-line
window.sayHello = () => alert('hello')

// promise
const p = new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line
    alert('promise');
  }, 1000);
  resolve();
});
console.log(p);
