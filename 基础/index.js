// 服务端全局变量原则是是global， 但是node在执行的时候为了实现模块化，会在执行代码时，外部包装一个函数，这个函数在执行的时候 会改变this指向
// console.log(this); // {}
// console.log(global); // 浏览器中是window  setImmediate 这个是node自己实现
// 可以直接访问这些变量
// process  __filename, __dirname, exports ,module  ,require (这5个变量都是函数的参数)
// console.log(process);
// console.log(__filename);
// console.log(__dirname);
// console.log(exports);
// console.log(module);
// console.log(require);
// console.log(Object.keys(process));
// console.log(process.platform); // 识别系统
// console.log(process.cwd()); // c:\Users\loveZero\Desktop\my\study-demo
// 在执行命令的时候（添加的变量） 可以去读取环境变量中的属性
// console.log(process.env);
// windows下 可以使用 set 命令来设置  mac export


// 执行命令时所带的参数 1.代表的是可执行node.exe 2.执行的是哪个文件
console.log(process.argv);
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'c:\\Users\\loveZero\\Desktop\\my\\study-demo\\基础\\node.js'
// ]

// commander 命令行管家，第三方模块用的时候需要下载 

var a =0
var b = 1
var c = 2
var d = 4
[0,1] = [2,4]
console.log(a);
console.log(b);
console.log(c);
console.log(d);