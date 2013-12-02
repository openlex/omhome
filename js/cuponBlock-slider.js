$(document).ready(function() { 
	/*var ua = navigator.userAgent;
	if (ua.search(/Firefox/) > 0) alert('firefox');*/

	$(".cupon").mouseenter(function(){
		$(".slideInfo",this).animate({
	   		bottom: "+=50",
	  		}, 300, function() {
  		});
	})

	$(".cupon").mouseleave(function(){
		$(".slideInfo",this).animate({
	   		bottom: "-=50",
	  		}, 300, function() {
  		});
	})
});