// const arr = [10, 20, 30];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(arr[i]);
//     console.log(i);
//   }, 1000);
// }

function schoolDist(num, arrOfTalents) {
  if (num < 3) return 0;
  const team = [];

  
  for (let i = 0; i < arrOfTalents.length; i++) {
    
    console.log(arrOfTalents[i])
    if(!team.includes(arrOfTalents[i])){
      team.push(arrOfTalents[i])
      console.log("ss")
    }
  }
  return team
}

console.log(schoolDist(7,[1,3,1,2,2,3]))