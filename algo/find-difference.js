/**
 * @see {https://leetcode.com/problems/find-the-difference/}
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  return String.fromCharCode(sumChars(t) - sumChars(s));
};

/**
 * @param {string} s
 * @returns {number}
 */
function sumChars(s) {
  return Array.from(s)
    .map((x) => x.charCodeAt(0))
    .reduce((acc, x) => acc + x, 0);
}

// ------------------- Optimized


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sumS = 0;
  let sumT = 0;
  let i = -1;

  while (++i < s.length) {
    sumS += s.charCodeAt(i);
  }

  i = -1;

  while (++i < t.length) {
    sumT += t.charCodeAt(i);
  }

  return String.fromCharCode(sumT - sumS);
};

console.log(findTheDifference("abcd", "abcde"));
