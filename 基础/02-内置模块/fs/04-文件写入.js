const fs = require('fs')

const content = '一些内容'

// fs.writeFile('./abc.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.error('文件写入成功')
// })

// fs.writeFile('./abc.txt', content, { flag: 'a+' }, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.error('文件写入成功')
// })

fs.appendFile('./abc.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.error('文件写入成功')
})