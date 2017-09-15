angular.module('index.controller', [])
    .controller('IndexCtrl', function ($scope, $ionicModal, $timeout) {
        var vm = $scope.vm;

        vm.currentNav = 'index';

    });