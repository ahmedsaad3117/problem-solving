// <!-- There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children. -->

function candys(arr) {
  const candys =  new Array(arr.length);
  let temp = Infinity;

  for (let i = 0; i < arr.length; i++) {
    console.log(candys);

    const minIndex = arr.indexOf(Math.min(...arr)); //  Math.min(...arr)
    if (
      arr[minIndex] > arr[minIndex + 1] ||
      arr[minIndex] > arr[minIndex - 1] ||
      arr[minIndex] > temp
    ) {
      candys[minIndex + 1] > candys[minIndex - 1]
        ? (candys[minIndex] = candys[minIndex + 1] + 1 || 2)
        : (candys[minIndex] = candys[minIndex - 1] + 1 || 2);

      temp = arr[minIndex];
      arr[minIndex] = Infinity;
    } else {
      candys[minIndex] = 1;
      temp = arr[minIndex];
      arr[minIndex] = Infinity;
    }
  }0
  const sum = candys.reduce((partialSum, a) => partialSum + a, 0);

  console.log(candys)
  return sum;
}

console.log(candys([1,3,2,2,1]));

console.log(5 > undefined++)