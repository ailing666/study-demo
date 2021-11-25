const path = require('path');

const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  // 指定文件存放路径,必须是已存在的文件夹
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  // 自定义文件名
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({
  storage
});

// upload.any()不要作为全局的中间件
app.post('/login', upload.any(), (req, res, next) => {
  console.log(req.body);
  res.end("用户登录成功~")
});

// upload.array:多文件上传,文件存储在req.files
// upload.single：单文件,we年存储在req.flie
// 参数是接口传进来的key
app.post('/upload', upload.single('file'), (req, res, next) => {
  console.log(req.file);
  res.end("文件上传成功~");
});

app.listen(8000, () => {
  console.log("form-data解析服务器启动成功~")
});
