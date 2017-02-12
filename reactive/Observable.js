/*global module, Node*/


(function (global) {
    'use strict';
    var Observable;

    /**
     * Creates new instance of Ebservable event stream
     * @method Observable
     * @param  {Node} node Root node of event stream.
     * @param  {string} eventName Event which we listen for.
     * @returns {Observable} Newly created instance
     */
    Observable = function (node, eventName) {
        if (!node || !(node instanceof Node)) {
            throw new Error('Observable: No node specified!');
        }
        this.rootNode = node;
        this.eventName = eventName;
        this.__queue = [];
        this.subscribers = [];
        this.acc = null;
        this.eventListener = function (event) {
            this._resolve(event);
        }.bind(this);

        node.addEventListener(eventName, this.eventListener);

        return this;
    };

    /**
     * Identity function used with copying queues
     * @method  _id
     * @param   {mixed} id value
     * @returns {mixed} Identity
     */
    Observable.prototype._id = function (id) {
        return id;
    };

    /**
     * Resolves queue of observations
     * @method  _resolve
     * @param   {Event} event Original event
     * @returns {void}
     */
    Observable.prototype._resolve = function (event) {
        var index = -1,
            value = event;

        if (0 === this.subscribers.length) {
            return;
        }

        while (++index < this.__queue.length) {
            switch (this.__queue[index][this.CONSTANTS.QUEUE_FUNC_TYPE]) {
            case this.CONSTANTS.TYPE_MAP:
                value = this.__queue[index][this.CONSTANTS.QUEUE_FUNC](value);
                break;
            case this.CONSTANTS.TYPE_REDUCE:
                this.acc = this.__queue[index][this.CONSTANTS.QUEUE_FUNC](this.acc, value);
                value = this.acc;
                break;
            case this.CONSTANTS.TYPE_FILTER:
                if (!this.__queue[index][this.CONSTANTS.QUEUE_FUNC](value)) {
                    return;
                }
                break;
            default:
                continue;
            }
        }

        index = -1;
        this.__lastValue = value;

        while (++index < this.subscribers.length) {
            this.subscribers[index](value, this.acc);
        }
    };

    /**
     * Parent method for adding elements to observation queue
     * @method  _passMethod
     * @param   {function}    f    Function to adding
     * @param   {string}    type Function type
     * @returns {Observable} If queue was non-empty returns new observable with all previous queue and new method eppended
     * @throws {Error} If f is not a function
     */
    Observable.prototype._passMethod = function (f, type) {
        if ('function' !== (typeof f)) {
            throw new Error('Map accepts only functions');
        }

        var _observable = this;

        if (0 < this.__queue.length) {
            _observable = new Observable(this.rootNode, this.eventName);
            _observable.__queue = this.__queue.map(this._id);
        }

        _observable.__queue.push([type, f]);

        return _observable;
    };

    /**
     * Adds map function to Observable
     * @method  map
     * @param   {function} f Passed method
     * @returns {Observable} instance of Observable
     */
    Observable.prototype.map = function (f) {
        return this._passMethod(f, this.CONSTANTS.TYPE_MAP);
    };
    /**
     * Adds reduce function to Observable
     * @method  reduce
     * @param   {function} f Passed method
     * @returns {Observable} instance of Observable
     */
    Observable.prototype.reduce = function (f) {
        return this._passMethod(f, this.CONSTANTS.TYPE_REDUCE);
    };
    /**
     * Adds filter function to Observable
     * @method  filter
     * @param   {function} f Passed method
     * @returns {Observable} instance of Observable
     */
    Observable.prototype.filter = function (f) {
        return this._passMethod(f, this.CONSTANTS.TYPE_FILTER);
    };
    /**
     * Adds subscriber for current Observable queue
     * @method  subscribe
     * @param   {function}  f Listener
     * @returns {Observable} Observable instance
     */
    Observable.prototype.subscribe = function (f) {
        if ('function' !== (typeof f)) {
            throw new Error('Map accepts only functions');
        }

        this.subscribers.push(f);

        return this;
    };

    /**
     * Unmounts event Listener for Observable
     * @method  close
     * @returns {void}
     */
    Observable.prototype.close = function () {
        this.__queue.length = 0;
        this.rootNode.removeEventListener(this.eventName, this.eventListener);
    };

    Observable.prototype.CONSTANTS = {
        TYPE_MAP: 'TYPE_MAP',
        TYPE_FILTER: 'TYPE_FILTER',
        TYPE_REDUCE: 'TYPE_REDUCE',
        QUEUE_FUNC_TYPE: 0,
        QUEUE_FUNC: 1
    };

    if ('undefined' !== (typeof module) && module && module.exports) {
        module.exports = {
            Observable: Observable
        };
    }

    if (global) {
        global.Observable = Observable;
    }
}(window));
