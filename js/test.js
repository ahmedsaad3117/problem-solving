const arr = [10, 20, 30];

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
    console.log(i);
  }, 1000);
}
