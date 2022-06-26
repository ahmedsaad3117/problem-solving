// implement a function that is accept a sorted array, and counts the unique values in the array.

function countUniqueVal(arr) {
  const set = new Set([...arr]);

  return set.size;
}

console.log(countUniqueVal([1, 1, 1, 1, 2, 2, 2, 3, 5, 4])); // BigO(??)

function countUniqueValPointers(arr) {
  let poinert = 0;
  let tempPoinert = poinert + 1;
  let uniqueVal = 0;
  while (poinert < arr.length) {
    if (arr[poinert] !== arr[tempPoinert]) {
      poinert = tempPoinert;
      uniqueVal++;
      tempPoinert++;
    } else {
      tempPoinert++;
    }
  }
  return uniqueVal;
}

console.log(countUniqueValPointers([1, 1, 1, 1, 2, 2, 2, 3, 5, 4])); // BigO(n)

function countUniqueValPointersFor(arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValPointersFor([1, 1, 1, 1, 2, 2, 2, 3, 5, 4])); // BigO(n)
