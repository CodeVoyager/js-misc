/**
 * @see {https://leetcode.com/problems/product-of-array-except-self/}
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = Array(nums.length).fill(1);
  const right = Array(nums.length).fill(1);
  const answer = Array(nums.length).fill(1);

  let i = -1;
  let j = nums.length;

  while (++i < nums.length) {
    --j;
    left[i] = (left[i - 1] !== undefined ? left[i - 1] : 1) * nums[i];
    right[j] = (right[j + 1] !== undefined ? right[j + 1] : 1) * nums[j];
  }

  i = -1;

  while (++i < nums.length) {
    answer[i] =
      i === 0
        ? right[1]
        : i === nums.length - 1
        ? left[nums.length - 2]
        : left[i - 1] * right[i + 1];
  }

  console.log(left, right, answer);

  return answer;
};
