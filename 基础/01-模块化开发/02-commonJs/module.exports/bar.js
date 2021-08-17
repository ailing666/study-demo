// const foo = require('./foo')
// console.log('bar---obj', foo.obj);
// console.log('bar---age', foo.ageAlias);
// foo.sayHello('loveZero')


// const foo = require('./foo');
// console.log('foo', foo) // { age: 200 }

// const foo = require('./foo');
// console.log('foo', foo) // { name: 'loveZero' }


var exports = module.exports = {}

// module.exports = { id: 2 }
exports = { id: 2 }
console.log('exports', exports);
console.log('module.exports', module.exports);