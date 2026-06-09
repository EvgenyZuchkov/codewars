let humanYearsCatYearsDogYears = function(humanYears) {
    let arr = []
    arr.push(humanYears);
    if(humanYears <= 1) {
        arr.push(15)
        arr.push(15)
    } else if (humanYears <= 2) {
        arr.push(15+9)
        arr.push(15+9)
    } else if (humanYears >= 3) {
        arr.push(15+9+4*(humanYears-2))
        arr.push(15+9+5*(humanYears-2))
    }
    return arr
}
