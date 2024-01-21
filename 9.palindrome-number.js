/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const strX = x.toString();

  for (let i = 0, j = strX.length - 1; i < j; i++, j--) {
    if (strX[i] !== strX[j]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

// 11511/11511 cases passed (123 ms)
// Your runtime beats 93.86 % of javascript submissions
// Your memory usage beats 7.46 % of javascript submissions (56.2 MB)
// @lc code=end
