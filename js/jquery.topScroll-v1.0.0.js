/*
* jquery.topScroll.js - Version 1.0.0
* https://github.com/sagark1510/topScroll/tree/test
* Author: Sagar Khatri
* Beta mode
*/

(function($){
	$.fn.topScroll = function(options){
		
		var setting = $.extend({
			class: '',
			position: 'fixed',
			color: '#123',
			padding: '0px',
			bottom:'10px',
			right: '20px',
			scrVal: 0,
			speed: 'slow'
		},options);
		
		return this.each(function(){
			var me = $(this)
			if(setting.class == ''){
				me.css({
					position: setting.position,
					color: setting.color,
					padding: setting.padding,
					bottom:setting.bottom,
					right: setting.right,
				});
			}else {
				me.addClass(setting.class)	
			}
			me.click(scrolling);
			
			$(window).on('scroll',function(){
				if($(window).scrollTop() < 100) me.fadeOut()
				else me.fadeIn()	
			})			
		})
		
		function scrolling(){
			$('html, body').animate({scrollTop:setting.scrVal}, setting.speed);		
		}
		
	};
}(jQuery));