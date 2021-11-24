const http = require('http')

// http.get('http://localhost:8000', res => {
//   res.on('data', (data) => {
//     console.log(data.toString());
//   });
//   res.on('end', () => {
//     console.log("获取到了所有的结果");
//   })
// })

const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8000
}, (res) => {
  res.on('data', (data) => {
    console.log(data.toString());
  });

  res.on('end', () => {
    console.log("获取到了所有的结果");
  })
});

req.end();