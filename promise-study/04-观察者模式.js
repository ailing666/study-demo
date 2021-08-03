// 被观察者
class Subject {
  constructor(name) {
    this.name = name
    // 观察者们
    this.observers = []
    // 状态
    this.state = '开心'
  }
  // 订阅模式
  attach(o) {
    this.observers.push(o)
  }
  // 改变状态
  setState(newState) {
    this.state = newState
    // 通知所有的观察者
    this.observers.forEach(o => o.update(newState))
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  // 接收被观察者的改变
  update(state) {
    console.log(`${this.name}:当前状态是${state}`);
  }
}
// 宝宝不开心了，会主动通知爸爸妈妈
const s = new Subject('宝宝')
const o1 = new Observer('爸爸');
const o2 = new Observer('妈妈');
// 添加观察者
s.attach(o1)
s.attach(o2)
// 改变状态
s.setState('不开心');
s.setState('开心');