/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 最后一位数+1
  digits[digits.length - 1]++
  // 从后往前遍历
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 10) {
      // 如果大于10，就变为0
      digits[i] = 0
      // 前一位+1，如果已经是第0个元素了，就往数组前面添加一个1
      i === 0 ? digits.unshift(1) : digits[i - 1]++
    }
  }
  return digits
}
plusOne([9, 9, 9, 9])