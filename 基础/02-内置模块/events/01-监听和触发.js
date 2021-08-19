const EventEmitter = require("events");

// 创建发射器
const emitter = new EventEmitter();

// 监听某一个事件
// addListener是on的alias简写
emitter.on('click', (args) => {
  console.log("click事件on监听", args);
})

emitter.addListener('click', (args) => {
  console.log("click事件addListener监听", args);
})

setTimeout(() => {
  emitter.emit("click", "loveZero");
}, 1000);
