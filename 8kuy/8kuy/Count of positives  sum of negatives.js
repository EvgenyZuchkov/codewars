function countPositivesSumNegatives(input) {
    let result = [];
    let positives = 0;
    let negatives = 0;
    if (input !== null && input.length !== 0) {
        input.forEach((el) => {
            el > 0 ? positives++ : negatives += el;
        })
        result.push(positives)
        result.push(negatives)
        return result;
    } else {
        return []
    }
}