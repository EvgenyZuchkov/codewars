function accum(s) {
    return s.split('').map((num, i) => num.toUpperCase() + num.toLowerCase().repeat(i)).join('-')
}