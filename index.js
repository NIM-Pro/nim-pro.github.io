angular.module('App',[]).controller('index',['$scope',function($scope) {
    if (!localStorage.lang)
        localStorage.lang=$scope.currentLang=Language.currentLang;
    else
        $scope.currentLang=localStorage.lang;
    $scope.lang=Language.getLang($scope.currentLang);
    $scope.changeLang=function() {
        $scope.lang=Language.changeLang();
        localStorage.lang=$scope.currentLang=Language.currentLang;
    };
}]);