// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    if (s.length % 2 === 0) {
        return s.substring((s.length/2) - 1, (s.length/2) + 1)
    } else {
        return s.substring((s.length/2) +1, (s.length/2))
    }
}

console.log(getMiddle('testing'))