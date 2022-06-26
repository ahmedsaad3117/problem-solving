function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("aax", "axx"));

function validAnagramFreq(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};

  for (val of str1) {
    obj1[val] = ++obj1[val] || 1;
  }
  for (val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagramFreq("aax", "axx"));

function validAnagramObj(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val]--;
    }
  }
  return true;
}

console.log(validAnagramObj("aax", "axx"))

