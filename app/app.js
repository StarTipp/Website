(function () {
    var app = angular.module('Startipp', ["Tipping"]);

    //Controller
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
})();