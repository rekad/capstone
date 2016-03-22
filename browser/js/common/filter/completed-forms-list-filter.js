angular.module('completedFormsFilters', [])
	.filter('shorten', function () {
		return function(input) {
			if (!input) return;
			var n = input.length > 30 ? 30 : input.length;
			return input.slice(0, n);
		};
	});