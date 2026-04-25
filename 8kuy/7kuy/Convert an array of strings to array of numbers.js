function toNumberArray(stringarray){
    let result = [];
    for (let i = 0; i < stringarray.length; i++){
        result.push(parseFloat(stringarray[i]));
    }
    return result;
}

console.log(toNumberArray(["1.1","2.2","3.3"]));