class Animal {
  constructor (name) {
    this.name = name
  }
  eat (food) {
    console.log(`${this.name} eat ${food}`)
  }
}

class Dog extends Animal {
  constructor () {
    super('狗')
  }
  speak () {
    console.log('汪汪汪')
  }
}
let animal = new Animal('小猪')
let dog = new Dog()
animal.eat('食物')
dog.eat('骨头')
dog.speak()
