//lexical scope
const myVar = 'value1'

const myApp = ()=>{

    const myFunc = ()=>{
        const myVar = 'Value 999'
        console.log("Inside my func", myVar)
    }

    console.log(myVar)
    myFunc()
}
myApp()