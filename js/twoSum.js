//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

//Input: nums = [2,7,11,15], target = 9

// function twoSum(arr, target) {
//   let orginelArr = arr.slice();
//   let sum = 0;
//   let start = 0;
//   let end = arr.length - 1;
//   let result = [];
//   arr.sort((a, b) => a - b);

//   while (start < end) {
//     console.log(arr[start], arr[end]);
//     sum = arr[start] + arr[end];
//     if (sum === target) {
//       result = [arr[start], arr[end]];
//       break;
//     } else if (sum < target) {
//       start++;
//     } else {
//       end--;
//     }
//   }
//   console.log(result);

//   if (result[0] === result[1]) {
//     return [
//       orginelArr.indexOf(result[0]),
//       orginelArr.indexOf(result[1], orginelArr.indexOf(result[0]) + 1),
//     ];
//   }

//   return [orginelArr.indexOf(result[0]), orginelArr.indexOf(result[1])];
// }

// let res = twoSum([-1, -2, -3, -4, -5], -8);

// console.log(res);

// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let sum = arr[i] + arr[j];
//       if (sum === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// let res = twoSum([-1, -2, -3, -4, -5], -8);

// console.log(res);

//Not created
function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {}
  for (let j = i + 1; j < arr.length; j++) {
    let sum = arr[i] + arr[j];
    if (sum === target) {
      return [i, j];
    }
  }
}

let res = twoSum([-1, -2, -3, -4, -5], -8);

console.log(res);

  