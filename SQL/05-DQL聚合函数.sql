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

-- 根据品牌将手机分组，并计算出每组数据的平均值，总数，平均分
SELECT brand, AVG(price), COUNT(*),AVG(score) FROM `products` GROUP BY brand;

-- HAVING
-- 分组后，不支持where查询，可以用having筛选
-- 根据品牌将手机分组，并计算出每组数据的平均值，总数，平均分，并筛选出平均价格大于2000的手机
SELECT brand, AVG(price) avgPrice, COUNT(*),AVG(score) FROM `products` GROUP BY brand HAVING avgPrice >2000;
-- 如果要使用where，需要在分组前
-- 筛选出评分大于7.5分的手机，根据品牌进行分组，并计算出每组数据的平均值，总数，平均分
SELECT brand, AVG(price) avgPrice, COUNT(*),AVG(score) FROM `products` WHERE score >7.5 GROUP BY brand;