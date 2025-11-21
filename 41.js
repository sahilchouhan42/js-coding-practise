//destructuring of objects

const obj = {
    key1: 'value1',
    key2: 'value2',
    city: 'indore',
    food: 'pizza'
}

// let var1 = obj.key1
// let var2 = obj.key2
// console.log(var1, var2)

const {key1:var1, key2:var2, ...restData} = obj

console.log(var1)
console.log(var2)
console.log(restData)