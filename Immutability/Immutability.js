// Javascript Immutability

// Inteview Questions --
// 1- What is immutability ?
// 2- Are JS Variable Immutable ?
// 3- Are Ojject and Arrays Immutable ?
// 4- How to extend an object ? 
// -5 How to stop Object Extension ? 
//  6- How to understand two Objects are equal ?
// 7- What is freezing ?
// 8- How to check Frozen Object ? 
// 9- Freeze are seal , When and Why ?
// 10- Deep Freezing in Object .


// Immutable - Which can't be  change. A value in js which can't be change.
// Mutable - Which can be change.


// let name = "Alex"
// name = "Bob"

// console.log(name)


// Mutable - Reference Value
let  user = {
    name: 'John',
    age: 25,
    country: 'USA',
    email: 'john@mail.com'
}

user = {}

console.log(user)