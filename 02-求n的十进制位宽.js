function digitWidth (m) { // 计算n的十进制位宽
  let width = 0
  do {
    // digit就是个位 7,6,5,4
    let digit = m % 10
    // 这里得到去掉个位后的新数
    m = (m - digit) / 10
    width++
  } while (m > 0)
  return width
}

console.log(digitWidth(4567))