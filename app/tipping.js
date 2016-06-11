(function () {
    var app = angular.module('Tipping', []);

    app.controller('TippingController', function () {
        this.better = {};
        this.bettingGroup = bettingGroup;
        this.tournament = tournament;

        better.bettingGroups.push(bettingGroup);
        better.gameBets.push(gameBet);
        better.gameBets.push(gameBet2);
        better.gameBets.push(gameBet3);

        bettingGroup.tournaments.push(tournament);
        bettingGroup.better.push(better);
        bettingGroup.gameBets.push(gameBet);
        bettingGroup.gameBets.push(gameBet2);
        bettingGroup.gameBets.push(gameBet3);

        tournament.bettingGroups.push(bettingGroup);
        tournament.tournamentRounds.push(tournamentRound);
        tournament.gameBets.push(gameBet);
        tournament.gameBets.push(gameBet2);
        tournament.gameBets.push(gameBet3);

        tournamentRound.tournament = tournament;
        tournamentRound.games.push(game);
        tournamentRound.games.push(game2);
        tournamentRound.games.push(game3);
        tournamentRound.pointPolicy = pointPolicy;

        game.gamer1 = gamers[0];
        game.gamer2 = gamers[1];
        game.tournamentRound = tournamentRound;

        game2.gamer1 = gamers[1];
        game2.gamer2 = gamers[0];
        game2.tournamentRound = tournamentRound;

        game3.gamer1 = gamers[0];
        game3.gamer2 = gamers[1];
        game3.tournamentRound = tournamentRound;

        pointPolicy.tournamentRounds.push(tournamentRound);

        gameBet.bettingGroup = bettingGroup;
        gameBet.better = better;
        gameBet.game = game;
        gameBet.tournament = tournament;

        gameBet2.bettingGroup = bettingGroup;
        gameBet2.better = better;
        gameBet2.game = game2;
        gameBet2.tournament = tournament;

        gameBet3.bettingGroup = bettingGroup;
        gameBet3.better = better;
        gameBet3.game = game3;
        gameBet3.tournament = tournament;

        this.setBetter = function (betterName) {
            this.better = better;
            this.better.name = betterName;
        }

        this.saveTipps = function () {
        }

    });
    //Models


    var tournament = {
        name: "WCS",
        bettingGroups: [],
        tournamentRounds: [],
        gameBets: []
    }

    var bettingGroup = {
        name: "Chaos-Krauts",
        tournaments: [],
        gameBets: [],
        better: []
    }

    var tournamentRound = {
        tournament: {},
        games: [],
        pointPolicy: {},
        playoffFormat: "BestOfOne"
    }

    var pointPolicy = {
        tournamentRounds: [{}],
        scorePoints: 5
    }

    var gameBet = {
        bettingGroup: {},
        better: [],
        tournament: {},
        game: {},
        predictedWinsGamer1: 0,
        predictedWinsGamer2: 0
    }
    var gameBet2 = {
        bettingGroup: {},
        better: [],
        tournament: {},
        game: {},
        predictedWinsGamer1: 0,
        predictedWinsGamer2: 0
    }
    var gameBet3 = {
        bettingGroup: {},
        better: [],
        tournament: {},
        game: {},
        predictedWinsGamer1: 0,
        predictedWinsGamer2: 0
    }

    var game = {
        gameBets: [],
        tournamentRound: {},
        gamer1: {},
        gamer2: {},
        winsGamer1: 0,
        winsGamer2: 0,
        gameState: "notStarted"
    }

    var game2 = {
        gameBets: [],
        tournamentRound: {},
        gamer1: {},
        gamer2: {},
        winsGamer1: 0,
        winsGamer2: 0,
        gameState: "notStarted"
    }

    var game3 = {
        gameBets: [],
        tournamentRound: {},
        gamer1: {},
        gamer2: {},
        winsGamer1: 0,
        winsGamer2: 0,
        gameState: "notStarted"
    }

    var better = {
        name: "",
        bettingGroups: [],
        gameBets: []
    }

    var gamers = [{
        name: "Scarlet",
        games: [],
    }, {
        name: "Nerchio",
        games: [],
    }]
})();