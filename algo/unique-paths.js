/**
 * @see{https://leetcode.com/problems/unique-paths/}
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const matrix = Array(n)
    .fill(null)
    .map(() => Array(m).fill(0));
  let row = -1;
  let col = -1;

  while (++col < m) {
    matrix[0][col] = 1;
  }
  while (++row < n) {
    matrix[row][0] = 1;
  }

  row = 0;

  while (++row < n) {
    col = 0;
    while (++col < m) {
      matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
    }
  }

  return matrix[n - 1][m - 1];
};

{
  let input = [3, 2];
  let output = uniquePaths(...input);
  let expected = 3;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}

{
  let input = [7, 3];
  let output = uniquePaths(...input);
  let expected = 28;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [1, 2];
  let output = uniquePaths(...input);
  let expected = 1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [1, 1];
  let output = uniquePaths(...input);
  let expected = 1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
