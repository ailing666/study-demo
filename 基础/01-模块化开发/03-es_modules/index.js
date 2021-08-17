// 可以通过as 起别名
// import { nameAlias, age as ageAlias, sayHello } from './modules/bar.js';

// console.log(nameAlias);
// console.log(ageAlias);
// sayHello('hah')

import * as foo from './modules/bar.js';
console.log(foo.age);
console.log(foo.nameAlias);
foo.sayHello('???')