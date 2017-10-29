(function () {
    'use strict';
    var quicksort = function (input, cmp, start, end) {
            start = start || 0;
            end = end || input.length - 1;
            cmp = cmp || quicksort.cmp;
            var middle = quicksort.partition(input, cmp, start, end);

            if (start < middle - 1) {
                quicksort(input, cmp, start, middle - 1);
            }
            if (end > middle) {
                quicksort(input, cmp, middle, end);
            }
            return input;
        },
        _input = [5, 3, 4, 2, 1, 6];

    quicksort.partition = function (input, cmp, start, end) {
        var pivot = input[Math.floor((start + end) / 2)],
            temp;

        while (start <= end) {
            while (cmp(input[start], pivot) < 0) {
                start += 1;
            }
            while (cmp(input[end], pivot) > 0) {
                end -= 1;
            }
            if (start <= end) {
                temp = input[start];
                input[start] = input[end];
                input[end] = temp;
                start += 1;
                end -= 1;
            }
        }

        return start;
    };

    quicksort.cmp = function (a, b) {
        return a - b;
    };

    console.log(quicksort(_input), 'First run');
    console.log(quicksort(_input.concat([8,9,7])), 'Second run');
    console.log(quicksort(_input.concat([8,9,7,12, 11, 10])), 'Third run');
    console.log(quicksort([
        {
            name: 'Adam',
            age: 20
        },
        {
            name: 'Eve',
            age: 17
        },
        {
            name: 'Anna',
            age: 8
        },
        {
            name: 'George',
            age: 12
        },
    ], function (a, b) {
        return a.age - b.age;
    }), 'People');
}());