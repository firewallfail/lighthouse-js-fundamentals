//returns true if the num is even or false if odd
const isEven = function (num) {
  return num % 2 === 0;
}
//stores the returned value in a variable and then passes them to console.log
// const tenIsEven = isEven(10);
// const elevenIsEven = isEven(11);

// console.log(tenIsEven);
// console.log(elevenIsEven);

//instead of saving the result to a variable this prints them directly
console.log(isEven(10));
console.log(isEven(11));