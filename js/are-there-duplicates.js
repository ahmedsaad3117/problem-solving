// Implement a function called, areThereDuplicates which acceptes variable number of arguments, and checks whether there are any duplicates
// among the arguments passed in.

//Level Created
function areThereDuplicates(...args) {
  const argsArr = args;

  const obj = {};

  for (let val of args) {
    obj[val] = ++obj[val] || 1;
  }

  for (let key in obj) {
    if (obj[key] > 1) return false;
  }
  return true;
}

const res = areThereDuplicates("as", 5, "s", 5);

//Level Created
function areThereDuplicatesPointer(...args) {
  args.sort((a, b) => a > b);

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) return true;

    start++;
    next++;
  }

  return false;
}

const res2 = areThereDuplicatesPointer("as", 5, "s", 5);

//One Liner Solution
function areThereDuplicatesLiner() {
  return new Set(arguments).size !== arguments.length;
}

const res3 = areThereDuplicatesLiner("as", 5, "s", 5);
console.log(res3);
