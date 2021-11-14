//from previous exercise
// const isEven = function (num) {
//   return num % 2 === 0;
// }

//same as isEven() from previous exercise but inverted (!== 0)
const isOdd = function (num) {
  return num % 2 !== 0;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));