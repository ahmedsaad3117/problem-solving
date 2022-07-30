// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (arr) {
  let compare = arr[0];
  let temp = arr[0][0]; 
  let wordPointer = 0;

  for (let i = 1; i < arr.length; i++) {
    if(isCommen(temp,arr[i])){
      
    }
  }
};

function isCommen(str, arr) {
  return arr.includes(str);
}
