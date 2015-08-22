(function($) {
	'use strict';
	
	$.fn.singlePage = function () {
	
		var windowWidth = "";
		var windowHeight = "";

		var scroll_ammount = $('#section1').offset().top;
		$('html, body').animate({scrollTop: scroll_ammount }, 500);
		
		setDimensions();
		
		$(window).resize(setDimensions);
		
		$("#mobile_menu").click(open_close_menu);
		
		if ( windowWidth < 768) {
			$(".buttons").click(open_close_menu);
		}


	
		$(".buttons").click(scroll_to_section);
		
		$(window).scroll(menu_track);
		
		function menu_track() {
			
			$('.section').each(function() {

				if( $(window).scrollTop() >= $(this).offset().top &&
				    $(window).scrollTop() < ($(this).offset().top + $(this).height() ) ) {

					var current_id = $(this).attr('id');
					
					$('.buttons').each(function(){
						if($(this).attr('data-section') == current_id) {
							$(".buttons").removeClass("current");
							$(this).addClass('current');
						}
						
					});
					
				}
			});

		}
		
		function setDimensions() {

			windowWidth = $(window).width();
			windowHeight = $(window).height();
				
			$(".section").each(function() {
				if ( $(this).height() < windowHeight) {
					$(this).css({
						"height" : windowHeight 
					});
				} 
			});
			
			if ( windowWidth > 768 ) {
				$("#menuContainer").css({
					"height" : 'auto' 
				});
			} else {
				$("#menuContainer").css({
					"height" : '0px' 
				});
				
			}

		}
		
		function scroll_to_section() {
	
			var clicked = $(this).find('a:first').attr('href');
	
			var scroll_ammount = $(clicked).offset().top + 10;

			$('html, body').animate({scrollTop: scroll_ammount }, 500);
	
			//$(".buttons").removeClass("current");
	
			//$(this).addClass("current");

		}
		
		function open_close_menu() {
			var navHeight = $('#menuContainer').height();
			var newNavHeight = $('#menu').height();
				
			if (navHeight == 0){
				$('#menuContainer').animate({'height':newNavHeight+'px'},500);
				
			}
			else{
				$('#menuContainer').animate({'height':'0px'},500);
				
			}	
		}
				
	};	
})(jQuery);


