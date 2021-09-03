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

### 4.1 查询

#### 4.1.1 基本查询

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

#### 4.1.2 WHERE条件查询

1. 比较运算符

      ```sql
      SELECT * FROM `products` WHERE price < 1000;
      SELECT * FROM `products` WHERE price >= 1000;
      SELECT * FROM `products` WHERE brand = '华为';
      SELECT title,price FROM `products` WHERE price != 1000;
      ```

2. 逻辑运算符

      ```sql
      -- 逻辑与：三种写法
      SELECT * FROM `products` WHERE price > 1000 AND price < 2000;
      SELECT * FROM `products` WHERE price > 1000 && price < 2000;
      -- BETWEEN AND 包含等于
      SELECT * FROM `products` WHERE price BETWEEN 1099 AND 2000;

      -- 逻辑或
      SELECT * FROM `products` WHERE price > 5000 || brand = '华为';
      SELECT * FROM
      ```

3. null

      ```sql

      UPDATE `products` SET url = NULL WHERE id >= 85 and id <= 88;
      -- 查询某一个值为NULL
      SELECT * FROM `products` WHERE url IS NULL;
      -- 查询值不为NULL
      SELECT * FROM `products` WHERE url IS NOT NULL;
      ```

4. IN

      ```sql
      -- IN表示取多个值中的其中一个
      SELECT * FROM `products` WHERE brand IN ('华为','小米','苹果');
      -- 效果等同与
      SELECT * FROM `products` WHERE brand = '华为' || brand = '小米' || brand = '苹果';
      ```

#### 4.1.3 模糊查询

+ `%`表示匹配任意个任意字符
+ `_`表示匹配一个任意字符

```sql
-- 查询包含8GB的
SELECT * FROM `products` WHERE title LIKE '%8GB%';

-- 查询以v开头的
SELECT * FROM `products` WHERE title LIKE 'v%';

-- 查询带M必须是第单三个字符
SELECT * FROM `products` WHERE title LIKE '__M%';
```

![4.3模糊查询](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1630642113009-1630642113005.png)

#### 4.1.4 对查询结果进行排序

当我们查询到结果的时候，可以使用`DRDER BY`将结果按照某种方式进行排序
ORDER BY有两个常用的值：

+ ASC:升序排列；
  
+ DESC:降序排列

```sql
-- 按价格升序，当价格相同时按评分降序
SELECT * FROM `products` WHERE brand IN ('华为','小米','苹果') ORDER BY price ASC,score DESC;
```

#### 4.1.5 分页查询

当数据库中的数据非常多时，一次性查询到所有的结果进行显示是不太现实的

+ 在真实开发中，用户会传入 offset、 limiti或者page等字段；

+ 它们的目的是让我们可以在数据库中进行分页查询；

