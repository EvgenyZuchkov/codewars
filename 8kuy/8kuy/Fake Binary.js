function fakeBin(x) {
    return x.split('').map(word => word < 5 ? 0 : 1).join('')
}