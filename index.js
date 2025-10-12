// function bigNum(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// }
// bigNum(10, 20);

// function podil(num) {
//   if (num % 2 === 0) {
//     console.log("Число ділиться на два");
//   } else {
//     console.log("число не ділиться на два");
//   }
// }
// podil(3);

// let it = 0;

// while (it < 10) {
//   console.log(1);
//   it++;
// }

// while(true){
//   console.log('НЄ');
//   break 
// }

// let i = 0;
// while(i < 10){
//   if (i % 2 === 0) {
//     console.log(i);
//   } 
//   i++;
// }

// let i = 0;
// while(true){
//   i++
// }


let userPassword = prompt("please enter true password")
let truePassword = 'qwerty123';

while(userPassword !== truePassword){
  userPassword = prompt("password is not true, please again")
}