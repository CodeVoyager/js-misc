/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var complements = {};
    var i = -1;
    var c;
    var pc;
    while (++i < nums.length) {
        c = target - nums[i];
        pc = complements[nums[i]];
        // console.log(nums[i], c, pc, target, complements);
        if (pc !== undefined) {
            return [pc, i];
        }
        complements[c] = i;
    }

    throw new Error("Result not found");
};

var testCase = [2, 7, 11, 15];
var target = 9;
var result = [0, 1];

console.log(twoSum(testCase, target), result);

var testCase = [3, 3];
var target = 6;
var result = [0, 1];

console.log(twoSum(testCase, target), result);

var testCase = [-1, 4, 5, 1];
var target = 0;
var result = [0, 3];

console.log(twoSum(testCase, target), result);

var testCase = [-1, -2, -3, -4, -7, 90];
var target = -8;
var result = [0, 4];

console.log(twoSum(testCase, target), result);
