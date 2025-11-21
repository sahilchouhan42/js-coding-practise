//how to iterate objects
const person = {name: "harshit", age: 26, "person hobbies": ['playing', 'sleeping', 'cricket']}

// for(let i=0; i<person.length; i++){
//     console.log(person[i])
// }

// for(let key in person){
//     console.log(key, person[key])
// }

const data = Object.keys(person)
console.log(data)

console.log(Array.isArray(data))

for(let key of data){
    console.log(`${key}: ${person[key]}`)
}

