/**
 * @see {https://leetcode.com/problems/3sum-closest/}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let res = 0;
  let i = -1;
  let l = 0;
  let r = 0;
  let s = 0;
  let sd = Number.MAX_SAFE_INTEGER;
  let d;

  nums.sort(function (a, b) {
    return a - b;
  });

  while (++i < nums.length - 2) {
    l = i + 1;
    r = nums.length - 1;

    while (l < r) {
      s = nums[i] + nums[l] + nums[r];
      d = Math.abs(target - s);
      if (d < sd) {
        res = s;
        sd = d;
      }
      if (d === target) {
        return s;
      }
      if (s > target) {
        r--;
      } else {
        l++;
      }
    }
  }
  return res;
};

{
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const expc = 2;
  const result = threeSumClosest(nums, target);
  console.log(result, expc);
}

{
  const nums = [1, 1, -1, -1, 3];
  const target = -1;
  const expc = -1;
  const result = threeSumClosest(nums, target);
  console.log(result, expc);
}

{
  const nums = [0, 2, 1, -3];
  const target = 1;
  const expc = 0;
  const result = threeSumClosest(nums, target);
  console.log(result, expc);
}
{
  const nums = [1, 2, 4, 8, 16, 32, 64, 128];
  const target = 82;
  const expc = 82;
  const result = threeSumClosest(nums, target);
  console.log(result, expc);
}
{
  const nums = [0, 5, -1, -2, 4, -1, 0, -3, 4, -5];
  const target = 1;
  const expc = 1;
  const result = threeSumClosest(nums, target);
  console.log(result, expc);
}
