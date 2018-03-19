(function($){

	$('.slider').slick({
		
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		speed: 1000
		
	});


	$('.scroll').click(function() {

		$("html, body").animate({ scrollTop: $('#pref').offset().top }, 1000);
    	
    });

})(jQuery);
