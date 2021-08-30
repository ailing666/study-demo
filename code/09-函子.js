// 如果一个对象内部能够持有一个值，就可以称为容器
class Container {
  constructor (value) {
    this.value = value
  }
}
let container = new Container(1)
console.log('container: ', container.value)

// 如果一个容器里面有of方法，就称它为有指向容器
class PointedContainer {
  constructor (value) {
    this.value = value
  }
  // 函数式编程尽可能不要new，写一个of方法返回想要的实例
  static of (value) {
    return new PointedContainer(value)
  }
}

let pointedContainer = PointedContainer.of(1)
console.log('pointedContainer: ', pointedContainer.value)

// 函子
class Functor {
  constructor (value) {
    this.value = value
  }
  // 函数式编程尽可能不要new，写一个of方法返回想要的实例
  static of (value) {
    return new Functor(value)
  }
  // 接收一个函数，返回值还是一个同类型的对象
  // 可以把老的实例映射为新的实例
  // 提供map方法，接入各种运算逻辑，从而引起值的变化
  map (fn) {
    return new Functor(fn(this.value))
  }
}

let functor = Functor.of(1)
  .map(x => x + 1)
  .map(x => x + 2)
  .map(x => x + 3)
  .map(x => x + 4)
console.log('functor: ', functor.value)
