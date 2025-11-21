//callback functions

function myFunc2(name){
    console.log('Inside my func 2')
    console.log(`The name is ${name}`)
}

function mainFunc(callback){
    callback("sahil")
    console.log('Inside my main function')
}

mainFunc(myFunc2)