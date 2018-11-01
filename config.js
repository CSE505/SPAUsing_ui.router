app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("pageOne", {
        url:"/pageOne",
        templateUrl:"templates/pageOne.html",
        controller:"pageOne"
    }).state("pageTwo", {
        url:"/pageTwo",
        templateUrl:"templates/pageTwo.html",
        controller:"pageTwo"
    })
    $urlRouterProvider.otherwise("/pageOne");
});