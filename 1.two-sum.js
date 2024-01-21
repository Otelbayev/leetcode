/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const diffeence = target - nums[i];

    if (diffeence in obj) {
      return [obj[diffeence], i];
    }

    obj[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// 61/61 cases passed (58 ms)
// Your runtime beats 74.97 % of javascript submissions
// Your memory usage beats 5.01 % of javascript submissions (50 MB)

// @lc code=end
