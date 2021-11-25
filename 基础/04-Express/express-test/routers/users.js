/**
 *   请求所有的用户信息: get /users
 *   请求所有的某个用户信息: get /users/:id
 *   创建用户: post /users body {username: passwod:}
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(["loveZero", "uzi", "yyqx"]);
});

router.get('/:id', (req, res, next) => {
  res.json(`${req.params.id}用户的信息`);
});

router.post('/', (req, res, next) => {
  res.json("创建成功");
});

module.exports = router;
