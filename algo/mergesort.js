(function () {
    'use strict';
    var mergeSort = function (input, cmp, start, end) {
        start = start || 0;
        end = end || input.length;
        cmp = cmp || mergeSort.cmp;

        if (Math.abs(end - start) <= 1) {
            return [];
        }
        if (start < end) {
            var middle = Math.ceil((start + end) / 2);

            mergeSort(input, cmp, start, middle);
            mergeSort(input, cmp, middle, end);
            mergeSort.merge(input, cmp, start, middle, end);
        }

        return input;
    };

    mergeSort.merge = function (input, cmp, start, middle, end) {
        var leftSize = middle - start,
            rightSize = end - middle,
            maxSize = Math.max(leftSize, rightSize),
            left = [],
            right = [],
            i = -1;

        while (++i < maxSize) {
            left.push(input[start + i]);
            right.push(input[middle + i]);
        }

        i = 0;

        while (undefined !== left[0] || undefined !== right[0]) {
            if (undefined !== left[0] && undefined !== right[0]) {
                if (cmp(left[0], right[0]) < 0) {
                    input[start + i] = left.shift();
                } else {
                    input[start + i] = right.shift();
                }
            } else if (undefined !== left[0]) {
                input[start + i] = left.shift();
            } else {
                input[start + i] = right.shift();
            }
            ++i;
        }

        return input;
    };


    mergeSort.cmp = function (a, b) {
        return a - b;
    };

    console.log(mergeSort([5, 3, 4, 2, 1, 6]), 'First run');
    console.log(mergeSort([5, 3, 4, 2, 1, 6].concat([8,9,7])), 'Second run');
    console.log(mergeSort([5, 3, 4, 2, 1, 6].concat([7,12, 11, 8,9, 10])), 'Third run');
}());