function isIsogram(str) {
    // return str.toLowerCase().split('').every((el, index, arr) => arr.indexOf(el) === index);

    return new Set(str.toLowerCase()).size === str.length
}