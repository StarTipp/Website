(function () {
    var app = angular.module('Tipping', []);


    //Manages context specific data from server such as selected better, bettingGroup and tournament
    app.controller('ContextController', function ($scope) {

        this.selectBetter = function (name) {
            //Call server to get information of the current logged in better
            $scope.better = better;
            $scope.better.name = name;
            $scope.better.bettingGroups = [];
            $scope.better.bettingGroups.push(bettingGroup);
        }

        this.selectBettingGroup = function (name) {
            //Selects a bettingGroup and set it as active
            //Call Server to get information of the selected bettingGroup
            $scope.bettingGroup = bettingGroup;
            $scope.bettingGroup.name = name;
            $scope.bettingGroup.tournaments = [];
            $scope.bettingGroup.tournaments.push(tournament);
            $scope.bettingGroup.better.push(better);
            $scope.bettingGroup.better = [];
            $scope.bettingGroup.better.push(better2);
            $scope.bettingGroup.better.push(better3);
        }

        this.selectTournament = function (name) {
            //Selects a tournament and set it as active
            //Call Server to get information of the selected tournament
            $scope.tournament = tournament;
            $scope.tournament.name = name;
            $scope.tournament.bettingGroups.push(bettingGroup);
            $scope.tournament.tournamentRounds.push(tournamentRound);

            tournamentRound.tournament = tournament;
            tournamentRound.games.push(game);
            tournamentRound.games.push(game2);
            tournamentRound.games.push(game3);
            tournamentRound.games.push(game4);
            tournamentRound.pointPolicy = pointPolicy;

            pointPolicy.tournamentRounds.push(tournamentRound);

            $scope.better.gameBets.push(gameBet);
            $scope.better.gameBets.push(gameBet2);
            $scope.better.gameBets.push(gameBet3);
            $scope.better.gameBets.push(gameBet4);
        }

        this.selectBetter("Florian");//simulate the login
    });

    //Controller for the tipping page. 
    app.controller('TippingController', function () {
        this.saveTipps = function () {
        }
    });

    //Controller for the overview page. 
    app.controller('OverviewController', function () {
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

    var gamers = [{
        name: "Scarlet",
        games: [],
    }, {
        name: "Nerchio",
        games: [],
    }, {
        name: "Showtime",
        games: [],
    }, {
        name: "Pould",
        games: [],
    }, {
        name: "Hydra",
        games: [],
    }, {
        name: "Maasa",
        games: [],
    }, {
        name: "Lilbow",
        games: [],
    }, {
        name: "NEEB",
        games: [],
    }]

    var game = {
        gamer1: gamers[0],
        gamer2: gamers[1],
        winsGamer1: 0,
        winsGamer2: 0,
        gameState: "notStarted"
    }

    var game2 = {
        gamer1: gamers[2],
        gamer2: gamers[3],
        winsGamer1: 0,
        winsGamer2: 0,
        gameState: "notStarted"
    }

    var game3 = {
        gamer1: gamers[4],
        gamer2: gamers[5],
        winsGamer1: 0,
        winsGamer2: 0,
        gameState: "notStarted"
    }

    var game4 = {
        gamer1: gamers[6],
        gamer2: gamers[7],
        winsGamer1: 0,
        winsGamer2: 0,
        gameState: "notStarted"
    }

    var gameBet = {
        game: game,
        predictedWinsGamer1: 0,
        predictedWinsGamer2: 0
    }

    var gameBet2 = {
        game: game2,
        predictedWinsGamer1: 0,
        predictedWinsGamer2: 0
    }

    var gameBet3 = {
        game: game3,
        predictedWinsGamer1: 0,
        predictedWinsGamer2: 0
    }

    var gameBet4 = {
        game: game4,
        predictedWinsGamer1: 0,
        predictedWinsGamer2: 0
    }

    var better = {
        name: "",
        bettingGroups: [],
        gameBets: [],
        points: 10
    }

    var better2 = {
        name: "Jonas",
        points: 20
    }

    var better3 = {
        name: "Sebastian",
        points: 30
    }

})();