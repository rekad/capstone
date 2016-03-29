app.controller('FormBuilder', function($scope, FormTemplatesFactory, formTemplate) {

    $scope.savedForm = false;
    $scope.formTemplate = formTemplate;
    $scope.title = $scope.formTemplate.title;
    $scope.description = $scope.formTemplate.description;

    //Do we need to make sure with this put to update the ._rev of the form in case they don't leave the page, update again, and save again?
    //Also a model for the save success might be nicer (something near the bottom where the save button is?)
    $scope.save = function() {
        console.log('template', $scope.formTemplate);
        FormTemplatesFactory.updateForm($scope.formTemplate)
            .then(function(savedForm) {
                $scope.savedForm = true;
            })
    }

    $scope.tabSelected = 'one';
    $scope.formElements = formTemplate.formElements;

    $scope.placeElements = function(type) {
        $scope.elementToAdd = { type: type };
        $scope.formElements.push($scope.elementToAdd);
        if (type === 'checkbox' || type === 'dropdown' || type === 'multipleChoice') {
            $scope.elementToAdd.options = [{ value: "option 1" }, { value: "option 2" }, { value: "option 3" }];
            $scope.elementToAdd.label = "Select";
        } else if (type === 'number') $scope.elementToAdd.label = "Enter Value";
        else if (type === 'lineText' || type === 'paragraphText') $scope.elementToAdd.label = "Enter Text";
        else if (type === 'phone') $scope.elementToAdd.label = "Phone Number";
        else if (type === 'email') $scope.elementToAdd.label = "Email";
        else if (type === 'address') $scope.elementToAdd.label = "Address";

        $scope.elementToAdd.id = nextId;
        nextId++;
        $scope.elementToAdd.required = false;
    }

    $scope.required = false;
    $scope.selectElement = function(e) {
        console.log("selected");
        $scope.selected = e;
        $scope.tabSelected = 'two';
    }

    $scope.onHover = function(e) {
        $scope.hovered = e;
    }

    $scope.removeElement = function(e) {
        var indexToRemove = $scope.formElements.indexOf(e);
        $scope.formElements.splice(indexToRemove, 1);
        $scope.selected = {};
    }

    $scope.clearForm = function() {
        $scope.formElements = [];
        $scope.formTemplate.formElements = [];
        $scope.selected = {};
    }

    var nextId = $scope.formElements.length + 1;

    $scope.addChoice = function(element) {
        element.options.push({ value: "New Option" });
    }

    $scope.removeChoice = function(element, choice) {
        if (element.options.length > 1) {
            element.options.splice(element.options.indexOf(choice), 1);
        }
    }

    $scope.setAlignment = function(alignment, type) {
        if (type === "description") $scope.formTemplate.descAlign = alignment;
        if (type === "title") $scope.formTemplate.titleAlign = alignment;
    }
});