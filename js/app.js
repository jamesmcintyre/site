'use strict';

var app = angular.module('howCanIHelp', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: 'html/main.html', controller: 'mainCtrl' })
    .state('oops', { url: '/oops', templateUrl: 'html/oops.html', controller: 'oopsCtrl' })
  $urlRouterProvider.otherwise('/');
});



app.controller('mainCtrl', function($scope, $state, $http, $location) {
  console.log('mainCtrl');

//   var json = 'http://ipv4.myexternalip.com/json';
//   $http.get(json).then(function(result) {
//     if(result.data.ip !== '108.217.225.114'){
//       $location.path( "/oops" );
//     }
//   }, function(e) {
//     console.log("get ip error", e);
// });

});
