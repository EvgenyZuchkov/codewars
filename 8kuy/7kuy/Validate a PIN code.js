function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

// function validatePIN(pin) {
//     if (pin.length === 4 || pin.length === 6) {
//         return pin.split('').every(el => /^\d$/.test(el));
//     } else {
//         return false;
//     }
// }