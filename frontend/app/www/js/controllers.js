angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.isAdmin = function(){
    return true;
  }

  $scope.isCliente = function(){
    return true;
  }


   // Busca de Pessoa
   $ionicModal.fromTemplateUrl('templates/buscapessoa.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalBuscaPessoa = modal;
  });
  $scope.buscaPessoa = function() {
    $scope.modalBuscaPessoa.show();
  };
  $scope.fechaBuscaPessoa = function() {
    $scope.modalBuscaPessoa.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modalBuscaPessoa.remove();
  });
  // Execute action on hide modal
  $scope.$on('modalBuscaPessoa.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modalBuscaPessoa.removed', function() {
    // Execute action
  });
  // fim da busca de pessoa
  
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
.controller('PessoasCtrl', function($scope) {
	// expande o campo de mensagem
  $scope.expandTextMsg = function(){
    var element = document.getElementById("txtMsg");
    element.style.height =  element.scrollHeight + "px";
  };

  $scope.resetExpandMsg = function(idpost){
    var element = document.getElementById("txtMsg");
    element.style.height =  "23px";
  };

})
.controller('DadosPessoaisCtrl', function($scope) {
  $scope.dados = {
              nome:'Fulano da Silva', 
              email:'fulanosilva@gmail.com',
              telefone:[]
            };
})
;
