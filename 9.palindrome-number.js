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
  const str = x.toString();

  for (i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

// 11511/11511 cases passed (125 ms)
// Your runtime beats 91.94 % of javascript submissions
// Your memory usage beats 7.29 % of javascript submissions (56.6 MB)
// @lc code=end
