/**
 * @see {https://leetcode.com/problems/letter-combinations-of-a-phone-number/}
 */

const digitsMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const res = [];
    if (digits.length === 0) {
        return res;
    }
    if (digits.length === 1) {
        return digitsMap[digits].split('');
    }
    function backTrack(c, ds, os) {
        if (ds.length === 0) {
            os.push(c);
        } else {
            let i = -1;
            while (++i < digitsMap[ds[0]].length) {
                backTrack(c + digitsMap[ds[0]][i], ds.slice(1), os);
            }
        }
    }

    backTrack("", digits, res);
    return res;
};

{
    const i = "23";
    const e = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    const res = letterCombinations(i);
    console.log(res, e, res.length, e.length);
}
{
    const i = "72";
    const e = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    const res = letterCombinations(i);
    console.log(res, e, res.length, e.length);
}
{
    const i = "77";
    const e = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    const res = letterCombinations(i);
    console.log(res, e, res.length, e.length);
}
{
    const i = "777";
    const e = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    const res = letterCombinations(i);
    console.log(res, e, res.length, e.length);
}
{
    const i = "3";
    const e = ["d", "e", "f"];
    const res = letterCombinations(i);
    console.log(res, e, res.length, e.length);
}
