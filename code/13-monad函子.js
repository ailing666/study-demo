// 函子
class Functor {
  constructor (value) {
    this.value = value
  }
  static of (value) {
    return new Functor(value)
  }
  map (fn) {
    return new Functor(fn(this.value))
  }
}

// 如果fn的返回值是一个函子，那么会 一层一层嵌套
let functor = Functor.of(1)
  .map(x => Functor.of(x + 1))
  .map(x => Functor.of(x + 2))
  .map(x => Functor.of(x + 3))
  .map(x => Functor.of(x + 4))
console.log('functor: ', functor) // Functor { value: Functor { value: '[object Object]4' } }

// 函子
class Monad {
  constructor (value) {
    this.value = value
  }
  static of (value) {
    return new Monad(value)
  }
  map (fn) {
    return new Monad(fn(this.value))
  }
  join () {
    return this.value
  }
  flatMap (fn) {
    return this.map(fn).join()
  }
}

// 如果fn的返回值是一个函子，那么会 一层一层嵌套
let monad = Monad.of(1)
  .flatMap(x => Monad.of(x + 1))
  .flatMap(x => Monad.of(x + 2))
  .flatMap(x => Monad.of(x + 3))
  .flatMap(x => Monad.of(x + 4))
console.log('monad: ', monad) // Monad { value: 11 }
