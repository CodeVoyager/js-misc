// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/**
 * Number proxy
 *
 * @param {number} v
 *
 * @returns {NumberProxy}
 */
function NumberProxy(v) {
    this.v = v;
}

NumberProxy.prototype.value = function() {
    if (this instanceof NumberProxy) {
        return this.v;
    }
    throw new Error("Illegal usage");
};

/**
 * Solution
 *
 * @param {number[]} A
 * @returns {NumberProxy[]}
 */
function solution(A) {
    let i = -1;
    const res = [];
    while (++i < A.length) {
        res.push(new NumberProxy(A[i]));
    }

    return res;
}

{
    const input = [4, 2];
    const expected = [new NumberProxy(4), new NumberProxy(2)];
    const result = solution(input);
    let i = -1;
    console.log(JSON.stringify(expected), JSON.stringify(result));
    while (++i < result.length) {
        if (input[i] !== result[i].value()) {
            throw new Error("Numbers are not the same");
        }
        if (result[i].hasOwnProperty("value")) {
            throw new Error("method value not from prototype");
        }
        if (i > 0) {
            if (result[i].value !== result[i - 1].value) {
                throw new Error("Different value methods");
            }
        }
    }
}

{
    const input = [4];
    const expected = [new NumberProxy(4)];
    const result = solution(input);
    let i = -1;
    console.log(JSON.stringify(expected), JSON.stringify(result));
    while (++i < result.length) {
        if (input[i] !== result[i].value()) {
            throw new Error("Numbers are not the same");
        }
        if (result[i].hasOwnProperty("value")) {
            throw new Error("method value not from prototype");
        }
        if (i > 0) {
            if (result[i].value !== result[i - 1].value) {
                throw new Error("Different value methods");
            }
        }
    }
}

{
    const input = [];
    const expected = [];
    const result = solution(input);
    let i = -1;
    console.log(JSON.stringify(expected), JSON.stringify(result));
    while (++i < result.length) {
        if (input[i] !== result[i].value()) {
            throw new Error("Numbers are not the same");
        }
        if (result[i].hasOwnProperty("value")) {
            throw new Error("method value not from prototype");
        }
        if (i > 0) {
            if (result[i].value !== result[i - 1].value) {
                throw new Error("Different value methods");
            }
        }
    }
}
