<?php
// 条件判断
$flag = true;
var_dump($flag ? '真的' : '假的');
echo '<hr />';

// if
if ($flag) {
  echo $flag;
}
echo '<hr />';

// if...else
if ($flag) {
  echo  'if:' . $flag;
} else {
  echo  'else:' . $flag;
};
echo '<hr />';

$num = 2;
// 
if ($num === 1) {
  echo  'if:' . $flag;
} else if ($num === 2) {
  echo  'else...if:' . $num;
} else {
  echo  'else:' . $num;
}
echo '<hr />';


$str = '你好';
switch ($str) {
  case 'hello':
    echo 'hello';
  case '你好':
    echo '你好';
  default:
    echo '哈哈';
}
echo '<hr />';

$str = '你好';
switch ($str) {
  case 'hello':
    echo 'hello';
    break;
  case '你好':
    echo '你好';
    break;

  default:
    echo '哈哈';
}
echo '<hr />';
echo '<hr />';
echo '<hr />';
echo '<hr />';
echo '<hr />';
$str = '你好';
switch ($str) {
  case 'hello':
    echo 'hello';
    break;
  case '你好':
    echo '你好';
    break;

  default:
    echo '哈哈';
}
