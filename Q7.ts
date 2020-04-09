/*Q.7.A shopkeeper wants to discount its prices due to the holiday season.
Write a typescript function which will take all the prices and provide a discount of 50% on each price.*/


const DISCOUNT_AMT = 0.5;
let getDiscountedPrice = (prices: number[]): number[] => {
   return prices.map(price => price * DISCOUNT_AMT);
};

console.log(getDiscountedPrice([100, 200, 300]));
