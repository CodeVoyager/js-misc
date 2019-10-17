const romanNums = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
];

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;
    let i = 0;
    let si = 0;
    while (si < s.length && i < romanNums.length) {
        if (romanNums[i][1].length === 1) {
            if (romanNums[i][1] === s[si]) {
                res += romanNums[i][0];
                si += 1;
            } else {
                i++;
            }
        } else {
            if (
                romanNums[i][1][0] === s[si] &&
                romanNums[i][1][1] === s[si + 1]
            ) {
                res += romanNums[i][0];
                si += 2;
            } else {
                i++;
            }
        }
    }

    return res;
};

{
    const num = "III";
    const result = 3;
    console.log(romanToInt(num), result);
    console.log("---");
}

{
    const num = "IV";
    const result = 4;
    console.log(romanToInt(num), result);
    console.log("---");
}
{
    const num = "VIII";
    const result = 8;
    console.log(romanToInt(num), result);
    console.log("---");
}
{
    const num = "IX";
    const result = 9;
    console.log(romanToInt(num), result);
    console.log("---");
}
{
    const num = "LVIII";
    const result = 58;
    console.log(romanToInt(num), result);
    console.log("---");
}
{
    const num = "";
    const result = 0;
    console.log(romanToInt(num), result);
    console.log("---");
}
{
    const num = "FF";
    const result = 0;
    console.log(romanToInt(num), result);
    console.log("---");
}
{
    const num = "MCMXCIV";
    const result = 1994;
    console.log(romanToInt(num), result);
    console.log("---");
}
