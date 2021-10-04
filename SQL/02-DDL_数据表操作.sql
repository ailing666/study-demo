
-- 查看所有的表
SHOW TABLES;

-- 新建表
CREATE TABLE IF NOT EXISTS users (
	age int
);
-- 新建表
CREATE TABLE IF NOT EXISTS `students` (
	`name` VARCHAR(4),
	`age` int
);

-- 删除表
DROP TABLE IF EXISTS users;

-- 查看表的结构
DESC `students`;


-- 创建一个完整的表
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
	`createTime` TIMESTAMP
);
INSERT INTO `user` (name) VALUES ('小艾同学');

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