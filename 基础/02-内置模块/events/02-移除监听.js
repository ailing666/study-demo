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

setTimeout(() => {
  emitter.emit("click", "loveZero");
  // emitter.off("click", onClick);
  // emitter.off("click", addListenerClick);
  emitter.removeAllListeners('click')
  emitter.emit("click", "loveZero");
}, 1000);
