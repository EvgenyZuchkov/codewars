function points(games) {
    let result = 0
    games.forEach(game => {
        if (game.split(':')[0] > game.split(':')[1]) {
            result += 3
        } else if (game.split(':')[0] < game.split(':')[1]) {
            result += 0
        } else if (game.split(':')[0] === game.split(':')[1]) {
            result += 1
        }
    })
    return result
}