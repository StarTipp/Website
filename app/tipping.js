(function () {
    var app = angular.module('Tipping', []);

    app.controller('TippingController', function () {
        this.bettingGroup = bettingGroup;
        this.bettingGroup.tournaments.push(tournament);
        this.bettingGroup.better.push(better);
        tournament.bettingGroups.push(bettingGroup);
        tournament.tournamentRounds.push(tournamentRound);
        tournament.gameBets.push(gameBet);
        tournamentRound.tournament = tournament;
        tournamentRound.games.push(game);
        tournamentRound.pointPolicy = pointPolicy;
        game.gamer1 = gamers[0];
        game.gamer2 = gamers[1];
        game.tournamentRound = tournamentRound;
        pointPolicy.tournamentRounds.push(tournamentRound);
        gameBet.bettingGroup=bettingGroup;
        gameBet.better = better;
        gameBet.game = game;
        gameBet.tournament = tournament;

    });
    //Models


    var tournament = {
        name:"WCS",
        bettingGroups:[],
        tournamentRounds:[],
        gameBets:[]
    }

    var bettingGroup = {
        name:"Chaos-Krauts",
        tournaments:[],
        gameBets:[],
        better:[]
    }

    var tournamentRound = {
        tournament:{},
        games:[],
        pointPolicy:{},
        playoffFormat:"BestOfOne"
    }

    var pointPolicy = {
        tournamentRounds:[{}],
        scorePoints:5
    }

    var gameBet = {
        bettingGroup:{},
        better:[],
        tournament:{},
        game:{},
        predictedWinsGamer1:0,
        predictedWinsGamer2:0
    }

    var game = {
        gameBets:[],
        tournamentRound:{},
        gamer1:{},
        gamer2:{},
        winsGamer1:0,
        winsGamer2:0,
        gameState:"notStarted"
    }

    var better = {
        name:"Florian Ahuis",
        bettingGroups:[],
        gameBets:[]
    }

    var gamers = [{
        name:"Scarlet",
        games:[],
    },{
        name:"Nerchio",
        games:[],
    }]
})();