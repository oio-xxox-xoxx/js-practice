{
    let x = 2;
    console.log(x);
  }
  // x can NOT be used here
  console.log(x);


  {
    var x = 2;
    console.log(x);
  }
  // x CAN be used here
  console.log(x);




let x = "John Doe";
// x can NOT be used
let x = 0;
console.log(x);


const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
console.log(x);