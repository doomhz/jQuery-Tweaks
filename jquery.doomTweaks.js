/**
* Doom Tweaks for Javascript Projects
*
* @author Dumitru Glavan
* @version 1.0
* @requires jQuery
*
* @example: $.l(4,5,6);
* @example: $.time();
* @example: $.lt();for (var i = 0;i < 100000;i++) {$('.div');}$lt();
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*/
(function ($) {

	/**
	 * Extend Firebug
	 */
	if (typeof(console) === 'object') {
		/**
		 * Shortcut function for console.log()
		 */
		$.extend($, {l: function () {
							for (var i = 0; i < arguments.length; i++) {
								console.log(arguments[i]);
							}
						}
					});
	}

	/**
	 * Shortcut function for getting timestamp in second (PHP like function time())
	 * @parma numeric divideBy - You can switch back to milliseconds by specifying this as 1
	 */
	$.extend($, {time: function (divideBy) {
						return ~~(+ (new Date().getTime() / (typeof divideBy === 'undefined' ? 1000 : divideBy)));
					   }
				});

	$.extend($, {lt: function () {
						if (this.ltLastTime == null) {
							return this.ltLastTime = new Date().getTime();
						}
						var diff = new Date().getTime() - this.ltLastTime;
						this.ltLastTime = null;
						$.l(diff);
						return diff;
					},
				 ltLastTime: null
	});
	
})(jQuery);