var Category,
    createCategoryTypeValidator,
    createCategoryInstanceValidator,
    Maybe;

if ('udefined' !== (typeof require) && 'function' === (typeof require)) {
    var Maybe = require('../monad/Maybe');
}

/**
 * Higher order function used as factory for type validation with use of 'typeof';
 *
 * Returns function which test value against 'typeof'. If value is of expected type
 * than value is being returned. Error is thrown otherwise.
 *
 * @method  createCategoryTypeValidator
 * @param   {string} type Expected type.
 * @returns {function}
 */
createCategoryTypeValidator = function (type) {
    /**
     * Generated validation function.
     *
     * @method
     * @param {mixed} value Checked value
     * @returns {mixed}
     * @throws Error
     */
    return function (value) {
        if (type === (typeof value)) {
            return value;
        } else {
            throw new Error(["Unexpected type of value: ", value, '. Expected type "', type, '" but "', (typeof value), '" is given.'].join(''));
        }
    }
};

/**
 * Higher order function used as factory for type validation with use of 'instanceof';
 *
 * Returns function which test value against 'instanceof'. If value is of expected instance
 * than value is being returned. Error is thrown otherwise.
 *
 * @method  createCategoryTypeValidator
 * @param   {string} type Expected type.
 * @returns {function}
 */
createCategoryInstanceValidator = function (object, name) {
    /**
     * Generated validation function.
     *
     * @method
     * @param {mixed} value Checked value
     * @returns {mixed}
     * @throws Error
     */
    return function (value) {
        if (value instanceof object) {
            return value;
        } else {
            throw new Error(["Value: ", Object.prototype.toString.call(value), ' is not instance of "', name, '".'].join(''));
        }
    }
};

/**
 * Holder for category validation functions
 * @type {Object}
 * @see createCategoryTypeValidator
 * @see createCategoryInstanceValidator
 */
Category = {
    'String': createCategoryTypeValidator('string'),
    'Bool': createCategoryTypeValidator('boolean'),
    'Nubmer': createCategoryTypeValidator('number'),
    'Null': createCategoryTypeValidator('null'),
    'Undefined': createCategoryTypeValidator('undefined'),
    'Object': createCategoryInstanceValidator(Object, 'Object'),
    'Date': createCategoryInstanceValidator(Date, 'Date'),
    'RegExp': createCategoryInstanceValidator(RegExp, 'RegExp'),
    'Array': createCategoryInstanceValidator(Array, 'Array')
};

if (Maybe) {
    Category.Maybe = createCategoryInstanceValidator(Maybe.Maybe, 'Maybe');
    Category.Just = createCategoryInstanceValidator(Maybe.Just, 'Just');
    Category.Nothing = createCategoryInstanceValidator(Maybe.Nothing, 'Nothing');
}


if ('undefined' !== (typeof module) && module && module.exports) {
    module.exports = {
        Category: Category
    };
}
