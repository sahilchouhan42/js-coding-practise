//objects

//objects stores key value pairs
//objects dont have index

//how to create objects
const person = {name: "harshit", age: 26, hobbies: ['playing', 'sleeping', 'cricket']}
console.log(person)

//how to access data from objects
console.log(person.name)
console.log(person.age)
console.log(person.hobbies)

// for(let values of person.hobbies){
//     console.log(values)
// }

//how to add key value pairs in object

person.gender = "male"
console.log(person)

//bracket notation to access objects keys

console.log(person['gender'])

//bracket notation for add key in object
person['city'] = 'delhi'
console.log(person)