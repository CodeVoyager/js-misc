var curryFunction;

/**
 * Transforms function into curried version of itself.
 * In this form function accepts one parameter at the time. Returns new function
 * which also accepts only one parameter. Original function is being used when last
 * argument is being passed.
 *
 * Useful when partial application is being created.
 *
 * Example:
 *
 * add = (a, b) => a + b
 *
 * x = add(2,3) // 5
 *
 * curriedA = curry(add);
 *
 * x = curriedA(2)(3) // 5
 * add2ToNumber = curriedA(2)
 *
 * x = add2ToNumber(3) // 5
 * y = add2ToNumber(4) // 6
 *
 * @method  curryFunction
 * @param   {function} func Transformed function
 * @param   {number} numOfArgs Optional parameter holding number of target parameters
 * @returns {function} Curried version of original function
 */
curryFunction = function (func, numOfArgs) {
    numOfArgs = numOfArgs || func.length;

    /**
     * Helper function for gathering parameters.
     * @method  subCurry
     * @param   {array} prevStateArgs List of already gathered parameters
     * @returns {function}
     */
    function innerCurry(prevStateArgs) {
        return function (arg) {
            var args = prevStateArgs.concat(arg);

            if (numOfArgs > args.length) {
                return innerCurry(args);
            } else {
                return func.apply(this, args);
            }
        }
    }

    return innerCurry([]);
}

if ('undefined' !== (typeof module) && module && module.exports) {
    module.exports = {
        curryFunction: curryFunction
    };
}
