angular.module('main.controller', [])
    .controller('MainCtrl', function ($scope, $ionicModal, $timeout) {
        var vm = $scope.vm = {};

        $scope.loginData = {};

        $ionicModal.fromTemplateUrl('views/modals/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.loginModal = modal;
        });

        $scope.closeLogin = function () {
            $scope.loginModal.hide();
        };

        $scope.login = function () {
            $scope.loginModal.show();
        };

        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            $scope.closeLogin();
        };
    });