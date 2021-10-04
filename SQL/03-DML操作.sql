
-- 插入数据
-- 按顺序对应表的各个字段
INSERT INTO `user` VALUES (666, '易烊千玺', '66666666','2021-08-26', '2021-08-26');


-- 对应指定字段，key与val要一一对应
INSERT INTO `user` (name, telPhone, createTime)
						VALUES ('我', '88888888', '2021-08-27');


INSERT INTO `user` (name, telPhone)
						VALUES ('她', '11111111');


-- 删除所有数据
DELETE FROM `user`;

-- 删除符合条件的数据
DELETE FROM `user` WHERE id = 666;


-- 更新所有的数据
UPDATE `user` SET `name` = '咯喽', `createTime` = '1999-09-09';

-- 更新符合条件的数据
UPDATE `user` SET name = '哈哈', `createTime` = '2020-02-02' WHERE id = 670;
