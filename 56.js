//imp array methods 

//foreach
//map
//filter
//reduce

const numbers = [4, 2, 5, 8]

function multiplyBy2(number, index){
    console.log(`Index is: ${index}`)
    console.log(`${number}*2 = ${number*2}`)
}

multiplyBy2(numbers[0],0)
multiplyBy2(numbers[1],1)

for(let i=0; i<numbers.length; i++){
    multiplyBy2(numbers[i], i)
}

function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`)
}

numbers.forEach(myFunc)

numbers.forEach((number, index)=>console.log(`index is ${index} number is ${number}`))

numbers.forEach((number, i)=>console.log(`The number multiply by 2 is at index ${i} is ${number*2}`))

const users = [
    {firstName: "harshit", age:23},
    {firstName: "mohit", age:24},
    {firstName: "rohan", age:25},
    {firstName: "sohan", age:26},
]

users.forEach((user, i)=>console.log(`The name of user at ${i} is ${user.firstName} `))