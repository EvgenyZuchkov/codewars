const XO = (str) => {
    let x = str.match(/x/gi)
    let o = str.match(/o/gi)
    return (x && x.length) === (o && o.length)
}

// function XO(str) {
//     let xCount = 0
//     let oCount = 0
//     str.toLocaleLowerCase().split('').forEach((s) => {
//         if (s === 'x') {
//             xCount++
//         }
//         if (s === 'o') {
//             oCount++
//         }
//     })
//     return xCount === oCount
// }