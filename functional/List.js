var List;

List = function () {
    this.values = [];

    if (arguments.length) {
        this.values = this.values.concat(Array.prototype.slice.apply(arguments, [0]));
    }
};

List.of = function () {
    return new List();
};

List.zip = function () {
    var args = Array.prototype.slice.apply(arguments, [0]),
        lists = args.filter(function (list) {
            return (list instanceof List || list instanceof Array);
        }),
        minLength,
        listIndex = -1,
        listItemIndex = -1,
        acc = new List(),
        ret = new List();

    if (args.length !== lists.length) {
        throw new Error("One of specified parameters is not a list nor instance of Array");
    }

    minLength = lists.reduce(function (currentMin, list) {
        if (list instanceof List && list.size() < currentMin) {
            return list.size();
        }

        if (list instanceof Array && list.length < currentMin) {
            return list.length;
        }

        return currentMin;
    }, Infinity);

    while (++listItemIndex < minLength) {
        while (++listIndex < lists.length) {
            if (lists[listIndex] instanceof List) {
                acc.append(lists[listIndex].get(listItemIndex));
            }

            if (lists[listIndex] instanceof Array) {
                acc.append(lists[listIndex][listItemIndex]);
            }
        }
        ret.append(acc);
        acc = new List();
        listIndex = -1;
    }

    return ret;
};

List.prototype.prepend = function (el) {
    this.values = [el].concat(this.values);

    return this;
};

List.prototype.append = function (el) {
    this.values = this.values.concat([el]);

    return this;
};

List.prototype.get = function (index) {
    return this.values[index];
};

List.prototype.set = function (index, el) {
    this.values[index] = el;

    return this;
};

List.prototype.size = function () {
    return this.values.length;
};


List.prototype.toArray = function () {
    return this.values;
};

List.prototype.map = function (func) {
    var index = -1,
        size = this.size(),
        newList = new List();

    if (!func || 'function' !== (typeof func)) {
        throw new Error("No function specified");
    }

    while (++index < size) {
        newList.append(func(this.get(index)));
    }

    return newList;
};

if ('undefined' !== (typeof module) && module && module.exports) {
    module.exports = List;
}
