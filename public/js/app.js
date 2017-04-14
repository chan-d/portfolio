angular.module('sampleApp', ['ui.router'])
    .config(config)
    .controller('HomeController', HomeController);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('config');
    //this allows us to use routes without hash params!
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    // for any unmatched URL redirect to /
    $urlRouterProvider.otherwise("/");

     $stateProvider
      .state('home', {
        url: "/",
        controller: 'HomeController',
        controllerAs: 'home',
        template: 'Home!'
      });
  }

  function HomeController() {
    var vm = this;
    vm.homeTest = "Welcome to the homepage!";
  }
