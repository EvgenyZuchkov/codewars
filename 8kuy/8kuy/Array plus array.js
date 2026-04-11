function arrayPlusArray(arr1, arr2) {
    let sumArray1 = 0
    let sumArray2 = 0
    let sum = 0

    for (let i = 0; i < arr1.length; i++) {
        sumArray1 += arr1[i]
    }

    for (let i = 0; i < arr2.length; i++) {
        sumArray2 += arr2[i]
    }

    sum = sumArray1 + sumArray2
    return sum
}