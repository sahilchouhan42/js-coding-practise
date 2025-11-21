//data types (primitive data types)
// string
//symbol
//number 
// null
//undefind
//boolean
//big int

//typeof operator - give data type of variable
let name = "sahil";
let number = 5;
let x = null;
let y; 
let z = BigInt(7);
let w = true;
console.log(typeof name, typeof number, typeof x, typeof y, typeof z, typeof w);

//convert number to string

let num = 22;
console.log(num, typeof num);
// num = String(num) official
num = num + ""; //shortcut

console.log(num, typeof num);

//convert number to string
let num2 = "23";
console.log(num2, typeof num2);
// num2 = Number.parseInt(num2)
num2 = +num2
console.log(num2, typeof num2);



