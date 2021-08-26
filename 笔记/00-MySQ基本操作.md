
# MySQL

## 一、简介

MySQL是一个关系型数据库，其实本质上就是一款软件、一个程序

+ 管理着多个数据库；
+ 每个数据库中可以有多张表；
+ 每个表中可以有多条数据；

## 二、安装

![1](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629878806403-1629878806392.png)

![2](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629878881074-1629878881066.png)

![3](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629878911671-1629878911666.png)

![4](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629878952427-1629878952425.png)

![5](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879322252-1629879322251.png)

![6](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879350068-1629879350066.png)

同意协议并安装
![7](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879422827-1629879422825.png)

![8](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879471690-1629879471688.png)

![9](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879489797-1629879489795.png)

![10](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879534425-1629879534424.png)

![11](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879548909-1629879548908.png)

![12](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879591332-1629879591330.png)

![13](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879699239-1629879699237.png)

![14](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879873195-1629879873194.png)

![15](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879902070-1629879902069.png)

![16](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879925378-1629879925377.png)

![17](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879973029-1629879973027.png)

![18](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629879992913-1629879992912.png)

![19](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629880007203-1629880007202.png)

![20](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629880029302-1629880029301.png)

![21](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629880103114-1629880103113.png)

## 三、连接

### 1.连接

#### 1.1配置环境变量

![1.1](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629880719980-1629880719974.png)
不要忘记点击确认

#### 1.2 查看版本

运行`mysql --version`即可成功查看版本
![1.2](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629880847739-1629880847738.png)

#### 1.3 连接数据库

运行`mysql -uroot -p`
输入密码，即可连接数据库
![1.3](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629881387763-1629881387762.png)

### 2. 数据库操作

#### 2.1 查看现有的数据库

运行`SHOW DATABASES;`
> 注意：
> 1.字母要大写
> 2.结尾需要加分号

会有四个默认数据库
![2.1](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629881608806-1629881608806.png)

#### 2.2 创建数据库

运行`CREATE DATABASE 库名;`
![2.2](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629881956169-1629881956169.png)

#### 2.3 查看当前正在使用的数据库

运行`SELECT DATABASE();`
显示null表示没有使用任何数据库
![2.3](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629882017494-1629882017493.png)

#### 2.4 使用数据库

运行`USE 库名;`
![2.4](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629882100297-1629882100297.png)

### 3. 表操作

#### 3.1 创建表

运行`CREATE TABLE 表明(字段名 字段类型);`

#### 3.2 查看表

运行`SHOW TABLES;`
![3.2](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629882512209-1629882512208.png)

#### 3.3 查看表中的数据

运行`SELECT * FROM 表名`
![3.3](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629946658928-1629946658925.png)

#### 3.4 向表中插入数据

运行`INSERT INTO 表名 (字段1,字段2) VALUES (字段1值,字段2值);`
> 值需要符合字段格式
![3.4](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629947026842-1629947026842.png)
