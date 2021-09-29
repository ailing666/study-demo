function bsearch (arr, x) {
  let count = 0
  // 左边界
  let l = 0
  // 右边界
  let r = arr.length - 1
  // 猜想值
  let guess

  // 左边界小于有边界，循环继续
  while (l <= r) {
    count++
    guess = Math.floor((l + r) / 2)
    // 如果猜想值与期望值相等，返回期望值
    if (arr[guess] === x) {
      console.log('count: ', count)
      return guess
    } else if (arr[guess] > x) {
      r = guess - 1
    } else {
      l = guess + 1
    }
  }
  // 找不到就返回-1
  return -1
}
const A = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]
console.log(bsearch(A, 88))
console.log(bsearch(A, 66))
console.log(bsearch(A, 19))
