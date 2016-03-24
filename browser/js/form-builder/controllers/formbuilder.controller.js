app.controller('FormBuilder', function($scope){
	$scope.tabSelected = 'one';
	$scope.formElements = [
	{type: 'checkbox', options:[{value: "option 1"}, {value: "option 2"}, {value: "option 3"}], id: 0}, 
	{type: 'multipleChoice', options:[{value: "option 1"}, {value: "option 2"}, {value: "option 3"}], id: 1}, 
	{type: 'paragraphText', id: 2}, 
	{type: 'dropdown', options:[{value: "opt1"}, {value: "opt2"}, {value: "opt3"}], id: 3}, 
	{type: 'lineText', id: 4}];

	
	$scope.placeElements = function(type) {
		$scope.elementToAdd = {type: type};
		$scope.formElements.push($scope.elementToAdd);
		if(type === 'checkbox' || type === 'dropdown' || type === 'multipleChoice') {
			$scope.elementToAdd.options = ["option 1", "option 2", "option 3"];
		}
		$scope.elementToAdd.id = nextId;
		nextId++;
	}

	$scope.title = $scope.title || 'Form Title';
	$scope.description = $scope.description || 'This describes my form!';

	$scope.selectElement = function(e) {
		console.log("selected");
		$scope.selected = e;
		$scope.tabSelected = 'two';
	}

	$scope.onHover = function(e) {
		$scope.hovered = e;
	}

	$scope.removeElement = function(el){
		console.log("i'm here")
		var indexToRemove = $scope.formElements.indexOf(el);
		$scope.formElements.splice(indexToRemove, 1);
		console.log("i was clicked")
	}

	$scope.clearForm = function(){
		$scope.formElements = [];
	}

	var nextId = $scope.formElements.length; 

	// $scope.removeChoice = function(element, choice){
	// 	element.options.splice(element.options.indexOf(choice));
	// }
});