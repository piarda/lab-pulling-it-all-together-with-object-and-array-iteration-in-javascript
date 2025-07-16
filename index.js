function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    const game = gameObject();

    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    }
    // retrieves any home player's name

    if (game.away.players[playerName]) {
        return game.away.players[playerName].points;
    }
    // retrieves any away player's
}

function shoeSize(playerName) {
    const game = gameObject();

    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;
    }
    // retrieves any home player's shoe size

    if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;
    }
    // retrieves any away player's shoe size
}

function teamColors(teamName) {
    const game = gameObject();

    if (game.home.teamName === teamName) {
        return game.home.colors;
    }
    // retrieves home team's colors

    if (game.away.teamName === teamName) {
        return game.away.colors;
    }
    // retrieves away team's colors
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
// retrieves both home/away team names

function playerNumbers(teamName) {
    const game = gameObject();
    let players;

    if (game.home.teamName === teamName) {
        players = game.home.players;
    } else if (game.away.teamName === teamName) {
        players = game.away.players;
    }
    // finds either home or away team players

    if (players) {
        return Object.values(players).map(player => player.number);
    }
    // adds (maps) jersey numbers only into an array
}

function playerStats(playerName) {
    const game = gameObject();

    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    }
    // retrieves stats from home team player

    if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
    // retrieves stats from away team player

}

function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoeSize = 0;
    let reboundsBiggestShoe = 0;

    const allPlayers = [
        ...Object.values(game.home.players),
        ...Object.values(game.away.players)
    ]
    // home and away players in one array

    for (let player in allPlayers) {
        const stats = allPlayers[player];
        
        if (stats.shoe > biggestShoeSize) {
            biggestShoeSize = stats.shoe;
            reboundsBiggestShoe = stats.rebounds;
        }
    }
    // loops through players, checking shoe sizes and finding players rebounds

    return reboundsBiggestShoe;
}

function mostPointsScored() {
    const game = gameObject();
    const allPlayers = [
        ...Object.entries(game.home.players),
        ...Object.entries(game.away.players)
    ];
    // combines all players again

    let maxPoints = 0;
    let topScorer = "";

    for (const [name, stats] of allPlayers) {
        if (stats.points > maxPoints) {
            maxPoints = stats.points;
            topScorer = name;
        }
    }
    // loops through players and stats, checking points

    return topScorer;
}

function winningTeam() {
    const game = gameObject();

    function totalPoints(team) {
        return Object.values(team.players)
            .reduce((total, player) => total + player.points, 0);
    }
    // The .reduce array method calculates the total sum of the array. We're setting the initial total at 0 and then player points will be added.

    const homeTeamPoints = totalPoints(game.home);
    const awayTeamPoints = totalPoints(game.away);
    // total pts of the home team, and total pts of the away team

    if (homeTeamPoints > awayTeamPoints) {
        return game.home.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
        return game.away.teamName
    }
    // returns the team name based upon who had more points
}

function playerWithLongestName() {
    const game = gameObject();

    const allPlayerNames = [
        ...Object.keys(game.home.players),
        ...Object.keys(game.away.players)
    ];
    // creates array with all player names

    let longestName = "";

    for (const name of allPlayerNames) {
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    // loops through the length of all player names

    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();

    const allPlayers = [
        ...Object.entries(game.home.players),
        ...Object.entries(game.away.players)
    ]
    // creates array of key-value pairs (players and their stats)

    let longestName = "";
    let mostSteals = 0;
    let playerWithMostSteals = "";

    for (const [name, stats] of allPlayers) {
        if (name.length > longestName.length) {
            longestName = name;
        }
        if (stats.steals > mostSteals) {
            mostSteals = stats.steals;
            playerWithMostSteals = name;
        }
    }
    // finds the longest name of all players, and then the most steals of all stats

    return longestName === playerWithMostSteals;
    // returns if it's true/false that the longest player name has the most steals
}
