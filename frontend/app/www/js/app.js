// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

.state('app.resumofinanceiro', {
    url: '/resumo',
    views: {
      'menuContent': {
        templateUrl: 'templates/resumo.html',
        controller: 'ResumoCtrl'
      }
    }
  })

.state('app.extrato', {
    url: '/extrato',
    views: {
      'menuContent': {
        templateUrl: 'templates/extrato.html',
        controller: 'ExtratoCtrl'
      }
    }
  })

  .state('app.pagamento', {
    url: '/pagamento',
    views: {
      'menuContent': {
        templateUrl: 'templates/pagamento.html',
        controller: 'PagamentoCtrl'
      }
    }
  })

 .state('app.infotaxas', {
    url: '/infotaxas',
    views: {
      'menuContent': {
        templateUrl: 'templates/infotaxas.html',
        controller: 'InfoTaxasCtrl'
      }
    }
  })

 .state('app.mensagens', {
    url: '/mensagens',
    views: {
      'menuContent': {
        templateUrl: 'templates/mensagens.html',
        controller: 'MensagensCtrl'
      }
    }
  })

  .state('app.dadospessoais', {
    url: '/dadospessoais',
    views: {
      'menuContent': {
        templateUrl: 'templates/dadospessoais.html',
        controller: 'DadosPessoaisCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/resumo');
});
