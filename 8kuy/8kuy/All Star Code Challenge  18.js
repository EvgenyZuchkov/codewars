function strCount(str, letter){
    let count = 0;
    str.split('').forEach(char => {
        if (char === letter){
            count++;
        }
    })
    return count;
}