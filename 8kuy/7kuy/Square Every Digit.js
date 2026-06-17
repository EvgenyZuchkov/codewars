function squareDigits(num){
    return +num.toString().split('').map(num=> num**2).join('');
}

console.log(squareDigits(765));