//Prints "Hello, world" when the function is called
// const sayHello = function () {
//   console.log("Hello, world");
// }

// sayHello();

//Prints "Hello, (name)" when function is called with an arguement
const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

//prints "Hello, " + name to console without returning anything from the function
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John');

//doesn't print anything but returns "Hello, " + name to be passed into something else ( variable here )
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
