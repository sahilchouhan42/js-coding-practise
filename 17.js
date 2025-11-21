// nested if else

let winningNumber = 19;
let guessNumber = +prompt("Guess Your Number");

if(guessNumber == winningNumber){
    console.log('You guess a right nymber');
} else {
    if (guessNumber<19){
    console.log('Your number is too low')
} else {
    console.log('Your number is too high')}
}
