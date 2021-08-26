
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