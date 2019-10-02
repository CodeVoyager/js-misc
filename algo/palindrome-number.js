/**
 * @see {https://leetcode.com/problems/palindrome-number/}
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    if (x < 9) {
        return true;
    }
    let l = Math.log10(x) | 0;
    let r = 0;
    let ld = 0;
    let rd = 0;
    while (l >= r) {
        ld = (x / Math.pow(10, l--)) % 10 | 0;
        rd = (x / Math.pow(10, r++)) % 10 | 0;
        if (ld !== rd) {
            return false;
        }
    }

    return true;
};

{
    const x = 121;
    const result = true;
    console.log(isPalindrome(x), result);
    console.log("---");
}
{
    const x = -121;
    const result = false;
    console.log(isPalindrome(x), result);
    console.log("---");
}
{
    const x = 10;
    const result = false;
    console.log(isPalindrome(x), result);
    console.log("---");
}
{
    const x = 11;
    const result = true;
    console.log(isPalindrome(x), result);
    console.log("---");
}
{
    const x = 1111;
    const result = true;
    console.log(isPalindrome(x), result);
    console.log("---");
}
{
    const x = 11111;
    const result = true;
    console.log(isPalindrome(x), result);
    console.log("---");
}
{
    const x = 11211;
    const result = true;
    console.log(isPalindrome(x), result);
    console.log("---");
}
{
    const x = 12111;
    const result = false;
    console.log(isPalindrome(x), result);
    console.log("---");
}
