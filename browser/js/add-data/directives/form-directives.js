app.directive('formElement', function($compile) {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			var generatedFormElement = '<' + _.kebabCase(scope.element.type) + ' element="element" is-editing="' + scope.isEditing + '" ng-model="value">' + '</' + _.kebabCase(scope.element.type) + '>';
			element.append($compile(generatedFormElement)(scope));
			scope.$watch('value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			})
		}
	}
});

app.directive('text', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, el, attr, ngModelCtrl) {
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/add-data/directives/text-directive.html'
	}
});

app.directive('number', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.$watch('element.value', function(newValue, oldValue) {


				ngModelCtrl.$setViewValue(+newValue);
			});
		},
		templateUrl: '/js/add-data/directives/number-directive.html'
	}
});

app.directive('multipleChoice', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.$watch('value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/add-data/directives/multiple-choice-directive.html'
	}
});

app.directive('checkboxes', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.values = [];
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/add-data/directives/checkboxes-directive.html'
	}
});

app.directive('sectionBreak', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		templateUrl: '/js/add-data/directives/section-break-directive.html'
	}
});