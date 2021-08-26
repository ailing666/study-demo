-- 查看所有的数据库
SHOW DATABASES;

-- 选择某一个数据库
USE lovezero;

-- 查看当前正在使用的数据库
SELECT DATABASE();

-- 创建一个新的数据库
-- CREATE DATABASE hello;

-- 当这个数据库不存在时创建一个新的数据库
CREATE DATABASE IF NOT EXISTS hello;

-- 当这个数据库不存在时创建一个指定编码和排序方式的数据库
-- CREATE DATABASE IF NOT EXISTS hello DEFAULT CHARACTER SET utf8mb4
-- 				COLLATE utf8mb4_0900_ai_ci;

-- 当这个数据库存在时删除数据库
DROP DATABASE IF EXISTS test;

-- 修改数据库的编码
ALTER DATABASE hello CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;

