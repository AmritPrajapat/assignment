// Q.8.Write a function (getEvenAndSort) that can be called on any array, and it returns the subarray of only the even numbers, but sorted.
// [12,3,2,1,7,6].getEvenAndSort()



export {};
let j: number;
let n: number;
let a: number;
let i: number;

let getEvenAndSort = (numbers: number[]): number[] => {
  const arrLength = numbers.length;
  let arr: number[] = numbers.filter((x) => x % 2 === 0);

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

console.log(getEvenAndSort([12,3,2,1,7,6]));
