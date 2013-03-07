var app = angular.module('app', []).
  config(function ($routeProvider, $locationProvider) {
    $routeProvider.
        when("/", {templateUrl: "/partials/list.html"}).
        when("/new", {templateUrl: "/partials/edit.html", controller: "NewCtrl"}).
        when("/edit/:id", {templateUrl: "/partials/edit.html", controller: "EditCtrl"}).
        otherwise({redirectTo: "/"});
  });

function EditCtrl($scope, $location, $routeParams) {
  $scope.title = "Edit Crew";

  $scope.person = $scope.crew[$routeParams.id];
  $scope.save = function() {
    $location.path("/");
  }
}

function NewCtrl($scope, $location) {
  $scope.title = "New Crew";

  $scope.person = {name: "", description: ""};
  $scope.save = function() {
    $scope.crew.push($scope.person);
    $location.path("/");
  }

}

function AppCtrl($scope, $location){
  $scope.crew = [
    {name: "John", description: "Manager"},
    {name: "Steve", description: "Leader"},
    {name: "Robert", description: "Engineer"}
  ];

  $scope.destroy = function() {
    if (confirm("Are you sure?")) {
      $scope.crew.splice(self.id, 1);
      $location.path("/");
    }
  };
}
