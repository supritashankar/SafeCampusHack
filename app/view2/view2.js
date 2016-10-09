'use strict';

angular.module('myApp.view2', ['ngRoute'])

.controller('ChatCtrl', ['$scope',function($scope) {
	// Enable pusher logging - don't include this in production
    //pusher.logToConsole = true;
    $scope.MessageData = [{id:1, message:'message1'}, {id:2, message:'message2'}, {id:3, message:'message3'}, {id:4, message:'message4'}, {id:5, message:'message5'}, {id:6, message:'message6'}, {id:7, message:'message7'}, {id:8, message:'message8'}, {id:9, message:'message9'}, {id:10, message:'message10'}, {id:11, message:'message11'}, {id:12, message:'message12'}, {id:13, message:'message13'}, {id:14, message:'message14'}, {id:15, message:'message15'}, {id:16, message:'message16'}, {id:17, message:'message17'}, {id:18, message:'message18'}, {id:19, message:'message19'}, {id:20, message:'message20'}];

 //    var pusher = new Pusher(API_KEY, {
	//   	auth: {
	//     params: { foo: "bar" },
	//     headers: { baz: "boo" }
	//   	}
	// });

 //    $scope.pusher = new Pusher('48eec20d8ef030076b17', {
 //      encrypted: true
 //    });

    // var channel = $scope.pusher.subscribe('test_channel');
    // channel.bind('my_event', function(data) {
    //   alert(data.message);
    // });
  
}]);





