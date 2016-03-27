app.directive('formElement', function($compile) {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			var generatedFormElement = '<' + _.kebabCase(scope.element.type) + ' element="element" is-editing="' + scope.isEditing + '" ng-model="element.value">' + '</' + _.kebabCase(scope.element.type) + '>';
			element.append($compile(generatedFormElement)(scope));
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			})
		}
	}
});


///////////////////

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
		templateUrl: '/js/common/directives/individual-forms/text-directive.html'
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
		templateUrl: '/js/common/directives/individual-forms/number-directive.html'
	}
});

app.directive('multipleChoice', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "?ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.$watch('element.value', function(newValue, oldValue) {
				// console.log('there is a change in the radio button');
				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/common/directives/individual-forms/multiple-choice-directive.html'
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
		templateUrl: '/js/common/directives/individual-forms/checkboxes-directive.html'
	}
});

app.directive('sectionBreak', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		templateUrl: '/js/common/directives/individual-forms/section-break-directive.html'
	}
});