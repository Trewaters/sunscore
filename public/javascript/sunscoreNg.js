var app = angular.module('sunscoreNgApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'about.html'
                , controller: 'mainController'
            })
            .when('/inputForm', {
                templateUrl: 'inputForm.html'
                , controller: 'inputController'
            })
            .when('/chart', {
                templateUrl: 'charts.html'
                , controller: 'graphController'
            })
            .when('/contact', {
                templateUrl: 'contact.html'
                , controller: 'mainController'
            })
            .when('/tables',{
               templateUrl: 'tables.html'
               , controller: 'mainController'
            })
            .when('/forms', {
                templateUrl:'forms.html'
                , controller:'mainController'
            })
            .when('/bootstrap-elements',{
              templateUrl:'bootstrap-elements.html'
              , controller:'mainController'  
            })
            .when('/bootstrap-grid',{
                templateUrl:'bootstrap-grid.html'
                , controller:'mainController'
            })
            .when('/REMOVELATER',{ // This has all the elements I have pulled out of the other pages.
                templateUrl: 'index2nd.html'
                , controller: 'mainController' // temp controller. I don't plan on having this use a controller
            })
    })
    .run(function ($rootScope) {
        $rootScope.sunscore = 0;
    })
    ;
app.controller('mainController', function ($scope) {

});

app.controller('inputController', function ($scope, $rootScope, $http) {

$scope.createScore = function(){
    
    // [TO DO] - move the access_token information to the server side. We don't want that in the open.
    // call to add user account
    $http({method: 'GET', url:'https://utilityapi.com/api/accounts/add.json?access_token=21fd9538db5e49228bd81ed84f1a00b6'}).then(function successCallback(response){
        
        $scope.uApiAccount = response;
        // walk through this data to help display a form of required information the user must provide to access their data.
        
    }, function errorCallback(response){
       
       console.log(response);
       
    });
};


    var factor50Name; // string
    var factor50ServiceAddr; // string
    var factor50PayHis; // number
    var factor50late; // number
    var factor50Disc; // boolean
    var factor25Adults; // number
    var factor25Dep; // number
    var factor25Emp; // number
    var factor25Public; // number
    var factor25Resi; // number

    createScore() = function () {

    };

    factor50Name = $scope.inputName;
    factor50ServiceAddr = $scope.inputServiceAddr;


    // Total value is 20 points
    // factor50PayHis
    if ($scope.inputName == 'Good Sunscore') {
        // value is 1 point
        $rootScope.sunscore += 20;

        $scope.inputInc = 3;
    };
    if ($scope.inputName == 'Alright Sunscore') {
        // value is 1 point
        $rootScope.sunscore += 10;
        $scope.inputInc = 2;
    };
    if ($scope.inputName == 'Ugly Sunscore') {
        // value is 1 point
        $rootScope.sunscore += 0;
        $scope.inputInc = 1;
    };

    // Total value is 2.5 points
    // factor25Adults
    if ($scope.inputAdults > 0) {
        // value is 1 point
        $rootScope.sunscore += 1;

        if ($scope.inputDep > 0) {
            // value is 2.5 points
            $rootScope.sunscore += 1.5;
        };

    };

    // Total value is 2.5 points
    // factor25Emp
    if ($scope.inputEmp == 3) { $rootScope.sunscore += 2.5; };
    if ($scope.inputEmp == 2) { $rootScope.sunscore += 1.5; };
    if ($scope.inputEmp == 1) { $rootScope.sunscore += 0; };

    // Total value is 2.5 points
    // factor25Public
    if ($scope.inputPublic < 5) { $rootScope.sunscore += 1.5; };
    if ($scope.inputPublic == 5) { $rootScope.sunscore += 2.5; };
    if ($scope.inputPublic == 6) { $rootScope.sunscore += 0; };

    // Total value is 2.5 points
    // factor25Resi
    if ($scope.inputResi < 3) { $rootScope.sunscore += 2.5; };
    if ($scope.inputResi == 3) { $rootScope.sunscore += 1.5; };
    if ($scope.inputResi == 4) { $rootScope.sunscore += 0; };

    return $rootScope.sunscore;

});

app.controller('graphController', function ($scope) {
    // tutorial on how to visual data
    // ( https://css-tricks.com/using-angularjs-for-data-visualisations/ )

    // Code goes here!

    // default variables, bound to the controller $scope, that we will use to control the size of our chart, as well as labels for the X and Y axis.
    $scope.width = 600;
    $scope.height = 400;
    $scope.yAxis = "Sales";
    $scope.xAxis = "2014"

    $scope.data = [
        {
            label: 'January',
            value: 36
        },
        {
            label: 'February',
            value: 54
        },

        // .... and so on .....

        {
            label: 'November',
            value: 252
        },
        {
            label: 'December',
            value: 342
        }
    ];

    // find the maximum value and set this
    // using this later to position the elements in our visualizations.
    $scope.max = 0;
    var arrLength = $scope.data.length;
    for (var i = 0; i < arrLength; i++) {
        // Find Maximum X Axis Value
        if ($scope.data[i].value > $scope.max)
            $scope.max = $scope.data[i].value;
    };



});