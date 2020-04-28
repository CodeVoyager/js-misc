/**
 * @see {https://leetcode.com/problems/generate-parentheses/}
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ret = [];
  function generateParenthesisHelper(s, left, right) {
      if (s.length === n * 2) {
        ret.push(s);
        return;
      }
      if (left < n) {
        generateParenthesisHelper(s + '(', left + 1, right);
      }
      if (left > right) {
        generateParenthesisHelper(s + ')', left, right + 1);
      }
  }
  generateParenthesisHelper('', 0, 0)
  return ret;
};