app.directive('formElement', function($compile) {
	return {
		scope: {
			element: '='
		},
		link: function(scope, element, attr) {
			var generatedFormElement = '<' + _.kebabCase(scope.element.type) + ' element="element">' + '</' + _.kebabCase(scope.element.type) + '>';
			element.append($compile(generatedFormElement)(scope));
		}
	}
});

app.directive('text', function() {
	return {
		scope: {
			element: '='
		},
		templateUrl: '/js/add-data/directives/text-directive.html'
	}
});

app.directive('number', function() {
	return {
		scope: {
			element: '='
		},
		templateUrl: '/js/add-data/directives/number-directive.html'
	}
});

app.directive('multipleChoice', function() {
	return {
		scope: {
			element: '='
		},
		templateUrl: '/js/add-data/directives/multiple-choice-directive.html'
	}
});

app.directive('checkboxes', function() {
	return {
		scope: {
			element: '='
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