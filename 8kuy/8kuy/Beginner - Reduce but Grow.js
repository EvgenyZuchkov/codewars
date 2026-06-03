function grow(x){
    let result = 1
    x.forEach(num => {
        result *= num
    })
    return result
}