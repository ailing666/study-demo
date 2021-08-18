// 可以通过as 起别名
// import { nameAlias, age as ageAlias, sayHello } from './modules/bar.js';

// console.log(nameAlias);
// console.log(ageAlias);
// sayHello('hah')

// import * as bar from './modules/bar.js';
// console.log(bar.age);
// console.log(bar.nameAlias);
// bar.sayHello('???')


// import { age } from './modules/foo.js'
// console.log(age);


// import fun from './modules/fun.js'
// fun()

if (true) {
  // import { age } from './modules/bar.js';
  // console.log(age);

  import('./modules/bar.js')
    .then(res => {
      console.log("在then中的打印");
      console.log(res.age);
    })
    .catch(err => {
      console.log(err);
    })
}

