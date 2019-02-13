$(window).mouseout(function(event) { 
	if(event.pageY <= $(window).scrollTop() + 5){
		$('#exitpopup').css('left', (window.innerWidth/2 - $('#exitpopup').width()/2));
		$('#exitpopup').css('top', (window.innerHeight/2 - $('#exitpopup').height()/2));
		// Show the exit popup
		$('#exitpopup_bg').fadeIn();
		$('#exitpopup').fadeIn();
	}
 });

$('body').click(function(){
    $('#exitpopup_bg').fadeOut();
    $('#exitpopup').slideUp();
});