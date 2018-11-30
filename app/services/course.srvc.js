//In factory, object needs to be created before returning it.
(function(){
  angular.module('myApp').factory('courseDataSrvc', function ($http, $q) {
    url = 'https://api.mlab.com/api/1/databases/my-db/collections/courses',
    config = {params:{apiKey: 'I8LoQLtriVyVznLau7VMwnX6NWNKk232'}};
    return {
      getCourses : function(){
        var deferred = $q.defer();
        $http.get(url, config)
        .then(function(response) {
            deferred.resolve(response.data);
          }, function(error){
            deferred.reject(error);
          });
          return deferred.promise;
      },
      postCourse : function(course){
        var deferred = $q.defer();
        $http.post(url, course, config)
        .then(function(response) {
            deferred.resolve(response.data);
          }, function(error){
            deferred.reject(error);
          });
          return deferred.promise;
        },
        updateCourse : function(courseToEdit){
          var deferred = $q.defer();
          $http.put(url+'/'+courseToEdit._id.$oid, courseToEdit, config)
          .then(function(response) {
              deferred.resolve(response.data);
            }, function(error){
              deferred.reject(error);
            });
            return deferred.promise;
        },
        deleteCourse  : function(course){
          var deferred = $q.defer();
          $http.delete(url+'/'+course._id.$oid, config)
          .then(function(response) {
              deferred.resolve(response.data);
            }, function(error){
              deferred.reject(error);
            });
            return deferred.promise;
        },
        getCourseById : function(courseId){
          var deferred = $q.defer();
          $http.get(url+'/'+courseId, config)
          .then(function(response){
            deferred.resolve(response.data);
          }, function(error){
            deferred.reject(error);
          });
          return deferred.promise;
        }
    }
  });
  // //automatically creates object and refers to it via 'this'
  //   angular.module('myApp').service('mySrvc', function($http, $q){
  //   console.log("mySrvc : ");
  //   console.log(this);
  //   this.getCourses = function(){
  //     console.log("mySrvc getCourses : ");
  //     console.log(this);
  //     var deferred = $q.defer();
  //     $http.get(url, config)
  //     .then(function(response) {
  //         deferred.resolve(response.data);
  //       }, function(error){
  //         deferred.reject(error);
  //       });
  //       return deferred.promise;
  //     };
  //   this.postCourse = function(course){
  //     var deferred = $q.defer();
  //     $http.post(url, course, config)
  //     .then(function(response) {
  //         deferred.resolve(response.data);
  //       }, function(error){
  //         deferred.reject(error);
  //       });
  //       return deferred.promise;
  //     };
  //     this.updateCourse = function(courseToEdit){
  //       var deferred = $q.defer();
  //       $http.put(url+'/'+courseToEdit._id.$oid, courseToEdit, config)
  //       .then(function(response) {
  //           deferred.resolve(response.data);
  //         }, function(error){
  //           deferred.reject(error);
  //         });
  //         return deferred.promise;
  //     };
  //     this.deleteCourse = function(course){
  //       var deferred = $q.defer();
  //       $http.delete(url+'/'+course._id.$oid, config)
  //       .then(function(response) {
  //           deferred.resolve(response.data);
  //         }, function(error){
  //           deferred.reject(error);
  //         });
  //         return deferred.promise;
  //     };
  // });
})();
