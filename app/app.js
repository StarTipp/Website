(function () {
    var app = angular.module('Startipp', []);

    app.controller('LoginController', function () {
        this.loggedIn = true;
        this.username = "Florian";
        this.password = "";

        this.login = function () {
            if(this.password === "1234"){
                this.loggedIn = true;
            }
        }

        this.logout = function () {
            this.loggedIn = false;
            this.username = "";
            this.password = "";
        }
    });

    app.controller('NavigationController', function () {
        this.activeTab = "startpage";

        this.setActive = function (tab) {
            this.activeTab = tab;
        }
        
        this.isActive = function (tab) {
           return this.activeTab === tab;
        }
    });

    app.directive('loginPage', function () {
        return { restrict: 'E', templateUrl: 'pages/login-page.html' }
    });

    app.directive('startPage', function () {
        return { restrict: 'E', templateUrl: 'pages/start-page.html' }
    });
})();