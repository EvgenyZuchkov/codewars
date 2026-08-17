// return masked string
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// function maskify(cc) {
//     return cc.split('').map((s, index) => {
//         return index >= cc.length - 4 ? s : '#'
//     }).join('')
// }

