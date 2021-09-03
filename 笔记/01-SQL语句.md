# SQL语句

## 1.数据类型

### 1.1 数字类型

+ 整数数字类型：INTEGER，INT，SMALLINT，TINYINT，MEDIUMINT，BIGINT；
+ 浮点数字类型：FLOAT，DOUBLE（FLOAT是4个字节，DOUBLE是8个字节）；
+ 精确数字类型：DECIMAL，NUMERIC（DECIMAL是NUMERIC的实现形式）

### 1.2 日期类型

 YEAR以YYYY格式显示值

+ 范围 1901到2155，和 0000。

DATE类型用于具有日期部分但没有时间部分的值：

+ DATE以格式YYYY-MM-DD显示值 ；
+ 支持的范围是 '1000-01-01' 到 '9999-12-31'；

 DATETIME类型用于包含日期和时间部分的值：

+ DATETIME以格式'YYYY-MM-DD hh:mm:ss'显示值；
+ 支持的范围是1000-01-01 00:00:00到9999-12-31 23:59:59

TIMESTAMP数据类型被用于同时包含日期和时间部分的值：

+ TIMESTAMP以格式'YYYY-MM-DD hh:mm:ss'显示值；
+ 但是它的范围是UTC的时间范围：'1970-01-01 00:00:01'到'2038-01-19 03:14:07';

DATETIME或TIMESTAMP 值可以包括在高达微秒（6位）精度的后小数秒一部分

+ DATETIME表示的范围可以是'1000-01-01 00:00:00.000000'到'9999-12-31 23:59:59.999999';

### 1.3 字符串类型

 CHAR类型在创建表时为固定长度，长度可以是0到255之间的任何值；

+ 在被查询时，会删除后面的空格；
  
VARCHAR类型的值是可变长度的字符串，长度可以指定为0到65535之间的值；

+ 在被查询时，不会删除后面的空格；

 BINARY和VARBINARY 类型用于存储二进制字符串，存储的是字节字符串；

+ <https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html>

BLOB用于存储大的二进制类型；

TEXT用于存储大的字符串类型；

## 2. DDL（Data Definition Language）

数据定义语言；可以通过DDL语句对数据库或者表进行：创建、删除、修改等操作

### 2.1 数据库操作

#### 2.1.1 查看当前数据库

```sql
-- 查看所有的数据库
SHOW DATABASES;

-- 选择某一个数据库
USE lovezero;

-- 查看当前正在使用的数据库
SELECT DATABASE();
```

#### 2.1.2 创建数据库

```sql
-- 创建一个新的数据库
-- CREATE DATABASE hello;

-- 当这个数据库不存在时创建一个新的数据库
CREATE DATABASE IF NOT EXISTS hello;

-- 当这个数据库不存在时创建一个指定编码和排序方式的数据库
-- CREATE DATABASE IF NOT EXISTS hello DEFAULT CHARACTER SET utf8mb4
--     COLLATE utf8mb4_0900_ai_ci;
```

#### 2.1.3 删除数据库

```sql
-- 如果这个数据库存在，就删除这个数据库
DROP DATABASE IF EXISTS test;
```

#### 2.1.4 修改数据库

```sql
-- 修改数据库的编码和排序方式
ALTER DATABASE hello CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
```

### 2.2 数据表操作

#### 2.2.1 查看所有表

```mysql
# 查看所有的表
SHOW TABLES;
```

#### 2.2.2 新建表

```sql
CREATE TABLE IF NOT EXISTS `students` (
 `name` VARCHAR(4),
 `age` int
);

```

#### 2.2.3 删除表

```sql
DROP TABLE IF EXISTS users;
```

#### 2.2.4 查看表的结构

```sql
DESC `students`;
```

![2.2.4](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629962990638-1629962990635.png)

#### 2.2.5 表约束

不能为空：NOT NULL

+ 某些字段要求用户必须插入值，不可以为空，这个时候可以使用 NOT NULL 来约束；

默认值：DEFAULT

+ 某些字段希望在没有设置值时给予一个默认值，这个时候可以使用 DEFAULT来完成；

自动递增：AUTO_INCREMENT

+ 某些字段希望不设置值时可以进行递增，比如用户的id，这个时候可以使用AUTO_INCREMENT来完成；

