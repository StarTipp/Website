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

app.controller('startpageController', function($scope, User, BettingManager) {
    $scope.User = User;
    $scope.BettingRounds = BettingManager.getBettingRounds();
});

app.controller('mainController', function($scope) {
});