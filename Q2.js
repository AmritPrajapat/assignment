"use strict";
exports.__esModule = true;
var i = 0;
var num = 0;
for (i = 0; i <= 100; i++) {
    var count = null;
    for (num = i; num >= 1; num--) {
        if (i % num == 0) {
            count = count + 1;
        }
    }
    if (count == 2) {
        console.log(i);
    }
}
