angular.module("MapApp")    
    .constant("baseurl", "#")
    .controller("MapCtrl", ['$scope', '$http', '$rootScope','baseurl',
	function ($scope, $http, $rootScope,  baseurl) {
	   
       
       var message = "This is my Message Jul";
     

		$.connection.hub.url = '//localhost:57004/signalr';
		//$.connection.hub.logging = true;					   
		
        connection = $.connection.ChatHub;
		connection.client.getMessage = function (data) {	    				
           	 $rootScope.$apply(function () {                    
           	 		message += data
                });           
		};
 		
		$.connection.hub.start().done(function () {		         		
		}).fail(function (failreason) {		
		});
        
       var gmap = { center: {
                        latitude: 10.309599,
                        longitude: 123.895424
                      },                   
                     zoom: 15 };
       
       $scope.map = gmap;
       
       
       
        
        $scope.userMarker = {
            userID:1,
            Name:"Danica Torres",
            Message:message,
            position: {
                        latitude: 10.309599,
                        longitude: 123.895424
                      },
            map: gmap, 
            icon: {url:"https://pbs.twimg.com/profile_images/490026072155516929/Fre-VIZl_bigger.jpeg"}         
        };
       
	}
]);

