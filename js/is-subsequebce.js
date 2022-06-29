// Write a function called isSubsequence which is take a two string and cheakes whether the characters in the frist string
// form a subsequebce of the characters in the second string.

function isSubsequence(subString, fullString) {
  let subCounter = 0;
  let fullCounter = 0;

  if (!subString) return true;

  while (fullCounter < fullString.length - subString.length) {
    if (subString[subCounter] === fullString[fullCounter]) {
      subCounter++;
    }
    if (subCounter === subString.length) return true;

    fullCounter++;
  }
  return false;
}

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }


console.log(isSubsequence("hello", "hello world"));
