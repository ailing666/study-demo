/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针
var moveZeroes = function (nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {

    if (nums[i] !== 0) {
      // 将非0的数字放入第j项
      nums[j] = nums[i]
      j++
    }

  }

  // 将j以后的数字补0
  while (j < nums.length) {
    nums[j] = 0
    j++
  }
  console.log('nums: ', nums)
}


// sort:返回0顺序不变，返回-1交换位置，这里逻辑是如果b=0，就返回-1，否则就位置不动，这样0永远会排到最后
var moveZeroes2 = function (nums) {
  nums.sort((a, b) => b != 1 ? 0 : -1)
  console.log('nums: ', nums)
}

moveZeroes([0, 1, 0, 3, 12, -1, 0, 0, 1])
moveZeroes2([-1, 1, 5, 2, 0, 1, 7])