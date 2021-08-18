const path = require('path');
// // 1.获取路径的信息
// // const filepath = '/User/loveZero/abc.txt';

// // console.log(path.dirname(filepath)); // /User/loveZero
// // console.log(path.basename(filepath)); // abc.txt
// // console.log(path.extname(filepath)); // .txt

// // 2.join路径拼接
// const basepath = '../User/loveZero';
// const filename = './abc.txt';

// const filepath1 = path.join(basepath, filename);
// console.log(filepath1); // ..\User\loveZero\abc.txt


// // 3.resolve路径拼接
// // resolve会判断拼接的路径字符串中,是否有以/或./或../开头的路径
// const filepath2 = path.resolve(basepath, filename);
// console.log(filepath2); // c:\Users\loveZero\Desktop\my\User\loveZero\abc.txt
console.log(path.resolve())           // c:\Users\loveZero\Desktop\my\study-demo
console.log(path.resolve(''))         // c:\Users\loveZero\Desktop\my\study-demo
console.log(path.resolve(__dirname))  // c:\Users\loveZero\Desktop\my\study-demo\基础\02-内置模块\path
console.log(path.resolve('/img/books', '/net'))   // c:\net
console.log(path.resolve('img/books', '/net'))    // c:\net
console.log(path.resolve('img/books', './net'))   // c:\Users\loveZero\Desktop\my\study-demo\img\books\net
console.log(path.resolve('/img/books', './net'))   // c:\img\books\net
console.log(path.resolve('/img/books', 'net'))     // c:\img\books\net
console.log(path.resolve('/img/books', '../net'))         // c:\img\net
console.log(path.resolve('src', '/img/books', '../net'))   // c:\img\net
console.log(path.resolve('src', './img/books', '../net'))   // c:\Users\loveZero\Desktop\my\study-demo\src\img\net
console.log(path.resolve('src', 'img/books', '../net'))     // c:\Users\loveZero\Desktop\my\study-demo\src\img\net

// console.log(path.join())           // .
// console.log(path.join(''))         // .
// console.log(path.join(__dirname))  // c:\Users\v_llingai\Desktop\my\study-demo\基础\02-内置模块\path
// console.log(path.join('/img/books', '/net'))   // \img\books\net
// console.log(path.join('img/books', '/net'))    // img\books\net
// console.log(path.join('img/books', './net'))   // img\books\net
// console.log(path.join('/img/books', './net'))   // \img\books\net
// console.log(path.join('/img/books', 'net'))     // \img\books\net
// console.log(path.join('/img/books', '../net'))         // \img\net
// console.log(path.join('src', '/img/books', '../net'))   // src\img\net
// console.log(path.join('src', './img/books', '../net'))   // src\img\net
// console.log(path.join('src', 'img/books', '../net'))     // src\img\net


















