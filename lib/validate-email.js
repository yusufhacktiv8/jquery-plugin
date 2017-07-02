(function ($) {
	$.fn.emailValidator = function () {
		const text = this.val();
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text);
	}
})(jQuery)
