/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    let i = -1;
    let c = -1;
    mainLoop: while (strs.length) {
        i = -1;
        ++c;
        while (++i < strs.length) {
            if (!strs[i][c]) {
                break mainLoop;
            }
            if (strs[0][c] !== strs[i][c]) {
                break mainLoop;
            }
        }
        res += strs[0][c];
    }

    return res;
};

{
    const i = ["flower", "flow", "flight"];
    const e = "fl";
    const res = longestCommonPrefix(i);
    console.log(res, e, res === e);
}

{
    const i = ["dog", "racecar", "car"];
    const e = "";
    const res = longestCommonPrefix(i);
    console.log(res, e, res === e);
}

{
    const i = ["dog", "racecar", ""];
    const e = "";
    const res = longestCommonPrefix(i);
    console.log(res, e, res === e);
}

{
    const i = ["dog", "dogecar", "dog"];
    const e = "dog";
    const res = longestCommonPrefix(i);
    console.log(res, e, res === e);
}

{
    const i = [];
    const e = "";
    const res = longestCommonPrefix(i);
    console.log(res, e, res === e);
}

{
    const i = [""];
    const e = "";
    const res = longestCommonPrefix(i);
    console.log(res, e, res === e);
}
