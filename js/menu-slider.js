$(document).ready(function(){
	
 	var leftArrow = $('.leftArrow');
    var rightArrow = $('.rightArrow');
    var ul = $(".menuLine ul")
    var i = -1;

	$(".menuSlider").css({'display':'block'});
    ul.prependTo(".menuSlider"); // check prepend() examples
    $(".menuSlider").width($( window ).width());

	leftArrow.click(function(){
		i+=1;
		alert($(".menuLine li").eq(i).width());
		ul.animate({
	   		'margin-left': -($(".menuLine li").eq(i).width()),
	  			}, 300, function() {
  			});
	});

	rightArrow.click(function(){
		i-=1;
		alert($(".menuLine li").eq(i).width());
		ul.animate({
	   		'margin-left': +($(".menuLine li").eq(i).width()),
	  			}, 300, function() {
  			});
	});


});



    
