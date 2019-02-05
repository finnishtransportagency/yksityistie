var noty= require('noty');

var notyController = (function(){
	
var createNoty = function(text, type) {
	
		var nid = noty({
		    text: text,
		    type: type,
		    theme: 'bootstrapTheme',
//		    modal: true,
			killer: true,
		    animation: {
		        open: 'animated bounceInLeft', // Animate.css class names
		        close: 'animated bounceOutLeft' // Animate.css class names
		    }
		});
		return nid;
}



return {
	createNoty: createNoty,
  };
  
  
})();

module.exports = notyController;