+ 它的用法有[ LIMIT (offset, row_count row_ count OFFSET offset

```sql
-- 分页查询
-- 查询20条，从0开始 1 - 20 
SELECT * FROM `products` LIMIT 20 OFFSET 0;
-- 查询20条，从20开始 21 - 40 
SELECT * FROM `products` LIMIT 20 OFFSET 20;
-- 查询10条，从40开始
SELECT * FROM `products` LIMIT 40,10;
```

### 4.2 聚合函数

将表里的所有数据视为一组数据，进行操作

#### 4.2.1 基本使用

`SELECT`后面不能跟任何字段

1. 求和

      ```sql
      -- 求和
      SELECT SUM(price) FROM `products`;
      -- 对结果起别名
      SELECT SUM(price) totalPrice FROM `products`;
      -- 求华为手机的总和
      SELECT SUM(price) FROM `products` WHERE brand = '华为';
      ```

2. 求平均值

      ```sql
      -- 求平均价格
      SELECT AVG(price) FROM `products`;
      ```

3. 求最大值和最小值

      ```sql
      -- 求最高和最低
      SELECT MAX(price) FROM `products`;

      SELECT MIN(price) FROM `products`;
      ```

4. 求总数

      ```sql
      -- 求表里总个数
      SELECT COUNT(*) FROM `products`;
      -- 求表里url的总个数
      SELECT COUNT(url) FROM `products`;
      -- 去掉重复的price
      SELECT COUNT(DISTINCT price)  FROM `products`;
      ```

#### 4.2.2 GROUP BY

GROUP BY通常和聚合函数一起使用：

+ 表示我们先对数据进行分组，再对每一组数据，进行聚合函数的计算

`SELECT`后可以跟上分组字段

```sql
-- 根据品牌将手机分组，并计算出每组数据的平均值，总数，平均分
SELECT brand, AVG(price), COUNT(*),AVG(score) FROM `products` GROUP BY brand;
```

![4.2.2](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1630646512654-1630646512645.png)

##### HAVING

```sql
-- HAVING
-- 分组后，不支持where查询，可以用having筛选
-- 根据品牌将手机分组，并计算出每组数据的平均值，总数，平均分，并筛选出平均价格大于2000的手机
SELECT brand, AVG(price) avgPrice, COUNT(*),AVG(score) FROM `products` GROUP BY brand HAVING avgPrice >2000;
-- 如果要使用where，需要在分组前
-- 筛选出评分大于7.5分的手机，根据品牌进行分组，并计算出每组数据的平均值，总数，平均分
SELECT brand, AVG(price) avgPrice, COUNT(*),AVG(score) FROM `products` WHERE score >7.5 GROUP BY brand;

```

## 5. DCL（Data Control Language）

数据控制语言；对数据库、表格的权限进行相关访问控制操作；

## 6. 多表

### 6.1 创建多表

```sql
-- 1.创建brand的表
CREATE TABLE IF NOT EXISTS `brand`(
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(20) NOT NULL,
 website VARCHAR(100),
 phoneRank INT
);

-- 2.插入数据
INSERT INTO `brand` (name, website, phoneRank) VALUES ('华为', 'www.huawei.com', 2);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('苹果', 'www.apple.com', 10);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('小米', 'www.mi.com', 5);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('oppo', 'www.oppo.com', 12);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('京东', 'www.jd.com', 8);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('Google', 'www.google.com', 9);


-- 3.给brand_id设置引用brand中的id的外键约束
-- 添加一个brand_id字段
ALTER TABLE `products` ADD `brand_id` INT;

-- 修改brand_id为外键
ALTER TABLE `products` ADD FOREIGN KEY(brand_id) REFERENCES brand(id);

-- 设置brand_id的值
UPDATE `products` SET `brand_id` = 1 WHERE `brand` = '华为';
UPDATE `products` SET `brand_id` = 2 WHERE `brand` = '苹果';
UPDATE `products` SET `brand_id` = 3 WHERE `brand` = '小米';
UPDATE `products` SET `brand_id` = 4 WHERE `brand` = 'oppo';

```

![6.1](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1630652813942-1630652813935.png)

#### 6.1.2 修改外键

直接修改外键会报错
![6.1.2](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1630665094842-1630665094837.png)

修改 on delete或者 on update的值；
我们可以给更新或者删除时设置几个值

+ RESTRICT（默认属性）：当更新或删除某个记录时，会检査该记录是否有关联的外键记录，有的话会报错,不允许更新或删除

+ NO ACTION:和 RESTRICT是一致的，是在SQL标准中定义的

+ CASCADE:当更新或删除某个记录时，会检査该记录是否有关联的外键记录，有的话

  + 更新：那么会更新对应的记录；

  + 删除：那么关联的记录会被一起删除掉

+ SET NULL:当更新或删除某个记录时，会检查该记录是否有关联的外键记录，有的话，将对应的值设置为NULL
  
```sql
-- 1.获取到目前的外键的名称
SHOW CREATE TABLE `products`;
-- 得到结果
-- CREATE TABLE `products` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `brand` varchar(20) DEFAULT NULL,
--   `title` varchar(100) NOT NULL,
--   `price` double NOT NULL,
--   `score` decimal(2,1) DEFAULT NULL,
--   `voteCnt` int DEFAULT NULL,
--   `url` varchar(100) DEFAULT NULL,
--   `pid` int DEFAULT NULL,
--   `brand_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `brand_id` (`brand_id`),
--   CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) // 外键名称products_ibfk_1
-- ) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
-- 

-- 2.根据名称将外键删除掉
ALTER TABLE `products` DROP FOREIGN KEY products_ibfk_1;

-- 3.重新添加外键约束：修改时联动，删除时默认
ALTER TABLE `products` ADD FOREIGN KEY (brand_id) REFERENCES brand(id)
                         ON UPDATE CASCADE 
                         ON DELETE RESTRICT;

-- 4.修改外键
UPDATE `brand` SET `id` = 100 WHERE `id` = 1;
```

![修改前后对比](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1630665397698-1630665397693.png)
![修改成功](https://cdn.jsdelivr.net/gh/ailing666/images@master/2021/1630665457227-1630665457223.png)
