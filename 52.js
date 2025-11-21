//rest parameters

function myFunc(a,b, c, ...d){
    
    console.log(`The value of a is ${a}`)
    console.log(`The value of b is ${b}`)
    console.log(`The value of c is ${c}`)
    console.log('The value of d is', Array.from(d))
} 


// myFunc(1, 2, 3, 4, 5, 6)

function addAll(...a){
    let total = 0;
    for(let numbers of a){
        total+=numbers
    } console.log(total)
    }

addAll(1, 2, 3, 4, 5)