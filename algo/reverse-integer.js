/**
 * @see {https://leetcode.com/problems/reverse-integer/}
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const im = x < 0 ? -1 : 1; // is negative?
    const ub = Math.pow(2, 31) - 1;
    const lb = Math.pow(-2, 31);

    x = Math.abs(x);

    if (x < 10) {
        return x * im;
    }

    let m = 1;
    let r = x;
    let rm = 0;

    while (x >= 10) {
        m *= 10;
        x = (x / 10) | 0;
    }

    x = r;
    r = 0;

    while (x > 0) {
        rm = x % 10;
        r += rm * m;
        m /= 10;
        x = (x / 10) | 0;
    }

    r = r * im;

    if (ub >= r && lb <= r) {
        return r;
    }

    return 0;
};

{
    const x = 123;
    const result = 321;
    console.log(reverse(x), result, reverse(x) === result);
    console.log("---");
}

{
    const x = -123;
    const result = -321;
    console.log(reverse(x), result, reverse(x) === result);
    console.log("---");
}

{
    const x = 120;
    const result = 21;
    console.log(reverse(x), result, reverse(x) === result);
    console.log("---");
}

{
    const x = 555;
    const result = 555;
    console.log(reverse(x), result, reverse(x) === result);
    console.log("---");
}

{
    const x = 55511;
    const result = 11555;
    console.log(reverse(x), result, reverse(x) === result);
    console.log("---");
}

{
    const x = 1;
    const result = 1;
    console.log(reverse(x), result, reverse(x) === result);
    console.log("---");
}

{
    const x = 10;
    const result = 1;
    console.log(reverse(x), result, reverse(x) === result);
    console.log("---");
}

{
    const x = 0;
    const result = 0;
    console.log(reverse(x), result, reverse(x) === result);
    console.log("---");
}

{
    const x = 1534236469;
    const result = 0;
    console.log(reverse(x), result, reverse(x) === result);
    console.log("---");
}

{
    const x = -1563847412;
    const result = 0;
    console.log(reverse(x), result, reverse(x) === result);
    console.log("---");
}
