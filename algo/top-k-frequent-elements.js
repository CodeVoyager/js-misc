/**
 * @see {https://leetcode.com/problems/top-k-frequent-elements/}
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  return Object.entries(
    nums.reduce((acc, n) => {
      acc[n] = acc[n] ? acc[n] + 1 : 1;

      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([n, _]) => parseInt(n, 10));
};

{
  let input = [[1, 1, 1, 2, 2, 3], 2];
  let output = topKFrequent(input[0], input[1]);
  let expected = [1, 2];

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}

{
  let input = [[1], 1];
  let output = topKFrequent(input[0], input[1]);
  let expected = [1];

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
