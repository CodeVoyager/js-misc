/**
 * @see {https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let i = -1;
  if (nums.length < 2) {
    return nums;
  }
  while (++i < nums.length) {
    if (i > 0 && nums[i - 1] > nums[i]) {
      return nums[i];
    }
  }
  return nums[0];
};

// ------ binary search -----------

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length < 2) {
    return nums;
  }
  if (nums.length === 2) {
    return Math.min(nums[0], nums[1]);
  }
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }
  let l = 0;
  let h = nums.length - 1;
  let m;
  while (l <= h) {
    m = l + Math.floor((h - l) / 2);
    if (nums[m] > nums[m + 1]) {
      return nums[m + 1];
    }
    if (nums[m] < nums[m - 1]) {
      return nums[m];
    }
    if (nums[m] > nums[0]) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
};

{
  let input = [1,2,3];
  let output = findMin(input);
  let expected = 1;

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
{
  let input = [2, 1];
  let output = findMin(input);
  let expected = 1;

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
{
  let input = [5, 1, 2, 3, 4];
  let output = findMin(input);
  let expected = 1;

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
{
  let input = [2, 3, 1];
  let output = findMin(input);
  let expected = 1;

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
{
  let input = [3, 4, 5, 1, 2];
  let output = findMin(input);
  let expected = 1;

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
{
  let input = [1, 2];
  let output = findMin(input);
  let expected = 1;

  console.log("--------");
  console.log(
    output,
    expected,
    JSON.stringify(output) === JSON.stringify(expected)
  );
  console.log("--------");
}
