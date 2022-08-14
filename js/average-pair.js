// Write a function called averagePair. Given a sorted array of integers and target average,
// determind if there is a pair of calues in the array where the average of the pair equals the target avarage.

function averagePair(arr, target) {

  let start = 0;
  let end = arr.length - 1;
  let average = 0;
  while (start < end) {
    average = (arr[start] + arr[end]) / 2;

    if (average === target) {
      return true;
    } else if (average < target) {
      start++;
    } else {  
      end--;
    } 
  } 
  return false; 
} 

const resutl = averagePair([2, 4, 7, 3, 1], 5);  

console.log(resutl) 
 