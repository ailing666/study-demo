<?php
// 创建空数组
$arr = array();
var_dump($arr);
echo '<hr>';

$arrs = [];
var_dump($arrs);
echo '<hr>';

// 创建索引数组
$arr = array(
  '你',
  '我',
  '他'
);
var_dump($arr);
echo '<hr>';
echo $arr[0];
echo '<hr>';
echo $arr[1];
echo '<hr>';
echo $arr[2];
echo '<hr>';

// 创建关联数组
$arrs = [
  'you' => '你',
  'i' => '我',
  'she' => '她'
];
var_dump($arrs);
echo '<hr>';
echo $arrs['you'];
echo '<hr>';
echo $arrs['i'];
echo '<hr>';
echo $arrs['she'];
echo '<hr>';
print_r($arrs); //  Array ( [you] => 你 [i] => 我 [she] => 她 )
echo '<hr>';

// 二维数组
$arr = array(
  array(
    'name' => '你',
    'age'  => 12
  ),
  array(
    'name' => '我',
    'age'  => 13

  ),
  array(
    'name' => '她',
    'age'  => 14

  )
);
print_r($arr);
echo '<hr>';

// 三维数组
$arr = [
  [
    'name' => '你',
    'age'  => 14,
    'hobby' => [
      '吃饭',
      '看电视'
    ]
  ],
  [
    'name' => '我',
    'age'  => 14,
    'hobby' => [
      '睡觉',
    ]
  ],
  [
    'name' => '她',
    'age'  => 14,
    'hobby' => [
      '打游戏',
    ]
  ]
];
var_dump($arr);
echo '<hr>';

echo $arr[0]['name'] . ' --- ';
echo $arr[0]['hobby'][0] . ' --- ';
echo $arr[0]['hobby'][1];
