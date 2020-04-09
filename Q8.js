"use strict";
// Q.8.Write a function (getEvenAndSort) that can be called on any array, and it returns the subarray of only the even numbers, but sorted.
// [12,3,2,1,7,6].getEvenAndSort()
exports.__esModule = true;
var j;
var n;
var a;
var i;
var getEvenAndSort = function (numbers) {
    var arrLength = numbers.length;
    var arr = numbers.filter(function (x) { return x % 2 === 0; });
    for (i = 0; i < arrLength; ++i) {
        for (j = i + 1; j < arrLength; ++j) {
            if (arr[i] > arr[j]) {
                a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }
        }
    }
    return arr;
};
console.log(getEvenAndSort([12, 3, 2, 1, 7, 6]));
