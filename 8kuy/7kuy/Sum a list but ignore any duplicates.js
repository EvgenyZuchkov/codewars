function sumNoDuplicates(numList) {
    let sum = 0;
    for (let i = 0; i < numList.length; i++) {
        const num = numList[i];
        const count = numList.filter(item => item === num).length;
        if (count < 2) {
            sum += num;
        }
    }
    return sum;
}