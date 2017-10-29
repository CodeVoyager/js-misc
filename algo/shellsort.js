(function () {
    'use strict';
    var gaps = [701, 301, 132, 57, 23, 10, 4, 1],
        shellsort = function (input) {
            for (var g = 0; g < gaps.length; g++) {
                var gap = gaps[g];
                for (var i = gap; i < input.length; i++) {
                    var temp = input[i];
                    for (var j = i; j >= gap && input[j - gap] > temp; j -= gap) {
                        input[j] = input[j - gap];
                    }
                    input[j] = temp;
                }
            }
            return input;
        };

    console.log(shellsort([5, 3, 4, 2, 1, 6]), 'First run');
    console.log(shellsort([5, 3, 4, 2, 1, 6].concat([8, 9, 7])), 'Second run');
    console.log(shellsort([13, 5, 3, 4, 2, 1, 14, 6].concat([10, 9, 7, 12, 11, 8])), 'Third run');
}())