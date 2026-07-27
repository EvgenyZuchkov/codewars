function sumTwoSmallestNumbers(numbers) {
    let minNum = numbers.sort((a, b) => a - b).slice(0, 2)
    return minNum[0] + minNum[1]
}


console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));