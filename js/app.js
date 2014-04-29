$(document).ready(function() {
  $('.ryu').mouseenter(function() {
  	console.log("one");
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
  	console.log("two");
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
  	console.log("three");
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
  		{'left': '300px'},
  		500,
  		function() {
    		$(this).hide();
    		$(this).css('left', '-212px');
  		}
	);
  })
  .mouseup(function() {
  	console.log("four");
    $('.ryu-throwing').hide();
  	$('.ryu-ready').show(); 
  })
  $('body').keydown(function(event) {
  	console.log(event);
  	$('.ryu-still').hide();
    $('.ryu-ready').hide();
    if (event.which == '88') { 
    	$('.ryu-cool').show();
    }
  });
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}