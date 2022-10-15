// Write a function that accepts sorted array of integers. the function should find the frist pair where the sum is 0.
// return an array that includes both values that sum to zero or undefiend if pair does not exist.

//Created
function sumZeroN2(arr) {
  let pair = undefined;
  for (let i = 0; i <= arr.length; i++) {
    arr.find((num) => {
      if (arr[i] + num === 0) {
        return (pair = [arr[i], num]);
      }
    });
    if (pair) {
      return pair;
    }     
  }
}

const res = sumZeroN2([4, -1, -3, 3, 0, 1, 3, 2]); // O(n^2)
console.log(res);

//Created

// Shoud be sorted
function sumZeroN(arr) {
  let sum = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left--;
    }
  }
}

const res2 = sumZeroN2([-4, -3, -3, -1, 0, 1, 2, 3, 10]); // O(n)
console.log(res2);
