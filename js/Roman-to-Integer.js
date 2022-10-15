function mainSymolEquel(symbol) {
  switch (symbol) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
}

function romanCalc(symbols) {
  let total = 0;
  for (let i = 0; i < symbols.length; i++) {
    let num = mainSymolEquel(symbols[i]);
    if (symbols[i] === "I" && (symbols[i + 1] === "V" ||symbols[i + 1] === "X")) {
      num = -num;
    }
    if (symbols[i] === "X" && (symbols[i + 1] === "L" ||symbols[i + 1] === "C")) {
        num = -num;
    }
    if (symbols[i] === "C" && (symbols[i + 1] === "D" ||symbols[i + 1] === "M")) {
        num = -num;
    }
    total = total + num;
  }

  return total;
}

console.log(romanCalc("IX"));
