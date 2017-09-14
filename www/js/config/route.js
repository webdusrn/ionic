angular.module('route.config', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'views/layouts/nav.html',
                controller: 'MainCtrl'
            })

            .state('main.index', {
                url: '/index',
                views: {
                    'menuContent': {
                        templateUrl: 'views/contents/index.html',
                        controller: 'IndexCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/main/index');
    });