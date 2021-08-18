const fs = require('fs');

fs.open("./abc.txt", (err, fd) => {
  if (err) {
    console.log('err', err);
    return;
  }

  console.log(fd);
  //  fd就是文件描述符，一旦获得了文件描述符，就可以通过任何方式执行所需的所有操作
  // 通过描述符去获取文件的信息
  fs.fstat(fd, (err, info) => {
    console.log(info);
  })
})

