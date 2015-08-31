hello.controller('MainController', ['$scope', function($scope){
	$scope.title ="Hello World!";
	$scope.buttonText ="Click";
	$scope.click=function(){
		$scope.buttonText = "Button Clicked!";
	}
}]);