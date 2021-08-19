const EventEmitter = require("events");

// 创建发射器
const emitter = new EventEmitter();

function onClick(args) {
  console.log("click事件on监听", args);
}
emitter.on('click', onClick)

function addListenerClick(args) {
  console.log("click事件addListener监听", args);
}
emitter.addListener('click', addListenerClick)

emitter.on('input', (args) => {
  console.log(args);
})

// 获取监听事件名
console.log(emitter.eventNames()); // [ 'click', 'input' ]
// 获取click事件监听的次数
console.log(emitter.listenerCount("click")); // 2
// 获取click事件监听函数
console.log(emitter.listeners("click")); // [ [Function: onClick], [Function: addListenerClick] ]