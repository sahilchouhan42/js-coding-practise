//difference between dot notation and bracket notationke

const key = "email"

const person = {name: "harshit", age: 26, "person hobbies": ['playing', 'sleeping', 'cricket']}

person[key] = 'harshit@test.com'//this method is use to add key as variable in object
// person.key = 'harshit@test.com'
console.log(person)

console.log(person['person hobbies'])