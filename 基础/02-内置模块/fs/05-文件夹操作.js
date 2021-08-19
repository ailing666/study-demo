const fs = require('fs');
const path = require('path');

const dirname = './loveZero';
// 文件夹是否存在方式一
// fs.existsSync('./loveZero')

// 文件夹是否存在方式二
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


// 使用 fs.mkdir() 或 fs.mkdirSync() 可以创建新的文件夹。
// if (!fs.existsSync(dirname)) {
//   fs.mkdir(dirname, err => {
//     console.log(err);
//   });
// }

// 读取目录的内容
// const folderPath = '../fs'
// fs.readdir(folderPath, (err, files) => {
//   console.log(files);
// });
// console.log(fs.readdirSync(folderPath));
/*
[
  '01-获取文件状态.js',
  '02-文件描述符.js',
  '03-文件读取.js',
  '04-文件写入.js',
  '05-文件夹操作.js',
  'abc.txt',
  'loveZero'
]*/


// function getFiles(dirname) {
//   fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
//     for (let file of files) {
//       if (file.isDirectory()) {
//         const filepath = path.resolve(dirname, file.name);
//         getFiles(filepath);
//       } else {
//         console.log(file.name);
//       }
//     }
//   });
// }

// getFiles(dirname);

// 文件夹重命名
// fs.rename('./oldName', './newName', err => {
//   if (err) {
//     console.error(err)
//     return
//   }
// })
