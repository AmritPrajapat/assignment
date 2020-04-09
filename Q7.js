var DISCOUNT_AMT = 0.5;
var getDiscountedPrice = function (prices) {
    return prices.map(function (price) { return price * DISCOUNT_AMT; });
};
console.log(getDiscountedPrice([100, 200, 300]));
var inputArr = [1, 2, 3];
inputArr.map(function (x) {
    console.log(x);
});