外键约束

```sql
CREATE TABLE IF NOT EXISTS `users` (
 -- 设置为主键，自动递增
 `id` INT PRIMARY KEY AUTO_INCREMENT,
 -- VARCHAR类型，长度为10，不为空
 `name` VARCHAR(10) NOT NULL,
 -- INT类型，默认值为0
 `age` INT DEFAULT 0,
 -- VARCHAR类型，长度为20，唯一值
 `phone` VARCHAR(20) UNIQUE,
 -- TIMESTAMP类型
 `createTime` 
);
```

![2.2.5](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629965978672-1629965978671.png)

#### 2.2.6 修改表

```sql
-- 修改表名
ALTER TABLE `users` RENAME TO `user`;

-- 添加一个新列
ALTER TABLE `user` ADD `updateTime` TIMESTAMP;

-- 修改字段名
ALTER TABLE `user` CHANGE `phone` `telPhone` VARCHAR(20) UNIQUE;

-- 删除字段
ALTER TABLE `user` DROP `age`;

-- 根据一个表的结构创建另一张表
CREATE TABLE `user2` LIKE `user`;

-- 根据一个表的内容创建另一张表
CREATE TABLE `user3` (SELECT * FROM `user`);

-- 修改createTime默认值为创建时间
ALTER TABLE `user` MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- 修改updateTime默认时间为创建时间，并在更新时自动更新时间
ALTER TABLE `user` MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
```

![2.2.6.1](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629966650306-1629966650305.png)
![2.2.6.2](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629966798878-1629966798877.png)

## 3. DML（Data Manipulation Language）

数据操作语言；可以通过DML语句对表进行：添加、删除、修改等操作；

### 3.1 插入

```sql
INSERT INTO `user` VALUES (666, '易烊千玺', '66666666','2021-08-26', '2021-08-26');


-- 对应指定字段，key与val要一一对应
INSERT INTO `user` (name, telPhone, createTime)
      VALUES ('我', '88888888', '2021-08-27');


INSERT INTO `user` (name, telPhone)
      VALUES ('她', '11111111');

```

![3.1.1](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629972381286-1629972381282.png)

### 3.2 删除

```sql
-- 删除所有数据
DELETE FROM `user`;

-- 删除符合条件的数据
DELETE FROM `user` WHERE id = 666;
```

### 3.3 更新

```sql
-- 更新所有的数据
UPDATE `user` SET `name` = '咯喽', `createTime` = '1999-09-09';

-- 更新符合条件的数据
UPDATE `user` SET name = '哈哈', `createTime` = '2020-02-02' WHERE id = 670;
```

## 4. DQL（Data Query Language）

数据查询语言；可以通过DQL从数据库中查询记录

### 4.1 基本查询

```sql
-- 查询所有字段
SELECT * FROM `products`;

-- 查询指定字段
SELECT title,price FROM `products`;
```

```sql
-- 给查询结果起别名
SELECT title as phoneTitle,price as currentPrice FROM `products`;
```

![4.1.1](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1629974608778-1629974608769.png)

### 4.2 WHERE条件查询

+ 比较运算符

```sql
SELECT * FROM `products` WHERE price < 1000;
SELECT * FROM `products` WHERE price >= 1000;
SELECT * FROM `products` WHERE brand = '华为';
SELECT title,price FROM `products` WHERE price != 1000;
```

+ 逻辑运算符

```sql
-- 逻辑与：三种写法
SELECT * FROM `products` WHERE price > 1000 AND price < 2000;
SELECT * FROM `products` WHERE price > 1000 && price < 2000;
-- BETWEEN AND 包含等于
SELECT * FROM `products` WHERE price BETWEEN 1099 AND 2000;

-- 逻辑或
SELECT * FROM `products` WHERE price > 5000 || brand = '华为';
```

+ null

```sql

UPDATE `products` SET url = NULL WHERE id >= 85 and id <= 88;
-- 查询某一个值为NULL
SELECT * FROM `products` WHERE url IS NULL;
-- 查询值不为NULL
SELECT * FROM `products` WHERE url IS NOT NULL;
```

## 5. DCL（Data Control Language）

数据控制语言；对数据库、表格的权限进行相关访问控制操作；
