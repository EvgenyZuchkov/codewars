function addProperty(obj, prop, value) {
    if (prop in obj) {
        throw new Error('Error message')
    } else {
        obj[prop] = value;
    }
}