var $ = require('jquery');

var ajaxrequest = (function(){

var get = function(loadUrl, dataString, callback) {
    jQuery.ajax({
        type: 'GET',
        url: loadUrl,
        data: dataString,
        dataType: 'json',
		error: function(jqXHR, textStatus, errorThrown){
			var results = {
			hasError: true,
			jqXHR: jqXHR,
			textStatus: textStatus,
			errorThrown: errorThrown,
			}
			virhe = "Moro";
			callback(virhe);
		},
        success: function(response) {
            callback(response);
        }
    });    
};

var post = function(loadUrl, dataString, callback) {

    $.ajax({
        type: 'POST',
        url: loadUrl,
        processData: false,
        contentType: "text/plain",
        data: dataString,
        dataType: 'json',
//        error: ajaxError,
        success: function(response) {
            callback(response);
        }
    });    
};

return{
	get: get,
	post: post
  };

})();

module.exports = ajaxrequest;