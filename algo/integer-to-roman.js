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
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = "";
    let i = 0;
    while (num > 0) {
        if (num < romanNums[i][0]) {
            i++;
            continue;
        }
        res += romanNums[i][1];
        num -= romanNums[i][0];
    }

    return res;
};

{
    const num = 3;
    const result = "III";
    console.log(intToRoman(num), result);
    console.log("---");
}

{
    const num = 4;
    const result = "IV";
    console.log(intToRoman(num), result);
    console.log("---");
}
{
    const num = 8;
    const result = "VIII";
    console.log(intToRoman(num), result);
    console.log("---");
}
{
    const num = 9;
    const result = "IX";
    console.log(intToRoman(num), result);
    console.log("---");
}
{
    const num = 58;
    const result = "LVIII";
    console.log(intToRoman(num), result);
    console.log("---");
}
{
    const num = 1994;
    const result = "MCMXCIV";
    console.log(intToRoman(num), result);
    console.log("---");
}
