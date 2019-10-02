/**
 * @see {https://leetcode.com/problems/string-to-integer-atoi/}
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const ub = Math.pow(2, 31) - 1;
    const lb = Math.pow(-2, 31);
    let i = -1;
    let r = 0; // result
    let s = 0; // sign
    let c0 = 48;
    let c9 = 57;
    let x = 0; // char, possibly number
    let nf = false;

    while (++i < str.length) {
        x = str.charCodeAt(i);
        if (x <= c9 && x >= c0) {
            r = r * 10 + x - c0;
            nf = true;
            continue;
        }
        if (nf) {
            break;
        }
        if (x === 32) {
            // ' '
            continue;
        } else if (x === 43) {
            // +
            if (s !== 0) {
                break;
            }
            s = 1;
            nf = true;
        } else if (x === 45) {
            // -
            if (s !== 0) {
                break;
            }
            s = -1;
            nf = true;
        } else {
            break;
        }
    }

    r *= s ? s : 1;

    if (r > ub) {
        return ub;
    }

    if (r < lb) {
        return lb;
    }

    return r;
};

{
    const str = "";
    const result = 0;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}

{
    const str = "42";
    const result = 42;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}

{
    const str = "   -42";
    const result = -42;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}

{
    const str = "   -4+2";
    const result = -4;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}

{
    const str = "4193 with words";
    const result = 4193;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}

{
    const str = "words and 987";
    const result = 0;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}

{
    const str = "-91283472332";
    const result = -2147483648;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}

{
    const str = "91283472332";
    const result = 2147483647;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}

{
    const str = "   +0 123";
    const result = 0;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}

{
    const str = "-   234";
    const result = 0;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}

{
    const str = "0-1";
    const result = 0;
    console.log(myAtoi(str), result, myAtoi(str) === result);
    console.log("---");
}
