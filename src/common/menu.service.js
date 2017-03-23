(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService)
.service('ClientService', ClientService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}

ClientService.$inject = ['$http', 'ApiPath'];

function ClientService($http, ApiPath) {
  var service = this;

  service.addClient(fName, lName, eMail, pNumber, fDish){
    $http({
      method: 'GET',
      url: ( ApiPath + '/menu_items/' + fDish + '.json')
    })
    var client = {
      firstName: fName,
      lasteName: lName,
      eMail: eMail,
      phoneNumber: pNumber,

    }

  }
}

})();
