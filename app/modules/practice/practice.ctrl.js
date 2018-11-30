(function(){
  angular.module('myApp')
  .controller('practiceCtrl', function($rootScope, $scope, $timeout){
    var practiceCtrl = this;
    // console.log($rootScope);
    // console.log($scope);
    // console.log(practiceCtrl);

    $scope.movieTitle = 'Iceage';
    $scope.movieRating = 5;
    practiceCtrl.movieTitle = 'Matrix';

    $scope.showMovie = function () {
      alert($scope.movieTitle);
    }

    // //Watchers------------------------------------------------------------------
    // $scope.obj = {
    //   "fruit": "Apple",
    //   "size": "Large",
    //   "color": "Red"
    // };
    //
    // $scope.$watch('obj', function(n,o){
    //   console.log('Obj Changed.');
    // }, true)
    //
    // $timeout(function(){
    //   $scope.obj.fruit = 'mango';
    // },3000);
  });

})();
