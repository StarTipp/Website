(function () {
    var app = angular.module('Tipping', []);


    //Manages context specific data from server such as selected better, bettingGroup and tournament
    app.controller('ContextController', function($scope){
        seed();//simulates server database
        
        this.selectBetter = function (name) {
            //Call server to get information of the current logged in better
            $scope.better = better;
            $scope.better.name = name;
            $scope.better.bettingGroups.push(bettingGroup);
        }

        this.selectBettingGroup = function (name) {
            //Selects a bettingGroup and set it as active
            //Call Server to get information of the selected bettingGroup
            $scope.bettingGroup = bettingGroup;
            $scope.bettingGroup.name = name; //causes an undefined in the combobox on the startpage if there is one selected
            $scope.bettingGroup.tournaments.push(tournament);
            $scope.bettingGroup.better.push(better);
            $scope.bettingGroup.better.push(better2);
            $scope.bettingGroup.better.push(better3);
        }

        this.selectTournament = function (name) {
            //Selects a tournament and set it as active
            //Call Server to get information of the selected tournament
            $scope.tournament = tournament;
            $scope.tournament.name = name;// causes an undefined in the combobox on the startpage if there is one selected
            $scope.tournament.bettingGroups.push(bettingGroup);
            $scope.tournament.tournamentRounds.push(tournamentRound);

            $scope.tournament.gameBets.push(gameBet);
            $scope.tournament.gameBets.push(gameBet2);
            $scope.tournament.gameBets.push(gameBet3);

            $scope.better.gameBets.push(gameBet);
            $scope.better.gameBets.push(gameBet2);
            $scope.better.gameBets.push(gameBet3);

            $scope.bettingGroup.gameBets.push(gameBet);
            $scope.bettingGroup.gameBets.push(gameBet2);
            $scope.bettingGroup.gameBets.push(gameBet3);
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
        
        better.points = 10;
        better2.points = 20;
        better3.points = 30;
        
    });


    var seed = function () {

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
    }
    
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

    var better2 = {
        name: "Jonas",
        bettingGroups: [bettingGroup],
        gameBets: []
    }

    var better3 = {
        name: "Sebastian",
        bettingGroups: [bettingGroup],
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