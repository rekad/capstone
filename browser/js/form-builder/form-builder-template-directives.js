app.directive('addressTemplate', function(){
	return {
		restrict: "E",
		templateUrl: "js/form-builder/templates/address.template.html"		
	}
})

app.directive('checkboxTemplate', function(){
	return {
		restrict: "E",
		templateUrl: "js/form-builder/templates/checkboxes.template.html"
	}
})

app.directive('dropdownTemplate', function(){
	return {
		restrict: "E",
		templateUrl: "js/form-builder/templates/dropdown.template.html"
	}
})

app.directive('emailTemplate', function(){
	return {
		restrict: "E",
		templateUrl: "js/form-builder/templates/email.template.html"		
	}
})

app.directive('lineTextTemplate', function(){
	return {
		restrict: "E",
		templateUrl: "js/form-builder/templates/line-text.template.html"		
	}
})

app.directive('multipleChoiceTemplate', function(){
	return {
		restrict: "E",
		templateUrl: "js/form-builder/templates/multiple-choice.template.html"
	}
})

app.directive('numberTemplate', function(){
	return {
		restrict: "E",
		templateUrl: "js/form-builder/templates/number.template.html"		
	}
})

app.directive('paragraphTextTemplate', function(){
	return {
		restrict: "E",
		templateUrl: "js/form-builder/templates/paragraph-text.template.html"
	}
})

app.directive('phoneTemplate', function(){
	return {
		restrict: "E",
		templateUrl: "js/form-builder/templates/phone.template.html"		
	}
})

app.directive('sectionTemplate', function(){
	return {
		restrict: "E",
		templateUrl: "js/form-builder/templates/section.template.html"		
	}
})