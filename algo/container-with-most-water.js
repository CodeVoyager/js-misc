/**
 * @see {https://leetcode.com/problems/container-with-most-water/}
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let ma = 0;
    let a = 0;
    while (l < r) {
        a = (r - l) * (height[l] < height[r] ? height[l] : height[r]);
        ma = a > ma ? a : ma;
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return ma;
};

{
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = 49;
    console.log(maxArea(height), result);
    console.log("---");
}
