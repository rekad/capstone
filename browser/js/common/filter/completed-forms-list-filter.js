angular.module('completedFormsFilters', [])
	.filter('shorten', function () {
		return function(input) {
			if (!input) return;
			input = Array.isArray(input) ? input.join(", ") : input.toString();
			var n = input.length > 30 ? 30 : input.length;
			return input.slice(0, n);
		};
	});