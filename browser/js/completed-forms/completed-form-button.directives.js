app.directive('editButton', function() {
	return {
		restrict: 'E',
		template: ' <button class="btn btn-primary btn-flat" ng-click="toggleEdit()" ng-hide="isEditing"> <i class="fa fa-edit"></i> Edit Form</button>'
	};
});
app.directive('newFormButton', function() {
	return {
		restrict: 'E',
		template: '<button class="btn btn-primary btn-flat" ui-sref="add-data.submit({formTemplateId: formTemplateId})"> <i class="fa fa-plus"></i>Fill Out New Form</button>'
	};
});
app.directive('cancelEditButton', function() {
	return {
		restrict: 'E',
		template: '<button class="btn btn-flat" ng-click="toggleEdit()" ng-show="isEditing"><i class="fa fa-times"></i>Cancel Edits</button>'
	};
});
app.directive('saveChangesButton', function() {
	return {
		restrict: 'E',
		template: '<button class="btn btn-flat bg-olive" ng-click="updateForm()" ng-show="isEditing"><i class="fa fa-save"></i>Save Changes</button>'
	};
});