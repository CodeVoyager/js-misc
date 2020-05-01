/**
 * @see {https://leetcode.com/problems/min-stack/}
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this._minVal = null;
  this._items = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if ((null === this._minVal) || x < this._minVal) {
    this._minVal = x;
  }

  this._items.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this._items.pop();

  if (undefined === val) {
    this._minVal = null;

    return null;
  }

  if (val === this._minVal) {
    this._findNewMin();
  }

  return val;
};

/**
 * @return {void}
 */
MinStack.prototype._findNewMin = function () {
  this._minVal = this._items.reduce(
    (acc, x) => Math.min(acc, x),
    Number.MAX_VALUE
  );
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this._items[this._items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this._minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2