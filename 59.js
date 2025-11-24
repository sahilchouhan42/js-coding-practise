//reduce method

const numbers = [1, 2, 3, 4, 5]

//sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
})

// accumulator    currentvalue        return
//  1                  2               1+2=3
//  3                  3                3+3 = 6
// 6                   4                6+4 = 10
//10                    5                10+5 = 15

console.log(sum)

const userCart = [
    {productId:1, productName:'mobile', price:12000},
    {productId:2, productName:'laptop', price:22000},
    {productId:3, productName:'tv', price:15000},
]

const totalPrice = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice+= currentProduct.price
},0)
console.log(totalPrice)
