//Nested destructuring

const users = [
    {userId: 1, firstName:'harshit', gender: 'male'},
    {userId: 2, firstName:'mohit', gender: 'male'},
    {userId: 3, firstName:'shivani', gender: 'female'}
]

const [user1, user2, user3] = users;

console.log(user1)
console.log(user2)
console.log(user3)

const [{firstName, userId}, , {gender}] = users
console.log(firstName)
console.log(userId)
console.log(gender)