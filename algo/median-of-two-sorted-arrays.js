/**
 * @see {https://leetcode.com/problems/median-of-two-sorted-arrays/}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [];
    while (nums1.length || nums2.length) {
        if (nums1[0] != null && nums2[0] != null) {
            if (nums1[0] < nums2[0]) {
                arr.push(nums1.shift());
            } else {
                arr.push(nums2.shift());
            }
        } else if (nums1[0] != null) {
            arr.push(nums1.shift());
        } else {
            arr.push(nums2.shift());
        }
    }

    if (arr.length % 2 === 0) {
        const m = arr.length / 2 - 1;
        return (arr[m] + arr[m + 1]) / 2;
    } else {
        return arr[(arr.length + 1) / 2 - 1];
    }
};
/**
 * Better version
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [];
    let i1 = 0;
    let i2 = 0;
    while (i1 < nums1.length || i2 < nums2.length) {
        if (nums1[i1] != null && nums2[i2] != null) {
            if (nums1[i1] < nums2[i2]) {
                arr.push(nums1[i1++]);
            } else {
                arr.push(nums2[i2++]);
            }
        } else if (nums1[i1] != null) {
            arr.push(nums1[i1++]);
        } else {
            arr.push(nums2[i2++]);
        }
    }

    if (arr.length % 2 === 0) {
        const m = arr.length / 2 - 1;
        return (arr[m] + arr[m + 1]) / 2;
    } else {
        return arr[(arr.length + 1) / 2 - 1];
    }
};

{
    // Example 1
    const nums1 = [1, 3];
    const nums2 = [2];
    const result = 2.0;
    console.log(findMedianSortedArrays(nums1, nums2), result);
    console.log("---");
}

{
    // Example 2
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const result = 2.5;
    console.log(findMedianSortedArrays(nums1, nums2), result);
    console.log("---");
}

{
    // Example 3 one array empty
    const nums1 = [1, 2, 3];
    const nums2 = [];
    const result = 2.0;
    console.log(findMedianSortedArrays(nums1, nums2), result);
    console.log("---");
}

{
    // Example 3 one array empty and second is even
    const nums1 = [1, 2, 3, 4];
    const nums2 = [];
    const result = 2.5;
    console.log(findMedianSortedArrays(nums1, nums2), result);
    console.log("---");
}

{
    // Example 4 one array empty and second has one element
    const nums1 = [1];
    const nums2 = [];
    const result = 1;
    console.log(findMedianSortedArrays(nums1, nums2), result);
    console.log("---");
}

{
    // Example 5 Negative values
    const nums1 = [3];
    const nums2 = [-2, -1];
    const result = -1;
    console.log(findMedianSortedArrays(nums1, nums2), result);
    console.log("---");
}
