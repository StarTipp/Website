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

app.factory('BettingRound', function() {
    return BettingRound;
});

app.factory('BettingManager', function() {
    var BettingManager = {};
    BettingManager.getBettingRounds = function () {
        var BettingRounds = [new BettingRound('Better 1'), new BettingRound('Better 2')];
        return BettingRounds;
    };
    return BettingManager;
});