// for(let i = 0; i < 10; i++){
//   console.log(i);
//

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    if (num === 0 || num === 1) {
      return 1;
    } else if (num < 0) {
      return null;
    } else {
      result = result * i;
    }
  }
  return result;
}
console.log(factorial(3));
