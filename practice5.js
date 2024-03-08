const x = 10;
console.log(x);
// Here x is 10

{
const x = 2;
console.log(x);
// Here x is 2
}

console.log(x);
// Here x is 10



var a = 2;     // Allowed
console.log(a);
var a = 3;     // Allowed
console.log(a);
a = 4;         // Allowed
console.log(a);


const b = 2;       // Allowed
console.log(b);

{
  const b = 3;   // Allowed
  console.log(b);
}

{
  const b = 4;   // Allowed
  console.log(b);
}

carName = "Volvo";
var carName;
console.log(carName);

/*alert (carname);
const carname = "Volvo";
console.log(carname); => error*/

