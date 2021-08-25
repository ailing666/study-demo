<?php
  // 创建空数组
  $arr = array();
  var_dump( $arr );
  echo '<hr>';

  $arrs = [];
  var_dump( $arrs );
  echo '<hr>';

  // 创建索引数组
  $arr = array(
    '你',
    '我',
    '他'
  );
  var_dump( $arr );
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
  var_dump( $arrs );
  echo '<hr>';
  echo $arrs['you'];
  echo '<hr>';
  echo $arrs['i'];
  echo '<hr>';
  echo $arrs['she'];
  echo '<hr>';
  print_r($arrs); //  Array ( [you] => 你 [i] => 我 [she] => 她 )
  ?>