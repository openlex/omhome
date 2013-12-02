$(document).ready(function(){
	$('.modal').css({'left':'-500px'});
	const authorizationHeight = $('#authorization').height();
	const forgotPasswordHeight = $('#forgotPassword').height();

 function modalBlock(button, block, marginLeft){

	button.click(function(){

		$('.overlay').css({'display':'block'});
		$('.modal').css({'marginLeft': marginLeft+'px'});
		$('.overlay').animate({
	   		'opacity': '0.8',
	  			}, 300, function() {
				});
		block.css({'display':'block'});
		$('.modal').animate({
	   		'left': '50%',
	  			}, 500, function() {
			});

	});

	$('.overlay').click(function(){
		
		$('#forgotPassword').height(forgotPasswordHeight);
		$('#authorization').height(authorizationHeight); 

		$('.overlay').animate({
	   		'opacity': '0',
	  			}, 600, function() {
			});


		setTimeout(function(){
			$('.overlay').css({'display':'none'});
			$('#forgotPassword').css({'display':'none'}); 
		},500);
		
		$('.modal').animate({
	   		'left':'-500px',
	  	}, 500, function() {}
	  	);

		setTimeout(function(){
		block.css({'display':'none'});
		},300);
	});
}

modalBlock($('#reg'),$('#registration'),-339);
modalBlock($('#enter'),$('#authorization'),-200);


$('#forgotLink').click( function() {
	
	$('#authorization').animate({
   		'height': forgotPasswordHeight,
  			}, 300, function() {
	});
	setTimeout(function(){
		$('#authorization').css({'display':'none'}); 
		$('#forgotPassword').css({'display':'block'}); 
		$('#forgotPassword').height(forgotPasswordHeight);
		
	},200);	
	
	
});


$('#comeBack').click( function() {
	
	$('#forgotPassword').animate({
   		'height': authorizationHeight,
  			}, 300, function() {
	});
	setTimeout(function(){
		$('#authorization').css({'display':'block'}); 
		$('#forgotPassword').css({'display':'none'});
		$('#authorization').height(authorizationHeight); 
		
	},200);	 
	
});

	
});


