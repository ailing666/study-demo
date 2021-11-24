# React

## 一、HelloReact

### 1.安装依赖

需要依赖3个包

+ react：包含react所必须的核心代码
+ react-dom：react渲染在不同平台所需要的核心代码
  + web端：react-dom会讲jsx最终渲染成真实的DOM，显示在浏览器中
  + native端：react-dom会讲jsx最终渲染成原生的控件（比如Android中的Button，iOS中的UIButton）
+ babel：将jsx转换成React代码的工具
  + 使用ES6来编写源码，之后通过Babel工具，将ES6转成大多数浏览器都支持的ES5的语法

**方式一：CDN引入**

  ```js
    <!-- 添加React的依赖 -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  
  ```

**方式二：下载后本地依赖**

**方式三：使用npm管理**

### 2.hello-react

**原生实现**

```html
  <h2 id="text"></h2>
  <button id="btn">改变文本</button>

  <script>
    // 命令式编程：每做一个操作都是给计算机一个命令
    // 1.定义数据
    let message = 'Hello World'

    // 2.将数据显示h2元素中
    const textEl = document.getElementById("text")
    text.innerText = message

    // 3.点击按钮，改变页面数据
    const btnEl = document.getElementById("btn")
    btnEl.addEventListener('click', () => {
      message = 'Hello React'
      textEl.innerText = message
    })

  </script>
  ```

**React实现**

1. 编写React的script代码中，必须添加 type="text/babel"，作用是可以让babel解析jsx语法
2. ReactDOM.render函数
   + 第一个参数是要渲染的内容，这个内容可以是HTML元素，也可以是React的组件
   + 第二个参数是将渲染的内容，挂载到哪一个HTML元素上

```html
  <div id="box">box</div>
  <!-- 添加React的依赖 -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <!-- babel -->
  <script type="text/babel">
    let msg = "Hello World";

    function btnClick() {
      msg = "Hello React";
      console.log(msg);
      render();
    }
    function render() {
      ReactDOM.render(
        <div>
          <h2>{msg}</h2>
          <button onClick={btnClick}>改变文本</button>
        </div>,
        document.getElementById("box")
      );
    }

    render();
  </script>
  ```

**组件化HelloReact**

1. 定义一个类继承自React.Component
2. 类中有一个render函数，返回jsx内容
3. 数据依赖
   1. 参与界面更新的数据（参与数据流）：当数据变量时，需要更新组件渲染的内容
      1. 定义在state对象中
      2. 当数据变化时需要调用`this.setState`来变更数据
   2. 不参与界面更新的数据：当数据变量时，不需要更新将组建渲染的内容
4. 事件绑定
   1. click触发时，this是undefined。因为React渲染的不是真实DOM,其中button实际上市react的Element对象，所以触发时this时undefined
   2. 解决：可以通过`bind`改变this指向

  ```html
    <script type="text/babel">
    // 封装组件
    class App extends React.Component {
      constructor() {
        super()
        this.state = {
          message: "HelloWorld"
        }
      }

      render() {
        return (
          <div>
            <h2>{this.state.message}</h2>
            <button onClick={this.btnClick.bind(this)}>改变文本</button>
          </div>
        )
      }

      btnClick() {
        // setState改变后，才会重新渲染
        this.setState({
          message: "HelloReact"
        })
      }
    }

    // 渲染组件
    ReactDOM.render(<App />, document.getElementById("app"))
  </script>
  ```

## 二、JSX语法

### 1.注释

`{/*注释*/}`

```jsx
      render() {
        return (
          <div>
            {/*注释*/}
          </div>
        )
      }
```

### 2.嵌入数据

```js
    class App extends React.Component {
      constructor() {
        super()
        this.state = {
          // 1.可以正常显示
          name: 'loveZero',// String
          age: 18,//Number
          list: [1, 2, 'asdf', 'abc'],//Array
          // 2.不显示
          test1: null,
          test2: undefined,
          bool: true,
          // 3.对象不能作为jsx的子类
          obj: {
            id: '007'
          }
        }
      }

      render() {
        return (
          <div>
            {/*可以正常显示*/}
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <h2>{this.state.list}</h2>
            {/*不显示*/}
            <h2>{this.state.test1}</h2>
            <h2>{this.state.test2}</h2>
            <h2>{this.state.bool}</h2>
            {/*可以通过转为字符串让其渲染*/}
            <h2>{this.state.test1 + ''}</h2>
            <h2>{this.state.test2 + ''}</h2>
            <h2>{this.state.bool.toString()}</h2>
            {/*对象不能作为jsx的子类*/}
            {/*<h2>{this.state.obj}</h2>*/}
          </div>
        )
      }
    }
  ```

### 3.嵌入表达式

```js
  {/*1.运算符表达式*/}
  <h2>{name + " " + age}</h2>
  <h2>{20 * 50}</h2>

  {/*2.三元表达式*/}
  <h2>{bool ? "真~" : "假~"}</h2>

  {/*3.进行函数调用*/}
  <h2>{this.addNum()}</h2>
```

### 4.绑定属性

```jsx
  <img src={imgUrl} />
  <a href={linkUrl}>百度</a>
  <label htmlFor=""></label>
```

### 5.绑定class

```jsx
  <div className="box">box1</div>
  {/*动态绑定class*/}
  <div className={"box " + (active && "active")}>box2</div>
```

### 6.绑定style

```jsx
  <div style={{ color: 'red', fontWeight: 700 }}>绑定style</div>
```

### 7.绑定事件

通过箭头函数来解决`this`指向

```jsx
    class App extends React.Component {
      constructor() {
        super()
        this.state = {
          list: ["大话西游", "海王", "流浪地球", "盗梦空间"]
        }
      }

      render() {
        const { list } = this.state
        return (
          <div>
            <ul>
              {
                list.map((item, index) => {
                  return (
                    <li className="li"
                      style={{ color: 'red' }}
                      onClick={e => { this.liClick(item, index, e) }}>
                      {item}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )
      }
      liClick(item, index, e) {
        console.log(this);
        console.log(item);
        console.log(index);
        console.log(e);
      }
    }
```
