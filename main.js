'use strict';

var theApp = angular.module("theApp", ['ui.router'])

theApp.config(function($stateProvider, $urlRouteProvider){
  $stateProvider
  .state('/', {url: '/', templateUrl: 'partials/index.html'})
  .state('/', {url: '/clark', templateUrl: 'partials/clark.html'})
  .state('/', {url: '/code', templateUrl: 'partials/code.html'})
  .state('/', {url: '/contact', templateUrl: 'partials/contact.html'})

  $urlRouteProvider.otherwise("/")
})
