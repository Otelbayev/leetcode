/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const current = obj[s[i]];
    const next = obj[s[i + 1]];
    if (current < next) {
      sum += next - current;
      i++;
    } else {
      sum += current;
    }
  }

  return sum;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

// 3999/3999 cases passed (114 ms)
// Your runtime beats 46.2 % of javascript submissions
// Your memory usage beats 5.24 % of javascript submissions (55.4 MB)

// @lc code=end
