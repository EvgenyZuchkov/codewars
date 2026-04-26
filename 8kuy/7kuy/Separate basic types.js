function separateTypes(input) {
    let result = {};
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === "number") {
            result.number = result.number || []
            result.number.push(input[i]);
        } else if (typeof input[i] === "string") {
            result.string = result.string || [];
            result.string.push(input[i]);
        } else if (typeof input[i] === "boolean") {
            result.boolean = result.boolean || [];
            result.boolean.push(input[i]);
        }
    }
    return result;
}