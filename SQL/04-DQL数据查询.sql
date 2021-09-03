
-- 创建表
CREATE TABLE IF NOT EXISTS `products` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	brand VARCHAR(20),
	title VARCHAR(100) NOT NULL,
	price DOUBLE NOT NULL,
	score DECIMAL(2,1),
	voteCnt INT,
	url VARCHAR(100),
	pid INT
);

-- 用js导入数据

-- 查询所有字段
SELECT * FROM `products`;

-- 查询指定字段
SELECT title,price FROM `products`;

-- 给查询结果起别名
SELECT title as phoneTitle,price as currentPrice FROM `products`;

-- 条件判断
SELECT * FROM `products` WHERE price < 1000;
SELECT * FROM `products` WHERE price >= 1000;
SELECT * FROM `products` WHERE brand = '华为';
SELECT title,price FROM `products` WHERE price != 1000;

-- 逻辑运算
-- 逻辑与：三种写法
SELECT * FROM `products` WHERE price > 1000 AND price < 2000;
SELECT * FROM `products` WHERE price > 1000 && price < 2000;
-- BETWEEN AND 包含等于
SELECT * FROM `products` WHERE price BETWEEN 1099 AND 2000;

-- 逻辑或
SELECT * FROM `products` WHERE price > 5000 || brand = '华为';


UPDATE `products` SET url = NULL WHERE id >= 85 and id <= 88;
-- 查询某一个值为NULL
SELECT * FROM `products` WHERE url IS NULL;
-- 查询值不为NULL
SELECT * FROM `products` WHERE url IS NOT NULL;