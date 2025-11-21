//functions

function singHappyBirthday(){
    for(let i=0; i<=10; i++){
        console.log("Happy Birthday")
    }
}

// singHappyBirthday()

function sumTwoNumbers(num1, num2){
    return num1+num2
}

// console.log(sumTwoNumbers(3,4))

function isEven(number){
    if(number%2===0){
        return true
    } else{
        return false
    }
}

// console.log(isEven(3))

function firstCharacter(str){
    if(typeof str ==='string'){
        return str[0]
    } return 'Invalid Input'
}

// console.log(firstCharacter(123))


function findTarget(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target ){
            return i;
        }
    } 
    return -1;

}

let arr = [1, 2, 3, 4, 77, 8]
console.log(findTarget(arr, 77))