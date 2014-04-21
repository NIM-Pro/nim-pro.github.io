angular.module('App',[]).controller('index',['$scope',function($scope) {
    $scope.loading=false;
    $scope.lang=langIndex;
    $scope.currentLang='en';
    $scope.changeLang=function() {
        if ($scope.currentLang=='en')
            $scope.currentLang='ru';
        else
            $scope.currentLang='en';
        require(['index.lang.'+$scope.currentLang],function(lang) {
            $scope.lang=lang;
            document.body.click();
        });
    };
}]);