/*
 * https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/
 */

/*
 ***You have n bags numbered from 0 to n - 1.
 ***You are given two 0-indexed integer arrays capacity and rocks. The ith bag can hold a maximum of capacity[i] rocks and
 ***currently contains rocks[i] rocks.
 ***You are also given an integer additionalRocks, the number of additional rocks you can place in any of the bags.
 ***Return the maximum number of bags that could have full capacity after placing the additional rocks in some bags.
 */

// let capacity = [2, 4, 4, 5],
//   rocks = [1, 2, 4, 4],
//   additionalRocks = 111;
// Output: 3

// function maximumBags(capacity, rocks, additionalRocks) {
//   let numMaximumBags = 0;
//   for (let i = 0; i < capacity.length; i++) {
//     let numRocksToFull = rocksToFull(capacity[i], rocks[i]);
//     if (numRocksToFull == 0) {
//       numMaximumBags++;
//     } else {
//       if (additionalRocks >= numRocksToFull) {
//         additionalRocks = additionalRocks - numRocksToFull;
//         numMaximumBags++;
//       }
//     }
//   }
//   return numMaximumBags;
// }

// function rocksToFull(capacity, rocks) {
//   return capacity - rocks;
// }

// console.log(maximumBags(capacity, rocks, additionalRocks));

l = console.log;

let capacity = [2, 4, 4, 5],
  rocks = [1, 2, 4, 4],
  additionalRocks = 111;

function maximumBags(capacity, rocks, additionalRocks) {
  let numMaximumBags = 0;

  const rocksToFullArr = capacity.map((elm, index) => {
    return rocksToFull(elm, rocks[index]);
  });

  rocksToFullArr.sort((a, b) => a - b);

  rocksToFullArr.map((elm) => {
    if (elm == 0) {
      numMaximumBags++;
    } else {
      if (additionalRocks >= elm) {
        additionalRocks = additionalRocks - elm;
        numMaximumBags++;
      }
    }
  });

  return numMaximumBags
}

function rocksToFull(capacity, rocks) {
  return capacity - rocks;
}

l(maximumBags(capacity, rocks, additionalRocks));
