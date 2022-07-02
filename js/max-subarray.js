// Write a function that is accept array of integers and a number called n,
// the function should calculate the maximum sum of n consecutive elements in the array

// Level Created
function maxSubArraySum(arr, n) {
  if (arr.length < n) return;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  
  for (let i = 1; i < arr.length - n + 1; i++) {
    tempSum = maxSum + arr[n + i - 1] - arr[i - 1];

    console.log(maxSum, tempSum);
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

const res = maxSubArraySum([5, 1, 3, 6], 3);

console.log(res);
