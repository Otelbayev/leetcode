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
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numIndices.hasOwnProperty(complement)) {
      return [numIndices[complement], i];
    }

    numIndices[nums[i]] = i;
  }

  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// 61/61 cases passed (49 ms)
// Your runtime beats 94.97 % of javascript submissions
// Your memory usage beats 5.01 % of javascript submissions (50.4 MB)

// @lc code=end
