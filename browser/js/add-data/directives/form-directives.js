app.directive('formElement', function($compile) {
	return {
		scope: {
			element: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			var generatedFormElement = '<' + _.kebabCase(scope.element.type) + ' element="element" ng-model="value">' + '</' + _.kebabCase(scope.element.type) + '>';
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
			element: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.$watch('value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue({'value': newValue});
			});
		},
		templateUrl: '/js/add-data/directives/text-directive.html'
	}
});

app.directive('number', function() {
	return {
		scope: {
			element: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.$watch('value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue({'value': +newValue});
			});
		},
		templateUrl: '/js/add-data/directives/number-directive.html'
	}
});

app.directive('multipleChoice', function() {
	return {
		scope: {
			element: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.data = {};
			scope.$watch('data.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue({'value': newValue});
			});
		},
		templateUrl: '/js/add-data/directives/multiple-choice-directive.html'
	}
});

app.directive('checkboxes', function() {
	return {
		scope: {
			element: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.data = [];
			scope.$watch('data', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue({'value': newValue});
			});
		},
		templateUrl: '/js/add-data/directives/checkboxes-directive.html'
	}
});

app.directive('sectionBreak', function() {
	return {
		scope: {
			element: '='
		},
		templateUrl: '/js/add-data/directives/section-break-directive.html'
	}
});