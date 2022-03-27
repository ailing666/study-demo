/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x
  let l = 0
  let r = x
  while (r - l > 1) {
    let mid = Math.floor((r + l) / 2)

    if (mid * mid === x) return mid

    mid * mid > x ? r = mid : l = mid
  }
  return l
}