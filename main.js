'use strict';

var theApp = angular.module("theApp", ['ui.router'])

theApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('/', {url: '/', templateUrl: 'partials/index.html'})
  .state('clark', {url: '/clark', templateUrl: 'partials/clark.html'})
  .state('code', {url: '/code', templateUrl: 'partials/code.html'})
  .state('contact', {url: '/contact', templateUrl: 'partials/contact.html'})
  .state('blog', {url: '/blog', templateUrl: 'partials/blog.html'})

  $urlRouterProvider.otherwise("/")
})
