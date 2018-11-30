(function(){
  angular.module('myApp').directive('myTableDrctv', function(){
  return {
    //scope : false is default value, directive has same scope as parent controller
    //scope : true, new scope for directive inherited from parent controller
    //scope : {}, isolated scope detached from parent controller scope
    restrict : 'EA',
    transclude : true,
    scope : {
      movieTitle : '=',
      movieRating : '@',
      showMovie : '&'
    },
    template : '<div ng-transclude></div>Name: <input ng-model = \'movieTitle\'><br></input>'+
    'Rating: <input ng-model = \'movieRating\'></input><button ng-click="showMovie()">Show Movie</button>',
    compile : function(telem, tattr){
      telem.css("background-color", "red");
       //console.log(telem);
       //console.log(tattr);
      return {
        pre : function(scope, ielem, iattr){
          //console.log(ielem);
           //console.log(iattr);
        },
        post : function(scope, ielem, iattr){
          // console.log(ielem);
          // console.log(iattr);
          //console.log(scope);
        }
      }
    },
    controller: function($scope){
    }
  }
  });
})();
