function enough(cap, on, wait) {
    return on + wait <= cap ? 0 : -(cap - on - wait)
}

console.log(enough(100, 60, 50))