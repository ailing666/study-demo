const path = require('path');
// 1.获取路径的信息
const filepath = '/User/loveZero/abc.txt';

console.log(path.dirname(filepath)); // /User/loveZero
console.log(path.basename(filepath)); // abc.txt
console.log(path.extname(filepath)); // .txt

