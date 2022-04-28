/*
Website Name:   PORTFOLIO OF SAMWEBDEVELOPER123
Description:    Custom JS
*/
/* 
	All custom ids and classes used for the website, starts with "portfolio".
*/
/* TABLE OF CONTENTS
	1. wow
	2. navigation
		2.1 #portfolio-navbar-1
	3. work
		3.1 #portfolio-work-load
		3.2 .portfolio-work-hidden
END OF TABLE OF CONTENTS */
/* CUSTOM JS */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#portfolio-navbar-1').addClass('solid');
	    } else {
	        $('#portfolio-navbar-1').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#portfolio-navbar-1').hide();
	    }
	    else{
	    	$('#portfolio-navbar-1').show();
	    }
	});
});
/* ACTIVE */
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
/* END OF ACTIVE */
/* SMOOTH SCROLL */
$(document).ready(function(){
	$("a").on('click', function(event){
		if (this.hash !== ""){
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 800, function(){
		    window.location.hash = hash;
		  });
		}
	});
});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* WORK */
$(function(){
    $("#portfolio-work-load").click(function(e){
        e.preventDefault();
        $(".portfolio-work-hidden").slice(0, 1).show();
    });
});
/* END OF WORK */
/* END OF CUSTOM JS */