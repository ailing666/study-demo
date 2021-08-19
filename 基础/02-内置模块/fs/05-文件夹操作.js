const fs = require('fs');

const dirname = './loveZero';
// 方式一
// fs.existsSync('./loveZero')

// 方式二
// fs.access(dirname, fs.constants.F_OK, (err) => {
//   console.log(`${dirname} ${err ? '不存在' : '存在'}`);
// });

// // 检查文件是否可读。
// fs.access(dirname, fs.constants.R_OK, (err) => {
//   console.log(`${dirname} ${err ? '不可读' : '可读'}`);
// });

// // 检查文件是否可写。
// fs.access(dirname, fs.constants.W_OK, (err) => {
//   console.log(`${dirname} ${err ? '不可写' : '可写'}`);
// });

// // 检查文件是否存在于当前目录中、以及是否可写。
// fs.access(dirname, fs.constants.F_OK | fs.constants.W_OK, (err) => {
//   if (err) {
//     console.error(
//       `${dirname} ${err.code === 'ENOENT' ? '不存在' : '只可读'}`);
//   } else {
//     console.log(`${dirname} 存在，且可写`);
//   }
// });
