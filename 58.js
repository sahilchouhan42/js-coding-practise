//filter method

const numbers = [1,2, 3, 4, 5, 6, 8, 9, 10 , 11, 22]

const Even = numbers.filter((num)=>num%2===0 && num>5)
console.log(Even)


const personsData = [
    {firstName: "harshit", age: 26, email:"harshit@test.com", city: 'indore'},
    {firstName: "mohit", age: 27, email:"mohit@test.com", city: 'dewas'},
    {firstName: "sahil", age: 28, email:"sahil@test.com", city: 'indore'},
]

console.log(personsData)
const personFromIndore = personsData.filter((singlePerson)=>singlePerson.city=== 'indore' && singlePerson.age===28)
console.log(personFromIndore)
console.log(personsData)

