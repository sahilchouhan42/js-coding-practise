//how to clone array

//how to concatenate array

let array1 = ['item1', 'item2']
// let array2 = array1
// let array2 = array1.slice(0) method 1
// let array2 = [].concat(array1) method 2
let array2 = [...array1]

console.log(array1)
console.log(array2)
console.log(array1===array2)

let num1 = [1, 2, 3]
let num2 = [...num1, 4, 5, 6]
console.log(num1)
console.log(num2)

let obj1 = {name: "anil", age:24}
let obj2 = {...obj1}
console.log(obj1)
console.log(obj2)
console.log(obj1===obj2)


let str = "krishna,muthaiya"
let Array1 = ['swami', 'ayar']
let Array2 = [...Array1, ...str.split(',')]
console.log(Array2)
