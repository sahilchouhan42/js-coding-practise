// array destructuring

const myArray = ['value1', 'value2', 'value3', 'value4'];
// const var1 = myArray[0]
// const var2 = myArray[1]

let [var1,var2, ...myNewArray] = myArray
// const myNewArray = myArray.slice(2)

console.log(var1)
console.log(var2)
console.log(myNewArray)