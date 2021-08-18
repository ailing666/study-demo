const fs = require('fs');
// 1.方式一: 同步操作
// const info = fs.statSync('./abc.txt');
// console.log(info);
// console.log("后续需要执行的代码");
/**
 Stats {
  dev: 3728757869,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 8725724278139394,
  size: 3,
  blocks: 0,
  atimeMs: 1629275163060.15,
  mtimeMs: 1629275163060.15,
  ctimeMs: 1629275163060.15,
  birthtimeMs: 1629275160923.6409,
  atime: 2021-08-18T08:26:03.060Z,
  mtime: 2021-08-18T08:26:03.060Z,
  ctime: 2021-08-18T08:26:03.060Z,
  birthtime: 2021-08-18T08:26:00.924Z
 }
 */

// 2.方式二: 异步操作
// fs.stat('./abc.txt', (err, info) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(info);
//   // 判断是否是文件
//   console.log(info.isFile());
//   // 判断是否是文件夹
//   console.log(info.isDirectory());
// });
// console.log("后续需要执行的代码");

// 3.promise
fs.promises.stat('./abc.txt').then(info => {
  console.log(info);
}).catch(err => {
  console.log(err);
});
console.log("后续需要执行的代码");