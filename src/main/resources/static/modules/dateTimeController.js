var moment = require('moment');

var dateTimeController = (function(){
	
var activatePicker1 = function() {
	
	$(function () {
		$('#datetimepicker1').datetimepicker({
			format: 'DD.MM.YYYY'
			});
		});
}

var activatePicker2 = function() {
	$(function () {
		$('#datetimepicker2').datetimepicker({
			useCurrent: false,
		    defaultDate: moment().toDate(),
		    locale: 'fi',
		    format: 'DD.MM.YYYY',
			showTodayButton: true
			});
		});
}

return {
	activatePicker1: activatePicker1,
	activatePicker2: activatePicker2
  };
  
  
})();

module.exports = dateTimeController;