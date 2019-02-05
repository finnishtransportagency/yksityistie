var $ = require('jquery');
require('jquery-ui');
global.jQuery = global.$ = $;
require('jquery-ui/custom');
require('select2');
require('moment/locale/fi');
require('bootstrap');
require('bootstrap-switch');
require('eonasdan-bootstrap-datetimepicker-custom');
var select2 = require('../../modules/select2Controller.js');
var dateTime = require('../../modules/dateTimeController.js');
var c3 = require('../../modules/c3controller.js');

global.jQuery(document).ready(function($) {	
	select2.activate(".js-data-kunta-ajax", "koodistot/kunnat", true, 2, "Kunta");
	select2.activate(".js-data-tietolaji-ajax", "koodistot/tietolajit", false, 0, "Valitse tietolaji");
	select2.activate(".js-data-hallinnollinenluokka-ajax", "koodistot/hallinnollinenluokka", true, 0, "Valitse hallinnollinenluokka");
	dateTime.activatePicker1();
	dateTime.activatePicker2();
	c3.init();
	$('input[name="sw-abs-rel"]').bootstrapSwitch('state', true, true);//turns check box to toggle switch
	$('input[name="sw-cumul"]').bootstrapSwitch('state', true, true);
	$('input[name="sw-summary"]').bootstrapSwitch('state', false, true);
	$('#myModal').modal('show');
	$('[data-toggle="tooltip"]').tooltip();
});

