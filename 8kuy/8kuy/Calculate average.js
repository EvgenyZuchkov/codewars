function findAverage(array) {
    if (array.length !== 0) {
        let sum = 0;
        array.forEach((item) => {
            sum += item
        })
        return sum / array.length;
    } else {
        return 0;
    }
}