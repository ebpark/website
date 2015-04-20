var winHeight = $(window).innerHeight(); // setting winHeight to be the variable for browser height
	
$(document).ready(function() {

	$(".title").pin() // pins the title on top of page

    $(".panel").height(winHeight);
    $("body").height(winHeight*$(".panel").length*0.5); // sets height of body based on number of divs on the page

});

	window.addEventListener('resize', function (event) {
    	$(".panel").height($(window).innerHeight()); // resizes each panel for responsiveness
	});

	$(window).on('scroll',function(){
    	$(".panel_left").css('bottom',$(window).scrollTop()*-1); // enables reverse scrolling of left side of the screen
	});
	
$(document).scroll(function(){
		$y = $(document).scrollTop();	// calculates how much you have scrolled

		if ($y >= 300) { // when scrolled for 300 pixels or more...
			$(".title").fadeOut(); // center title fades out
			$("#title_left").fadeIn(); // "Split" appears on top left
			$("#title_right").fadeIn(); // "Scrolling" appears on top right
		}

		else { // when scrolled back to top...
			$(".title").fadeIn(); // center title fades back in
			$("#title_left").fadeOut(); // and the rest fades out
			$("#title_right").fadeOut();
		}
});