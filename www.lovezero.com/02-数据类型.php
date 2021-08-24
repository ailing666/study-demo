<?php
  echo '布尔 <br>';
  $x = true;
  var_dump($x);
  echo '<hr>';
  $y = false;
  var_dump($y);
  echo '<hr>';
  echo '整数  <br>';

  $number = 0;
  var_dump($number);
  echo '<hr>';
  $number = 10;
  var_dump($number);
  echo '<hr>';
  $number = -9999999;
  var_dump($number);
  echo '<hr>';
  echo '浮点数  <br>';

  $number = 13.14;
  var_dump($number);
  echo '<hr>';
  $number = -99999999.00;
  var_dump($number);
  echo '字符串  <br>';

  $str = '字符串';
  var_dump($str);
  echo '<hr>';
  $str = 'loveZero';
  var_dump($str);
  echo '<hr>';
  $str = 'true';
  var_dump($str);
  echo '<hr>';
  $str = '0';
  var_dump($str);

  // $null;
  // var_dump($null);
  echo '<hr>';
  $null = '';
  var_dump($null);
  echo '<hr>';
  // 这个才是null
  $null = null;
  var_dump($null);
  echo '<hr>';

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