/**
 * @see{https://leetcode.com/problems/sort-colors/}
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const RED = 0;
  const BLUE = 2;
  let start = 0;
  let end = nums.length - 1;
  let i = 0;
  while (i <= end) {
    if (nums[i] === RED) {
      nums[i] = nums[start];
      nums[start] = RED;
      ++start;
      ++i;
    } else if (nums[i] === BLUE) {
      nums[i] = nums[end];
      nums[end] = BLUE;
      --end;
    } else {
      ++i;
    }
  }
};
