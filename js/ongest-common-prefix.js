const arr = ["flower", "flight", "flow"];

// const longestStr = strs.reduce((previousValue, currentValue) =>
//   previousValue.length > currentValue.length ? previousValue : currentValue
// );

function cheackPref(strs) {
  let common = "";
  let start = 0;
  let length = 0;
  let counter = 0;
  const longestStr = strs.reduce((previousValue, currentValue) =>
    previousValue.length > currentValue.length ? previousValue : currentValue
  );

  while (start < longestStr.length) {
    console.log("a");

    if (strs[counter].substr(start, length) === common) {
      length++;
      common = strs[counter].substr(start, length);
      
    } else {
      length = 0;
      start++;
      counter = 0
    }
  }
  return common;
}

console.log(cheackPref(arr));
