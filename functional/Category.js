/*global module*/

var Category,
    createCategoryTypeValidator,
    createCategoryInstanceValidator;

/**
 * Higher order function used as factory for type validation with use of 'typeof';
 *
 * Returns function which test value against 'typeof'. If value is of expected type
 * than value is being returned. Error is thrown otherwise.
 *
 * @method  createCategoryTypeValidator
 * @param   {string} type Expected type.
 * @returns {function} Newly created validator
 */
createCategoryTypeValidator = function (type) {
    'use strict';
    /**
     * Generated validation function.
     *
     * @method
     * @param {mixed} value Checked value
     * @returns {mixed} Identity
     * @throws Error
     */
    return function (value) {
        if (type === (typeof value)) {
            return value;
        } else {
            throw new Error(['Unexpected type of value: ', value, '. Expected type "', type, '" but "', (typeof value), '" is given.'].join(''));
        }
    };
};

/**
 * Higher order function used as factory for type validation with use of 'instanceof';
 *
 * Returns function which test value against 'instanceof'. If value is of expected instance
 * than value is being returned. Error is thrown otherwise.
 *
 * @method  createCategoryTypeValidator
 * @param   {object} object Expected object instance.
 * @param   {string} name Expected object instance name.
 * @returns {function} Newly created validation function
 */
createCategoryInstanceValidator = function (object, name) {
    /**
     * Generated validation function.
     *
     * @method
     * @param {mixed} value Checked value
     * @returns {mixed} Identity
     * @throws Error
     */
    return function (value) {
        if (value instanceof object) {
            return value;
        } else {
            throw new Error(['Value: ', Object.prototype.toString.call(value), ' is not instance of "', name, '".'].join(''));
        }
    };
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
    'Number': createCategoryTypeValidator('number'),
    'Null': createCategoryTypeValidator('null'),
    'Function': createCategoryTypeValidator('function'),
    'Undefined': createCategoryTypeValidator('undefined'),
    'Object': createCategoryInstanceValidator(Object, 'Object'),
    'Date': createCategoryInstanceValidator(Date, 'Date'),
    'RegExp': createCategoryInstanceValidator(RegExp, 'RegExp'),
    'Array': createCategoryInstanceValidator(Array, 'Array'),
    'addInstanceValidator': function (obj, name) {
        Category[name] = createCategoryInstanceValidator(obj, name);
    },
    getElementType: function (el) {
        if (el instanceof Object) {
            if (el.__type) {
                return el.__type;
            }
            return Object.prototype.toString.call(el);
        }

        if (null === el) {
            return 'null';
        }

        return (typeof el);
    },
    elementsTypesAreEqual: function (a, b) {
        var aType = Category.getElementType(a),
            bType = Category.getElementType(b);

        if (aType.length === bType.length && aType === bType) {
            return true;
        } else if ((aType === '[]' || bType === '[]') && Category.List) {
            try {
                Category.List(a);
                Category.List(b);

                return true;
            } catch (e) {}
        }

        throw new Error(['Elements types mismatch: "', aType, '" against "', bType, '"'].join(''));
    }
};

if ('undefined' !== (typeof module) && module && module.exports) {
    module.exports = {
        Category: Category
    };
}
