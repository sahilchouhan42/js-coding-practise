//map method
//map always create new array

const numbers = [3, 4, 6, 1, 8]

const square = function(number){
    return number*number
}

const squareNumber = numbers.map(square)
console.log(squareNumber)

const personsData = [
    {firstName: "harshit", age: 26, email:"harshit@test.com"},
    {firstName: "mohit", age: 27, email:"mohit@test.com"},
    {firstName: "sahil", age: 28, email:"sahil@test.com"},
]

const singlePersonName = personsData.map((singlePerson)=>singlePerson.firstName)
const singlePersonAge = personsData.map((singlePerson)=>singlePerson.age)
const singlePersonEmail = personsData.map((singlePerson)=>singlePerson.email)
console.log(singlePersonName)
console.log(singlePersonAge)
console.log(singlePersonEmail)