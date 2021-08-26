# SQL语句

## 1.DDL（Data Definition Language）

数据定义语言；可以通过DDL语句对数据库或者表进行：创建、删除、修改等操作

### 1.1 数据库操作

#### 1.1.1 查看当前数据库

```sql
# 查看所有的数据库
SHOW DATABASES;

# 选择某一个数据库
USE lovezero;

# 查看当前正在使用的数据库
SELECT DATABASE();
```

#### 1.1.2 创建数据库

```sql
# 创建一个新的数据库
-- CREATE DATABASE hello;

# 当这个数据库不存在时创建一个新的数据库
CREATE DATABASE IF NOT EXISTS hello;

# 当这个数据库不存在时创建一个指定编码和排序方式的数据库
-- CREATE DATABASE IF NOT EXISTS hello DEFAULT CHARACTER SET utf8mb4
--     COLLATE utf8mb4_0900_ai_ci;
```

#### 1.1.3 删除数据库

```sql
# 如果这个数据库存在，就删除这个数据库
DROP DATABASE IF EXISTS test;
```

#### 1.1.4 修改数据库

```sql
# 修改数据库的编码和排序方式
ALTER DATABASE hello CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
```

## 2.DML（Data Manipulation Language）

数据操作语言；可以通过DML语句对表进行：添加、删除、修改等操作；

## 3. DQL（Data Query Language）

数据查询语言；可以通过DQL从数据库中查询记录；（重点）

## 4. DCL（Data Control Language）

数据控制语言；对数据库、表格的权限进行相关访问控制操作；
