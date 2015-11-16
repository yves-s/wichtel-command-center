function stateConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('home', {
        url: "/home",
        views: {
            'content@': {
                templateUrl: require("./home.html"),
                controller: "HomeController as home"
            }
        }
    });
    $urlRouterProvider.otherwise("/home");

}

export default stateConfig;
