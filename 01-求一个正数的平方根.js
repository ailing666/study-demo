function sqrt (n) {
  // 假设最小值为0
  let min = 0

  // 假设最大值为输入的数
  let max = n

  // 精确到的小数位数
  while (max - min > 0.000001) {

    // 取中位数
    let m = (min + max) / 2
    if (m * m === n) {
      return m
    } else if (m * m < n) {
      // 中位数平方小于输入数，就将最小值替换为中位数
      min = m
    } else if (m * m > n) {
      // 中位数平方大于输入数，就将最大值替换为中位数
      max = m
    }
  }
  return (min + max) / 2
}



function sqrt2 (n) {
  let x = n
  while (Math.abs(x * x - n) >= 0.0000000000001) {
    x = (x + n / x) / 2
  }
  return x
}