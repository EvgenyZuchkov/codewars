function squareSum(numbers){
    let sum = 0;
    for(let i = 0; i <= numbers.length-1; i++){
        sum += Math.pow(numbers[i], 2);
    }
    return sum
}