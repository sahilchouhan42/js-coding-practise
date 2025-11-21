//parameter destructuring

const person = {
    firstName: 'harshit',
    gender: 'male',
}

// const printDetails = (obj)=>{
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

const printDetails = ({firstName, gender})=>{
    console.log(firstName)
    console.log(gender)
}

printDetails(person)