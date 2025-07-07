// Method 1 - for call a inner function
// function outer () {
//     console.log("Outer")
//     function inner() {
//         console.log("Inner")
//     }
//     inner()
// }

// outer()

// Method -2 : for call a inner function - retrun from outer function
// function outer () {
//     console.log("Outer")
//  return function inner() {
//         console.log("Inner")
//     }

// }
// const x = outer()

// x()

// Nested Inner Functions

// function O () {
//     function i() {
//         function j() {

//         }
//         j()
//         function k () {
//             console.log("Function K")
//         }
//         k()
//     }

//     i()
// }

// O()

// Inner - Outer  Function Rules
// Rule-1: Inner function can access all outer function variable.
// Lexical Scope : A function can access all his variable, and in his parent scope can access all his parent variables.

// Rule-2:  Outer function cant access inner function variables.
// function parent () {
//     var houseName = "ShantiNiketon"
//     function son () {
//         var scooter = "Activa"
//         houseName = "AnondoNiketon"
//         console.log(houseName)
//     }

//     son()
//     // console.log(scooter)
// }

// parent()

// CLOSURE --

// inner variable can depend on outer function
// function outer (x) {

//     function inner(y) {
//         if(x > 1) {
//             console.log(y)
//         }
//         else {
//             console.log(y * 2)
//         }

//     }

//     inner(3)
// }

// outer(4)

// CLOSURE --
// -- A inner function can access his lexical scoping ,, inner fuction variable and inner function parameter  with a lifetime.

// CLOSURE called beacuse .. Inner function is closed to his Parent Function area .  Inner function even work if outer function execution finised also ..
// function parent (hasOuterInput) {
//     var houseName = "ShantiNiketon"
//     function son () {
//         if(!hasOuterInput) {
//             houseName = "AnondoNiketon"
//         }
//         var scooter = "Activa"

//         console.log(houseName)
//     }

//     son()
//     // console.log(scooter)
// }

// parent(true)
// *** Interview Important Question. 
 // Normal function execution process garbage collection , and Closure function execution garbage collection has difference..  closure  parent function variable dont garbage collected , inner function still can access . 
// function parent() {
//   var houseName = "ShantiNiketon";
//   return function son() {
//     houseName = "AnondoNiketon";

//     var scooter = "Activa";

//     console.log(houseName);
//   };
// }

// const mySon = parent();

// mySon();

// here parentFunctin housename  dont garbage collected , untill mySon called , because in mySon parent() called , and its return son function which  has access to houseName.  this is closure....



// CLOSURE AND VARIABLE SHADOWING: 



// CLOSUTE AND LOOPS:
// closure and loops with var , iife function , let ... 
// Closure dont close a immediate value,, closure close reference

