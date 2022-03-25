
// 计算n的十进制位宽
function digitWidth (m) {
  let width = 0
  do {
    let digit = m % 10
    m = (m - digit) / 10
    width++
  } while (m > 0)
  return width
}
function isPalindrom (n) {
  // 得到n的位宽
  let width = digitWidth(n)
  for (var i = 0; i < (width - 1) / 2; i++) {
    // i是从0到width，j是从width到0
    var j = width - i - 1
    // di是n从前往后数，dj是n从后往前数
    var di = Math.floor(n / Math.pow(10, i)) % 10
    var dj = Math.floor(n / Math.pow(10, j)) % 10
    if (di !== dj) {
      return false
    }
  }
  return true
}

console.log(isPalindrom(123321))