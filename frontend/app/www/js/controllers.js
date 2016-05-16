angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.isAdmin = function(){
    return true;
  }
})
.controller('ResumoCtrl', function($scope) {
})
.controller('ExtratoCtrl', function($scope) {
})
.controller('PagamentoCtrl', function($scope) {
})
.controller('InfoTaxasCtrl', function($scope) {
})
.controller('MensagensCtrl', function($scope) {
})
.controller('DadosPessoaisCtrl', function($scope) {
  $scope.dados = {
              nome:'Fulano da Silva', 
              email:'fulanosilva@gmail.com',
              telefone:[]
            };
})
;
