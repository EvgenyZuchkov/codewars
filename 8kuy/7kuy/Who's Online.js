friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]

const whosOnline = (friends) => {
    let result = {}
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
            result.online = result.online || []
            result.online.push(friends[i].username)
        } else if (friends[i].status === 'offline') {
            result.offline = result.offline || []
            result.offline.push(friends[i].username)
        } else if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
            result.away = result.away || []
            result.away.push(friends[i].username)
        }
    }
    return result
}

console.log(whosOnline(friends))


