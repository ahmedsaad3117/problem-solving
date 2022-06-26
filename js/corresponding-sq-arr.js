const arr1 = [1, 2, 3, 3];
const arr2 = [1, 9, 4, 9];

function corrSqr(arrr1, arrr2) {
  if (arrr1.length !== arrr2.length) return false;

  arrr1.sort((a, b) => a - b);
  arrr2.sort((a, b) => a - b);

  for (let i = 0; i < arrr1.length; i++) {
    if (arrr1[i] !== Math.sqrt(arrr2[i])) {
      return false;
    }
  }
  return true;
}

//console.log(corrSqr(arr1, arr2));

function corrSqrObj(arrObj1, arrObj2) {
  const obj1 = {};
  const obj2 = {};

  for (val of arrObj1) {
    obj1[val] = ++obj1[val] || 1;
  }
  for (val of arrObj2) {
    obj2[val] = ++obj2[val] || 1;
  }

  console.log(obj1);
  console.log(obj2);

  for (key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj1[key ** 2] !== obj2[key]) {
      return false;
    }
  }
  return true
}

corrSqrObj(arr1, arr2);
