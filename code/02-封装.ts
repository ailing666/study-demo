class Person {
  public name: string; // 公有属性，自己，自己的子类和其它类都可以访问
  protected age: number; // 受保护的属性自己自己的子类能访间，其它类不能访问
  private money: number; // 私有的，自己能访间，自己的子类和其它类都不能访问
  constructor(name, age, money) {
    this.name = name
    this.age = age
    this.money = money
  }
}

class Student extends Person {
  public num: number;
  constructor(name, age, money, num) {
    super(name, age, money)
    this.num = num
  }
  getName() {
    console.log('name', this.name);
  }
  getAge() {
    console.log('age', this.age);
  }
  getMoney() {
    // console.log('money', this.money); 私有属性无法访问
  }
}

let s1 = new Student('loveZero', 10, 100, 1)
console.log('name: ', s1.name);
s1.getName();
s1.getAge()
// console.log('age: ', s1.age); 值允许在内类和子类中访问
// console.log('age: ', s1.age);