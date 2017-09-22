$(document).ready(function() {
	// Initialize and compile underscore template
	var scenarioTemplate = _.template($('#_scenarioTemplate').html());
	$('#ScenarioBook').html('');
	$.each(scenarioList, function(index, scenario) {
		$('#ScenarioBook').append(scenarioTemplate({ index: index, scenario: scenario }));
	});

	// Run accordion js after underscore template is compiled
	var acc = document.getElementsByClassName("accordion");
	for (var i = 0; i < acc.length; i++) {
		acc[i].onclick = function() {
    		this.classList.toggle("active");
	    	var panel = this.nextElementSibling;
	    	if (panel.style.maxHeight){
		    	panel.style.maxHeight = null;
	    	} else {
		    	panel.style.maxHeight = panel.scrollHeight + 20 + "px"; // Extra 10 accounts for scroll bar
	    	}
		}
	}
});