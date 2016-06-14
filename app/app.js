(function () {
    var app = angular.module('Startipp', ["Tipping"]);

    //Controller
    app.controller('LoginController', function ($scope) {
        $scope.loggedIn = true;
        $scope.username = "Florian";

        this.login = function (username,password) {
            if(password === "1234"){
                $scope.loggedIn = true;
                $scope.username = username;
            }
        }

        this.logout = function () {
            $scope.loggedIn = false;
            $scope.username = "";
        }
    });

    app.controller('NavigationController', function ($scope) {
        this.activeTab = "startpage";

        this.setActive = function (tab) {
            if($scope.loggedIn){
                this.activeTab = tab;
            }
            else {
                this.activeTab = "login";
            }
        }
        
        this.isActive = function (tab) {
            return this.activeTab === tab;
        }
    });

    //Directives
    app.directive('loginPage', function () {
        return { restrict: 'E', templateUrl: 'pages/login-page.html' }
    });

    app.directive('startPage', function () {
        return { restrict: 'E', templateUrl: 'pages/start-page.html' }
    });

    app.directive('tippingPage', function () {
        return { restrict: 'E', templateUrl: 'pages/tipping-page.html' }
    });

    app.directive('overview', function () {
        return { restrict: 'E', templateUrl: 'pages/overview.html' }
    });
})();