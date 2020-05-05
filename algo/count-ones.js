/**
 * @see{https://leetcode.com/problems/number-of-1-bits/}
 */

/**
 * For smaller numbers
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let sum = 0;

  while (n > 0) {
    if (n & 1) {
      ++sum;
    }
    n >>= 1;
  }

  return sum;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).split("0").join("").length;
};

console.log(hammingWeight(56));
console.log(hammingWeight(42949));
console.log(hammingWeight(4294967293));
