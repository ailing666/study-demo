// 可以通过as 起别名
// import { nameAlias, age as ageAlias, sayHello } from './modules/bar.js';

// console.log(nameAlias);
// console.log(ageAlias);
// sayHello('hah')

// import * as bar from './modules/bar.js';
// console.log(bar.age);
// console.log(bar.nameAlias);
// bar.sayHello('???')
import { age } from './modules/foo.js'
console.log(age);
