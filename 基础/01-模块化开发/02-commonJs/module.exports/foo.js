// let age = 18;
// const obj = { id: 757 };
// function sayHello(name) {
//   console.log("Hello " + name);
// }

// module.exports = {
//   ageAlias: age,
//   obj,
//   sayHello
// }


// console.log({} === {});
// console.log(exports === module.exports);


// let age = 100;

// console.log('module.exports', module.exports); // {}
// console.log('exports', exports); // {}

// exports.age = 200;

// exports = { name: 'loveZero' };

// console.log('module.exports', module.exports);  // { age: 200 }
// console.log('exports', exports); // { name: 'loveZero' }



let age = 100;

module.exports = { age }

module.exports = { name: 'loveZero' };

console.log('module.exports', module.exports);  // { name: 'loveZero' }
console.log('exports', exports); // {}