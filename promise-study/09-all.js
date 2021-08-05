const myPromise3 = require('./myPromise3')
const fs = require('fs').promises

// 所有的任务都完成，才会进入成功
// 只要有一个失败，就走失败
// promise会按照顺序依次执行
myPromise3.all([fs.readFile('./promise-study/name.txt', 'utf8'), fs.readFile('./promise-study/age.txt', 'utf8'), 11]).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err)
})

