$(function() {

	var timer = null,
		ie8 = false,
		maxieh = 700;
	
	/* ie8-check */
	if ($.browser.version == 8.0) ie8 = true
	var mqforie8 = function(){
			var windowh = $(window).height();
			var $wrapper = $('body');
			if(windowh < maxieh) {$wrapper.addClass("oldie")}
			if(windowh > maxieh) {$wrapper.removeClass("oldie")}

		}		
	
	/* ie8 mediaquery-script onload + onresize */
	if(ie8) {
	 $(window).resize(function(){mqforie8()})
	 mqforie8();
	}
	console.log($.browser.msie)
	//$('body').addClass('ie');
	
	
	/* relpace |a| with at  */
	$('.footer').html(function(){
		return $(this).html().replace('|a|','@')}
		)

	/* init cycle */
    $('.wrapper').cycle({
        fx:     'fade',
        speed:  'slow',
        timeout: 0,
        pager:  '#nav',
        pagerAnchorBuilder: function(idx, slide) {
            return '#nav li:eq(' + (idx) + ') a';
        },
        updateActivePagerLink: function(pager, activeIndex){
			/* set active class to active item */
			$(pager).find('li:eq('+activeIndex+')').addClass('active').siblings().removeClass('active')
			
			/* give bgcolor to body */
			$('body').css('background',($(('.page.color'+activeIndex+'')).css('background-color')));
			
			/* give bgcolor to body */
			//$('#nav ul.ie').attr('class','ie menu'+activeIndex+'');
			
			clearInterval(timer);
		}
			
    })
	
	timer = setInterval(function(){$('.wrapper').cycle('next')},10000);
	
	/*  */
	$('.header img').click(function(){$('.wrapper').cycle(0)})
	
	/* bind cursor keys left + right */
	$(document).on('keydown', function(e) {
		var keyCode = e.keyCode ? e.keyCode : e.which;
		if (keyCode == 37)
			$('.wrapper').cycle('prev');
		 else if (keyCode == 39)
			$('.wrapper').cycle('next');
	});
	
	
	
    
});
