app.config(function ($stateProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
    });

});

app.controller('LoginCtrl', function ($scope, AuthFactory, $state) {

    $scope.login = function() {
        AuthFactory.login($scope.loginInfo)
            .then(function(user) {
                $state.go('completed-forms.forms-list', {formTemplateId: null});
            })
            .catch(function(error) {
                console.log("error: ", error);
            })
    }

    // $scope.login = {};
    // $scope.error = null;

    // $scope.sendLogin = function (loginInfo) {

    //     $scope.error = null;

    //     AuthService.login(loginInfo).then(function () {
    //         $state.go('home');
    //     }).catch(function () {
    //         $scope.error = 'Invalid login credentials.';
    //     });

    // };

});