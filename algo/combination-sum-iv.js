/**
 * @see{https://leetcode.com/problems/combination-sum-iv/}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const ret = Array(target + 1).fill(0);
  let i = 0;
  let j;

  ret[0] = 1;

  while (++i < ret.length) {
    j = -1;
    while (++j < nums.length) {
      if (i - nums[j] >= 0) {
        console.log(ret);
        ret[i] += ret[i - nums[j]];
        console.log(ret, i, nums[j], i - nums[j], ret[i - nums[j]]);
        console.log('----');
      }
    }
  }

  return ret[ret.length - 1];
};

{
  const input = [[1, 2, 3], 4];
  const expected = 7;
  const result = combinationSum4(input[0], input[1]);
  console.log(result, expected, result === expected);
}
