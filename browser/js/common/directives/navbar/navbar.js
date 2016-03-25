app.directive('navbar', function ($rootScope, AuthFactory, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.isLoginState = function() {
                return $state.is('login');
            }

            AuthFactory.getUser()
                .then(function(user) {
                    console.log(user);
                    if (user) scope.user = user;
                });

            scope.logout = function() {
                AuthFactory.logout()
                .then(function() {
                    $state.go('login');
                })
            }

            // scope.items = [
            //     { label: 'Home', state: 'home' },
            //     { label: 'About', state: 'about' },
            //     { label: 'Documentation', state: 'docs' },
            //     { label: 'Forms', state: 'form-data'},
            //     { label: 'Members Only', state: 'membersOnly', auth: true }
            // ];

            // scope.user = null;

            // scope.isLoggedIn = function () {
            //     return AuthService.isAuthenticated();
            // };

            // scope.logout = function () {
            //     AuthService.logout().then(function () {
            //        $state.go('home');
            //     });
            // };

            // var setUser = function () {
            //     AuthService.getLoggedInUser().then(function (user) {
            //         scope.user = user;
            //     });
            // };

            // var removeUser = function () {
            //     scope.user = null;
            // };

            // setUser();

            // $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            // $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            // $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});
