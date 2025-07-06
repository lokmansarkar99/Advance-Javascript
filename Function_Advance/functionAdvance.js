// -----------------------------
// 1. What is a Function?
// -----------------------------
// A function is a reusable block of code that performs a specific task.

function sayHello() {
  console.log("Hello World");
}

sayHello(); // Calling the function


// -----------------------------
// 2. Functions Visually (Representation)
// -----------------------------
/*
  Think of a function as a machine:
  input -> [function] -> output
*/

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5


// -----------------------------
// 3. Terminologies
// -----------------------------
/*
  - Function Declaration: function greet() {}
  - Function Call/Invocation: greet()
  - Parameters: Inputs defined in function (e.g., a, b)
  - Arguments: Real values passed during call (e.g., 2, 3)
*/


// -----------------------------
// 4. Function Definition
// -----------------------------
function multiply(x, y) {
  return x * y;
}

console.log(multiply(4, 5)); // 20


// -----------------------------
// 5. Function as Expression
// -----------------------------
const divide = function(a, b) {
  return a / b;
};

console.log(divide(10, 2)); // 5


// -----------------------------
// 6. Parameter vs Argument
// -----------------------------
function greet(name) { // 'name' is a parameter
  console.log("Hello, " + name);
}

greet("Lokman"); // 'Lokman' is an argument


// -----------------------------
// 7. Returning from Function
// -----------------------------
function square(n) {
  return n * n; // return sends value back to caller
}

const result = square(6);
console.log(result); // 36


// -----------------------------
// 8. Default Parameter
// -----------------------------
function welcome(user = "Guest") {
  console.log(`Welcome, ${user}`);
}

welcome("John"); // Welcome, John
welcome();       // Welcome, Guest


// -----------------------------
// 9. Rest Parameter
// -----------------------------
function sum(...numbers) { // '...numbers' collects all args into an array
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


// -----------------------------
// 10. Arrow Function
// -----------------------------
const double = (num) => num * 2;
console.log(double(4)); // 8


// -----------------------------
// 11. Arrow Function & this
// -----------------------------
const person = {
  name: "Alice",
  greet: function() {
    setTimeout(() => {
      console.log("Hello, " + this.name); // Arrow keeps outer 'this'
    }, 1000);
  }
};

person.greet(); // Hello, Alice


// -----------------------------
// 12. Nested Functions
// -----------------------------
function outer() {
  console.log("Outer function");

  function inner() {
    console.log("Inner function");
  }

  inner();
}

outer();


// -----------------------------
// 13. Scope & Closure
// -----------------------------
function outerScope() {
  let count = 0;

  return function innerScope() {
    count++;
    console.log("Count is", count);
  };
}

const counter = outerScope();
counter(); // 1
counter(); // 2 (Closure remembers outer variables)


// -----------------------------
// 14. Callback Functions
// -----------------------------
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData(function(data) {
  console.log(data); // Data loaded
});


// -----------------------------
// 15. Higher-Order Function
// -----------------------------
function higherOrder(fn) {
  console.log("Before calling callback");
  fn();
  console.log("After calling callback");
}

higherOrder(() => console.log("I'm a callback!"));


// -----------------------------
// 16. Pure Functions
// -----------------------------
function pureAdd(a, b) {
  return a + b; // Doesn't modify outer state
}

console.log(pureAdd(2, 3)); // 5


// -----------------------------
// 17. IIFE (Immediately Invoked Function Expression)
// -----------------------------
(function() {
  console.log("IIFE runs immediately");
})();


// -----------------------------
// 18. Call Stack
// -----------------------------
function functionA() {
  functionB();
}

function functionB() {
  console.log("Inside function B");
}

functionA(); // functionB called by functionA, added to call stack


// -----------------------------
// 19. Recursion
// -----------------------------
function factorial(n) {
  if (n === 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // 120
