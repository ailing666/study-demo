class Ap {
  constructor (value) {
    this.value = value
  }
  static of (value) {
    return new Ap(value)
  }
  ap (functor) {
    return Ap.of(this.value(functor.value))
  }
}
let A = Ap.of(x => x + 1)
let B = Ap.of(1)
let result = A.ap(B)
console.log(result.value)
