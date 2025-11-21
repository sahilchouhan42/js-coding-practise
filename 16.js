// and or operator

//and && operator
let firstName = "Harshit"
let age = 17;

// if(firstName[0]==="H" && age>18){
//     console.log('Yoy are a Man')
// } else {
//     console.log('You are a boy')
// }

//with ternary operator
let final = firstName[0]==="H"&&age>18 ? "You are a man": "You are a BOY"
console.log(final)

//or || operator

let num1= 21;
let num2= 11;

let anyNumEven = num1%2==0 || num2%2==0 ? "one of these two number are even":"Both are odd numbers"
console.log(anyNumEven);
