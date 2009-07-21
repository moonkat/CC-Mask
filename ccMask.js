$(document).ready(function(){
	/**
	 * CC Mask
	 * 
	 * Use to mask credit card info in an input field while a field has focus.
	 * When field loses focus, mask field.  Use the targetID parameter to define where to store real cc number.
	 * @example
	 * <.. ccmask="targetID"> <input type="hidden" id="targetID">
	 */
	 // Required files: jquery.js, jquery.livequery.js
	var ccmaskSelector = "[ccmask]", ccmaskTag = "ccmask";
	 
	$(ccmaskSelector).livequery(function(){
		
		$(this).focus(function(){
			var targetEl = $(this).attr(ccmaskTag);
			$(this).val($("#"+targetEl).val());
		});
		$(this).blur(function(){
			var targetEl = $(this).attr(ccmaskTag);
			var realVal = $(this).val();
			$("#"+targetEl).val(realVal); //assign value to hidden field
			var regex = /.{12}/; // match any character 12 times
			var newVal = realVal.replace(regex,'XXXX XXXX XXXX ');
			$(this).val(newVal);
		});
	});
});