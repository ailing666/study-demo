-- 求和
SELECT SUM(price) FROM `products`;
-- 对结果起别名
SELECT SUM(price) totalPrice FROM `products`;
-- 求华为手机的总和
SELECT SUM(price) FROM `products` WHERE brand = '华为';

-- 求平均价格
SELECT AVG(price) FROM `products`;

-- 求最高和最低
SELECT MAX(price) FROM `products`;

SELECT MIN(price) FROM `products`;

-- 求表里总个数
SELECT COUNT(*) FROM `products`;
-- 求表里url的总个数
SELECT COUNT(url) FROM `products`;
-- 去掉重复的price
SELECT COUNT(DISTINCT price)  FROM `products`;