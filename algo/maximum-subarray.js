/**
 * @see {https://leetcode.com/problems/maximum-subarray/submissions/}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let maxSum = -Infinity;
  let sum = 0;
  let i = -1;
  while (++i < nums.length) {
    sum = Math.max(nums[i], sum + nums[i]);
    maxSum = sum > maxSum ? sum : maxSum;
  }

  return maxSum;
};

{
  let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let output = maxSubArray(input);
  let expected = 6;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [];
  let output = maxSubArray(input);
  let expected = 0;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [-1, -2, -3, -4, -5];
  let output = maxSubArray(input);
  let expected = -1;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
