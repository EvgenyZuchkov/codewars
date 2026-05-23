function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    let sum = 0
    classPoints.forEach(n => sum += n)
    let averageScore = sum / classPoints.length
    return yourPoints > averageScore

}

console.log(betterThanAverage([2,3], 5))