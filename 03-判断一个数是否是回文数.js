function isPalindrom (n) {
  // 将n存起来
  let m = n
  // 反转过来的数
  let revert = 0

  while (m > 0) {
    // digit是m的个位数
    let digit = m % 10
    // 让digit成为revert的个位
    revert = revert * 10 + digit
    // m变成去掉个位后的新数
    m = (m - digit) / 10
  }
  // 如果反转过来和原数相等，就是回文数
  return revert === n
}

console.log(isPalindrom(1364))