function findAverage(array) {
    // if (array.length !== 0) {
    //     let sum = 0;
    //     array.forEach((item) => {
    //         sum += item
    //     })
    //     return sum / array.length;
    // } else {
    //     return 0;
    // }

    return array.length === 0 ? 0 : array.reduce((acc, num) => acc + num, 0)/array.length;
}