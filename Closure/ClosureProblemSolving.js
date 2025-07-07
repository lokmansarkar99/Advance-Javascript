// // Closure Problem - 1

// function outer () {
//     var x = 10

//     function inner () {
//         console.log(x)
//     }

//     x = 20;
//    return inner
// }
// var innerFunc = outer()
// innerFunc()



//  // Closure Problem - 2

//  function outer () {
//     var x = 10;
//     function inner () {
//         var y = 5
//         console.log(x + y)
        
//     }
//     var x = 20;
//     return inner;

//  }

//  var innerFunc = outer()
//  innerFunc()


// Closure Problem - 3
// (function outer(x) {

//     return (function inner(y) {
//         console.log(x);

//     })(105);

// })(100);



// CLOSURE AND VARIABLE SHADOWING 

// let count = 0;
// (function logCount() {
//     if(count === 0) {
//         let count = 1
//         console.log(count)
//     }
//     console.log(count)
// })()



// CLOSUTE AND LOOPS


// Closure dont close a immediate value,, closure close reference

// // loop and var 
// for(var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }

// // loop and let
// for(let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }


// loop and a inner function 
for(var i = 0; i < 5; i++) {
(function(j) {
        setTimeout(() => {
        console.log(j)
    }, 1000);
})(i)
}
