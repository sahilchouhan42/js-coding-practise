//objects inside array

const users = [
    {userId: 1, firstName:'harshit', gender: 'male'},
    {userId: 2, firstName:'mohit', gender: 'male'},
    {userId: 3, firstName:'shivani', gender: 'female'}
]

for(let user of users){
    console.log(user)
    console.log(user.userId)
    console.log(user.firstName)
    console.log(user.gender)
}