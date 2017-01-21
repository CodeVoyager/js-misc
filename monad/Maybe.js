var Maybe, Just, Nothing, Category;


if ('undefined' !== (typeof require) && 'function' === (typeof require)) {
    var Category = require('./Category');
}

Category = Category || window.Category;

/**
 * Constructor for Maybe. Used only as inheritance base type class
 * @constructor
 * @method Maybe
 */
Maybe = function () {};
/**
 * Constructor for Just value of Maybe
 * @constructor
 * @method Just
 * @param  {mixed} value Held value
 */
Just = function (value) {
    this.value = value;
};
/**
 * Constructor for Nothing value of Maybe
 * @constructor
 * @method Nothing
 */
Nothing = function () {};

/**
 * Applies function to held value. If error occurs or Nothing value is held Nothing instance is being returned
 * @method  apply
 * @param   {function} f Function to be applied to held value
 * @lends Maybe
 * @returns {Maybe} New value
 */
Maybe.prototype.apply = function (f) {
    var newValue;

    if (this instanceof Nothing) {
        return this;
    }

    try {
        newValue = new Just(f(this.value));
    } catch (e) {
        newValue = new Nothing();
    }

    return newValue;
};

/**
 * Function used for returning held value. Returns held value or Nothing
 * @method  getValue
 * @returns {mixed} Held value
 * @lends Maybe
 */
Maybe.prototype.getValue = function () {
    if (this instanceof Nothing) {
        return this;
    }

    if (undefined === this.value) {
        return new Nothing();
    }

    return this.value;
};

Just.prototype = new Maybe();
Nothing.prototype = new Maybe();

if (Category) {
    Category.addInstanceValidator(Maybe, 'Maybe');
    Category.addInstanceValidator(Just, 'Just');
    Category.addInstanceValidator(Nothing, 'Nothing');
}

if ('undefined' !== (typeof module) && module && module.exports) {
    module.exports = {
        Maybe: Maybe,
        Just: Just,
        Nothing: Nothing
    };
}
