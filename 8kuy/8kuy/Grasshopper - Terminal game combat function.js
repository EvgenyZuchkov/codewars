function combat(health, damage) {
    return health < damage ? health = 0 : health - damage;
}

console.log(combat(20, 30));