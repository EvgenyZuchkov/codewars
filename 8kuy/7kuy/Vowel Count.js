function getCount(str) {
    let count = 0;
    str.split('').forEach((item) => {
        if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            count++;
        }
    })
    return count;
}