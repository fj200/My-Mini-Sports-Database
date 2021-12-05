var express = require('express')
const favorite_sports = {}
const search_history = {}
var app = express()

app.get('/sport-data', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    if (req.query['sport'] == undefined)
        res.send(JSON.stringify({
            'error': 'sport not given in request params'
        }))

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    if (search_history[ip] == undefined)
        search_history[ip] = []
    if (!search_history[ip].includes(req.query['sport']))
        search_history[ip].push(req.query['sport'])

    var sport_name = req.query['sport'].toLowerCase().replaceAll(' ', '-')
    var description = 'Your intended sport not found!'
    var response = {}

    switch (sport_name) {
        case 'basketball':
            description = "Basketball is a game played between two teams of five players each on a rectangular court, usually indoors. Each team tries to score by tossing the ball through the opponent's goal, an elevated horizontal hoop and net called a basket."
            youtube_link = 'https://www.youtube.com/embed/oyjYgmsM00Q'
            break
        case 'baseball':
            description = "Baseball is a bat-and-ball game played between two opposing teams, typically of nine players each, that take turns batting and fielding. The game proceeds when a player on the fielding team, called the pitcher, throws a ball which a player on the batting team tries to hit with a bat."
            youtube_link = 'https://www.youtube.com/embed/I8VGW0C_GO4'
            break
        case 'table-tennis':
            description = "Table tennis is a game played inside by two or four people. The players stand at each end of a table which has a low net across the middle and hit a small light ball over the net, using small bats."
            youtube_link = 'https://www.youtube.com/embed/9ZoEMXyP9Lc'
            break
        case 'tennis':
            description = "Tennis is a game played with two opposing players (singles) or pairs of players (doubles) using tautly strung rackets to hit a ball of specified size, weight, and bounce over a net on a rectangular court."
            youtube_link = 'https://www.youtube.com/embed/jrhM3k84YJU'
            break
        case 'rugby':
            description = "Rugby is a 15-a-side team sport. The object of the game is to ground the ball behind the opponent's try line, into what is called the in-goal area. Rugby is played both with the ball in hand and by kicking the ball. However, when the ball is being carried in hand it can only be thrown or handed off backwards."
            youtube_link = 'https://www.youtube.com/embed/3t6hM5tRlfA'
            break
        case 'field-hockey':
            description = "Field hockey, also called hockey, outdoor game played by two opposing teams of 11 players each who use sticks curved at the striking end to hit a small, hard ball into their opponent's goal. It is called field hockey to distinguish it from the similar game played on ice."
            youtube_link = 'https://www.youtube.com/embed/8sYeGwgWSCQ'
            break
        case 'soccer':
            description = "Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms. The team that scores more goals wins. Football is the world's most popular ball game in numbers of participants and spectators."
            youtube_link = 'https://www.youtube.com/embed/5Yo23e0hB48'
            break
        case 'golf':
            description = "Golf is an individual sport played by hitting a ball with a club from a tee into a hole. The object is to get the ball into the hole with the least number of swings or strokes of the club. Golf is a hugely popular sport that is enjoyed by people of all ages. ... The playing area for golf is called a golf course."
            youtube_link = 'https://www.youtube.com/embed/99nN7WWNF1Q'
            break
        case 'volleyball':
            description = "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. ... The team that wins the rally is awarded a point and serves the ball to start the next rally."
            youtube_link = 'https://www.youtube.com/embed/9YvP2-YbIFs'
            break
        case 'cricket':
            description = "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. ... When ten batters have been dismissed, the innings ends and the teams swap roles."
            youtube_link = 'https://www.youtube.com/embed/g-beFHld19c'
            break
        default:
            sport_name = 'unknown'



            
    }

    response['sport_name'] = sport_name
    res.send(JSON.stringify({
        description,
        sport_name,
        youtube_link,
    }))
}).listen(3000);

app.get('/add-favorite-sport', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    if (req.query['sport'] == undefined)
        res.send(JSON.stringify({
            'error': 'sport not given in request params'
        }))

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    const sport_name = req.query['sport'].toLowerCase().replaceAll(' ', '-')
    if (favorite_sports[ip] == undefined)
        favorite_sports[ip] = []
    if (!favorite_sports[ip].includes(sport_name))
        favorite_sports[ip].push(sport_name)

    res.send('done')
})

app.get('/remove-favorite-sport', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    if (req.query['sport'] == undefined)
        res.send(JSON.stringify({
            'error': 'sport not given in request params'
        }))

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    const sport_name = req.query['sport'].toLowerCase().replaceAll(' ', '-')
    if (favorite_sports[ip] != undefined && favorite_sports[ip].includes(sport_name)) {
        favorite_sports[ip].splice(favorite_sports[ip].indexOf(sport_name), 1)
        if (!favorite_sports[ip].length)
            del(favorite_sports[ip])
    }

    res.send('done')
})

app.get('/get-search-history', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    res.send(JSON.stringify({
        'history': search_history[ip]? search_history[ip]: []
    }))
})

app.get('/get-favorite-sports', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    res.send(JSON.stringify({
        'favorite': favorite_sports[ip]? favorite_sports[ip]: []
    }))
})

console.log("Server is running!");