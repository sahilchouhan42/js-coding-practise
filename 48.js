//funtions inside functions

const app = ()=>{
    const myFunc =()=> console.log("my func called");
    const addTwoNumber = (n1, n2)=> n1 + n2;
    const multiplyTwoNumber = (a, b)=> a*b


    console.log('Inside App')
    myFunc()
    console.log(addTwoNumber(12, 10))
    console.log(multiplyTwoNumber(22, 11))
}

app()