/*
* Question 1 = var vs let
*/

// Hoisting demo - run in console
let demoHoisting = function() {

  if(true){
    //console.log(v); // undefined
    //console.log(l); // error

    var v = 2;
    let l = 1;
  }

  console.log(v); // 2
  console.log(l); // error
}
demoHoisting();

/*
* Comparison operator == and ===
* */

'1' == 1 // true (value)
'1' === 1 // false (type and value)

/*
* const vs let
*/

let a = 1;
a = 2;
console.log(a); //2

const c = 1;
c = 2;
console.log(c); // error
