var allblueApp = angular.module('allblueApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {templateUrl: '/views/dashboard.html', controller: 'DashboardCtrl'}).
        when('/group', {templateUrl: '/views/groupList.html'}).
        otherwise({redirectTo:'/'});
    }]
);