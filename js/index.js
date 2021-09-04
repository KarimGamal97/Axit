///// start navbar fixed/////////////////
/*global $, jQuery, alert*/
$(function () {
	'use strict';
	$(window).scroll(function () {
		var navbar = $('.navbar');
		if ($(window).scrollTop() >= navbar.height()) {
			navbar.addClass('scrolled');
		} else {
			navbar.removeClass('scrolled');
		}
	});
});
///// end navbar fixed/////////////////

///// start active tabs/////////////////

$('.tab-switch li').click(function () {
	$(this).addClass('selected').siblings().removeClass('selected');
	$('.tabs-section .tabs-content > div').hide();
	$($(this).data('class')).show();
});

///// end active tabs/////////////////

///// start scroll up/////////////////

$(function () {
	
var scrollButton = $("#scroll-up");
	
$(window).scroll(function()
					 
 {
		$(this).scrollTop() >= 500 ? scrollButton.show() : scrollButton.hide();
	});
	scrollButton.click(function()
	{	   
$("html,body").animate({scrollTop : 0}, 1500);
	});
});


///// end scroll up/////////////////

