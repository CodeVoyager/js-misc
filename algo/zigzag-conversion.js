/**
 * @see {https://leetcode.com/problems/zigzag-conversion/}
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 0) {
        throw new Error("numRows is zero!");
    }
    if (s.length <= numRows || numRows < 2) {
        return s;
    }
    let r = []; // result
    let i = -1; // iterator
    let b = 0; // big step
    let so = 0; // step over
    let chr = 0; // character
    let sp = s.split("");
    while (++i < numRows) {
        chr = i;
        b = ((numRows - i) << 1) - 2;
        so = ((i + 1) << 1) - 2;
        r.push(sp[chr]);
        sp[chr] = undefined;
        while (chr < s.length) {
            chr += b;
            if (sp[chr]) {
                r.push(sp[chr]);
                sp[chr] = undefined;
            }
            if (so > 0) {
                chr += so;
                if (sp[chr]) {
                    r.push(sp[chr]);
                    sp[chr] = undefined;
                }
            }
        }
    }

    return r.join("");
};

{
    const s = "PAYPALISHIRING";
    const numRows = 3;
    const result = "PAHNAPLSIIGYIR";
    console.log(convert(s, numRows), result, convert(s, numRows) == result);
    console.log("---");
}

{
    const s = "PAYPALISHIRING";
    const numRows = 4;
    const result = "PINALSIGYAHRPI";
    console.log(convert(s, numRows), result, convert(s, numRows) == result);
    console.log("---");
}

{
    const s = "PAYPALISHIRING";
    const numRows = 5;
    const result = "PHASIYIRPLIGAN";
    console.log(convert(s, numRows), result, convert(s, numRows) == result);
    console.log("---");
}

{
    const s = "PAYPALISHIRING";
    const numRows = 2;
    const result = "PYAIHRNAPLSIIG";
    console.log(convert(s, numRows), result, convert(s, numRows) == result);
    console.log("---");
}

{
    const s = "PAYPALISHIRING";
    const numRows = 1;
    const result = "PAYPALISHIRING";
    console.log(convert(s, numRows), result, convert(s, numRows) == result);
    console.log("---");
}

{
    const s = "PAY";
    const numRows = 3;
    const result = "PAY";
    console.log(convert(s, numRows), result, convert(s, numRows) == result);
    console.log("---");
}
