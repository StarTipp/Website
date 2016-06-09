class BettingRound {
    constructor(name) {
        this.name = name;
        this.tournaments = {};
        this.gameBets = {};
        this.betters = {};
    }
};

app.factory('User', function() {
    return {
        Name : ''
    };
});

app.factory('SelectedBettingRound', function() {
    return BettingRound
});

app.factory('BettingRound', function() {
    return BettingRound;
});

app.factory('BettingManager', function() {
    var BettingManager = {};
    var SelectedBettingRound;
    var BettingRounds;
    
    BettingManager.getBettingRounds = function () {
        BettingRounds = [new BettingRound('Tipprunde 1'), new BettingRound('Tipprunde 2')];
        return BettingRounds;
    };
    
    return BettingManager;
});