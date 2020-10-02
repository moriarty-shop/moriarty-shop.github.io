function slowScroll (id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 1400);
	return false;
}


 $(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() < 1513) {
	 $('.question').addClass('mx-auto');
	 $('.answer').addClass('mx-auto');
	 $('.second-question').removeClass('float-right');
	 $('.second-question').addClass('mx-auto');
	 $('.second-answer').removeClass('float-right');
	 $('.second-answer').addClass('mx-auto');
    }
    else {}
 });

 $(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() < 1513) {
		$('.question').addClass('mx-auto');
		$('.answer').addClass('mx-auto');
		$('.second-question').removeClass('float-right');
		$('.second-question').addClass('mx-auto');
		$('.second-answer').removeClass('float-right');
		$('.second-answer').addClass('mx-auto');
    }
	else {
	$('.question').removeClass('mx-auto');
	$('.answer').removeClass('mx-auto');
	$('.second-question').add('float-right');
	$('.second-question').removeClass('mx-auto');
	$('.second-answer').add('float-right');
	$('.second-answer').removeClass('mx-auto');
}
 });

 $(window).resize(function() {
	 if($(window).width() > 1513) {
		 $('.second-question').addClass('float-right');
		 $('.second-answer').addClass('float-right');
	 }
 })


 jQuery(document).ready(function($){
	$(window).scroll(function(){
	   if ($(window).innerHeight() > 200) {
	  $('.second-question').addClass('second-question-anim');
	   }
	  });
	  });


	jQuery(document).ready(function($){
		$(window).scroll(function(){
		   if ($(window).innerHeight() > 250) {
		  $('.second-answer').addClass('second-answer-anim');
		   }
		  });
		  });

	
		  jQuery(document).ready(function($){
			$(window).scroll(function(){
			   if ($(window).innerHeight() > 300) {
			  $('.background-rounds').addClass('background-rounds-anim');
			  $('.second-background-rounds').addClass('second-background-rounds-anim')
			  $('.carousel').addClass('carousel-anim');
			   }
			  });
			  });
	
$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 300) {
			$('#slider-up').fadeIn(600);
		}else{
			$('#slider-up').fadeOut(600);
		}
	});
});