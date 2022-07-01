// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
// In one move, you can increment or decrement an element of the array by 1.
// Test cases are designed so that the answer will fit in a 32-bit integer.

function minMove(arr) {
  if (arr.length === 1) {
    return 0;
  }
  arr.sort((a, b) => a - b);

  let counter = 0;

  let ref = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[ref] - arr[i];

    counter = counter + Math.abs(temp);
  }

  return counter;
}
const result = minMove([1, 2, 3]);

console.log(result);


