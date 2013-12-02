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
	  			}, 500, function() {
		});

		setTimeout(function(){
		block.css({'display':'none'});
		},300);
	});
}

modalBlock($('#reg'),$('#registration'),-339);
modalBlock($('#enter'),$('#authorization'),-200);
	
	
	$('#forgotLink').click(function(){
		var forgot = true;
		if (forgot){
			$('#authorization').css({'display':'none'}); 
			$('#forgotPassword').css({'display':'block'}); 
			forgot=false;
		} else {
			$('#forgotPassword').css({'display':'none'});
			$('#authorization').css({'display':'block'}); 
			forgot=true;
		}
	})

/*function amnezia(block1, block2, forgot){
	this.click
	block1.animate({
		'height': blockHeight,
		}, 300, function() {}
	);

	setTimeout(function(){
		block1.css({'display':'none'}); 
		block2.css({'display':'block'}); 
	},200);	
};

	/*function amnezia(block1, block2,forgot){

			if (forgot=true){
				blockHeight= '220px';
				forgot=!forgot;
			} else {
				blockHeight=authorizationHeight;
			}

			block1.animate({
		   		'height': blockHeight,
		  			}, 300, function() {
			});

			setTimeout(function(){
				block1.css({'display':'none'}); 
				block2.css({'display':'block'}); 
			},200);	
		};

	$('#forgotLink').bind('click', function() {
		amnezia($('#authorization'),$('#forgotPassword'),true);
	});	

	$('#comeBack').bind('click', function() {
		amnezia($('#forgotPassword'),$('#authorization'),false);
	});	*/
	
/*
$('#forgotLink').bind('click', function() {
	
	$('#authorization').animate({
   		'height': forgotPasswordHeight,
  			}, 300, function() {
	});
	setTimeout(function(){
		$('#authorization').css({'display':'none'}); 
		$('#forgotPassword').css({'display':'block'}); 
	},200);	
	
});


$('#comeBack').bind('click', function() {
	
	$('#forgotPassword').animate({
   		'height': authorizationHeight,
  			}, 300, function() {
	});
	setTimeout(function(){
		$('#authorization').css({'display':'block'}); 
		$('#forgotPassword').css({'display':'none'});
	},200);	 
});
*/

	
});


