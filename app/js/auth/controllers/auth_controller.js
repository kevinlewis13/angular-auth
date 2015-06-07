'use strict';

module.exports = function(app) {
  app.controller('authController', ['$scope', '$location', 'auth', function($scope, $location, auth) {

    if(auth.isSignedIn()) $location.path('/books');

    $scope.errors = [];

    $scope.authSubmit = function(user) {
      if(user.pw_confirm) {
        auth.create(user, function(err) {
          if(err) {
            console.log(err);
            return $scope.errors.push({msg: 'could not create user'});
          }

          $location.path('/books');
        });
      } else {
        auth.signIn(user, function(err) {
          if(err) {
            console.log(err);
            $scope.errors.push({msg: 'could not sign in'});
          }

          $location.path('/books');
        });
      }
    };
  }]);
};
