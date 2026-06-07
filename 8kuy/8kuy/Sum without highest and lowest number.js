function sumArray(array) {
    let result = 0
    if (!array || array.length <= 2) {
        return 0
    }else {
        let max = Math.max(...array)
        let min = Math.min(...array)

        let maxIndex = array.indexOf(max)
        let minIndex = array.indexOf(min)

        let newArray = array.filter((x, i )=> i !== maxIndex && i !== minIndex)

        newArray.forEach(x => {
            result += x
        })
    }
    return result;
}

console.log(sumArray([6, 2, 1, 8, 10]));