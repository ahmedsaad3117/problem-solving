// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

//Level Created
function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let digit of num1) {
    obj1[digit] = ++obj1[digit] || 1;
  }
  for (let digit of num2) {
    obj2[digit] = ++obj2[digit] || 1;
  }

  for (let key in obj1) {
    if ( obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const res = sameFrequency(1882, 2881);
