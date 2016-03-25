app.controller('FormBuilder', function($scope, FormTemplatesFactory){

	var formTemplate = {
		title: $scope.title,
		description: $scope.description,
		type: "formTemplate",
		formElements: $scope.formElements
	};

	$scope.submitForm = FormTemplatesFactory.submitForm(formTemplate);

	$scope.titleAlign = "left";
	$scope.descAlign = "left";
	$scope.tabSelected = 'one';
	$scope.formElements = [
	{type: 'checkbox', options:[{value: "option 1"}, {value: "option 2"}, {value: "option 3"}], id: 0, required: false}, 
	{type: 'multipleChoice', options:[{value: "option 1"}, {value: "option 2"}, {value: "option 3"}], id: 1, required: false}, 
	{type: 'paragraphText', id: 2, required: false}, 
	{type: 'dropdown', options:[{value: "option 1"}, {value: "option 2"}, {value: "option 3"}], id: 3, required: false}, 
	{type: 'lineText', id: 4, required: false},
	{type: 'number', id: 5, required: false}];

	
	$scope.placeElements = function(type) {
		$scope.elementToAdd = {type: type};
		$scope.formElements.push($scope.elementToAdd);
		if(type === 'checkbox' || type === 'dropdown' || type === 'multipleChoice') {
			$scope.elementToAdd.options = [{value: "option 1"}, {value: "option 2"}, {value: "option 3"}];
		}
		$scope.elementToAdd.id = nextId;
		nextId++;
		$scope.elementToAdd.required = false;
	}

	$scope.required = false;

	$scope.title = $scope.title || 'Form Title';
	$scope.description = $scope.description || 'This describes my form!';

	// $scope.minVal = $scope.minVal || null;
	// $scope.maxVal = $scope.maxVal || null;

	$scope.selectElement = function(e) {
		console.log("selected");
		$scope.selected = e;
		$scope.tabSelected = 'two';
	}

	$scope.onHover = function(e) {
		$scope.hovered = e;
	}

	$scope.removeElement = function(el){
		var indexToRemove = $scope.formElements.indexOf(el);
		$scope.formElements.splice(indexToRemove, 1);
		$scope.selected = {};
	}

	$scope.clearForm = function(){
		$scope.formElements = [];
	}

	var nextId = $scope.formElements.length; 

	$scope.addChoice = function(element){
		element.options.push({value: "New Option"});
	}

	$scope.removeChoice = function(element, choice){
		if(element.options.length > 1) {
			element.options.splice(element.options.indexOf(choice), 1);
		}
	}

	$scope.setAlignment = function(alignment, type){
		if(type === "description") $scope.descAlign = alignment; 
		if(type === "title") $scope.titleAlign = alignment; 
	}

	$scope.textLable = $scope.textLable || "Enter Text";
	$scope.addressLable = $scope.addressLable || "Address";
	$scope.radioLable = $scope.radioLable || "Select One";
	$scope.checkboxLable = $scope.checkboxLable || "Select";
	$scope.paragraphLable = $scope.paragraphtLable || "Enter Text";
	$scope.dropdownLabel = $scope.dropdownLabel || "Select";
	$scope.numberLabel = $scope.numberLabel || "Enter A Number";
	$scope.emailLabel = $scope.emailLabel || "Email";
	$scope.phoneLabel = $scope.phoneLabel || "Phone";






	// $scope.getLabel = function(type){
	// 	if(type === "address") $scope.lable = $scope.lable || "Address";
	// 	if(type === "address") $scope.lable = $scope.lable || "Enter Text";
	// 	if(type === "address") $scope.lable = $scope.lable || "Select One";
	// 	if(type === "address") $scope.lable = $scope.lable || "Select";
	// 	if(type === "address") $scope.lable = $scope.lable || "Enter Text";
	// 	if(type === "address") $scope.label = $scope.label || "Select";
	// 	if(type === "address") $scope.label = $scope.label || "Enter A Number";
	// 	if(type === "address") $scope.label = $scope.label || "Email";
	// 	if(type === "address") $scope.label = $scope.label || "Phone Number";
	// }










});