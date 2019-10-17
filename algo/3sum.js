/**
 * @see  {https://leetcode.com/problems/3sum/}
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    let i = -1;
    let l = 0;
    let r = 0;
    let s = 0;

    nums.sort(function(a, b) {
        return a - b;
    });

    while (++i < nums.length - 2) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        l = i + 1;
        r = nums.length - 1;

        while (l < r) {
            s = nums[i] + nums[l] + nums[r];
            if (s === 0) {
                res.push([nums[i], nums[l], nums[r]].sort());
                while (nums[l] === nums[l + 1]) {
                    l++;
                }
                while (nums[r] === nums[r - 1]) {
                    r--;
                }
                l++;
                r--;
            } else if (s > 0) {
                r--;
            } else {
                l++;
            }
        }
    }

    return res;
};

{
    const nums = [-1, 0, 1, 2, -1, -4];
    const expc = [[-1, 0, 1], [-1, -1, 2]];
    const result = threeSum(nums);
    console.log(result, expc, result.length, expc.length);
    console.log("---");
}
{
    const nums = [];
    const expc = [];
    const result = threeSum(nums);
    console.log(result, expc, result.length, expc.length);
    console.log("---");
}
{
    const nums = [1, 2, 3, 4, 5];
    const expc = [];
    const result = threeSum(nums);
    console.log(result, expc, result.length, expc.length);
    console.log("---");
}
{
    const nums = [1];
    const expc = [];
    const result = threeSum(nums);
    console.log(result, expc, result.length, expc.length);
    console.log("---");
}
{
    const nums = [-1, -2, -3, 4, 1, 3, 0, 3, -2, 1, -2, 2, -1, 1, -5, 4, -3];
    const expc = [
        [-5, 1, 4],
        [-5, 2, 3],
        [-3, -1, 4],
        [-3, 0, 3],
        [-3, 1, 2],
        [-2, -2, 4],
        [-2, -1, 3],
        [-2, 0, 2],
        [-2, 1, 1],
        [-1, -1, 2],
        [-1, 0, 1]
    ];
    const result = threeSum(nums);
    console.log(result, expc, result.length, expc.length);
    console.log("---");
}
