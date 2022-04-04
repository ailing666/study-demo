/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) return i
  }
}


var missingNumber2 = function (nums) {
  // 创建一个数组长度比nums大1
  let status = Array(nums.length + 1)
  for (let i = 0; i < nums.length; i++) {
    // 将nums的每一项作为status数组的索引存入true
    status[nums[i]] = true
  }

  for (let i = 0; i < status.length; i++) {
    // 如果不为true，说明就是丢失的数，直接返回
    if (!status[i]) return i
  }
}
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1]))