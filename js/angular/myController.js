app.controller('loginController', function($scope, $location, User) {
    $scope.User = User;
    
    $scope.login = function () {
        //var user = new User();
        //user.name = $scope.username;
        //sharedPreferences.setUser(user);
        $location.path('/start');
        //$location.url('startpage.html');
    }
});

app.controller('startpageController', function($scope, $location, User, BettingManager) {
    $scope.User = User;
    $scope.BettingRounds = BettingManager.getBettingRounds();

    $scope.selectBettingRound = function (bettingRound) {
        BettingManager.SelectedBettingRound = bettingRound;
        $location.path('/tip');
    }
});

app.controller('mainController', function($scope, $location, User, BettingManager) {
    $scope.User = User;
    $scope.SelectedBettingRound = BettingManager.SelectedBettingRound;
});