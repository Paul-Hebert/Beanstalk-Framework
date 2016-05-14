$(function() {
	initialize_mobile_menu();
});

function initialize_mobile_menu(){
	$('#menu-toggle').click(function(){
		if ( $('#menu-toggle svg').attr('class') === 'open' ){
			$('#menu-toggle svg').attr('class','');
			$('#mobile_modal').fadeOut();
		} else{
			$('#menu-toggle svg').attr('class','open');
			$('#mobile_modal').fadeIn();			
		}

		var first_y = $('.first-line').attr('y2');
		var last_y = $('.last-line').attr('y2');

		animate(
	        $('.first-line'), // target jQuery element
	        { y2: last_y}, // target attributes
	        300 // optional duration in ms, defaults to 400
	    );
		animate(
	        $('.last-line'), // target jQuery element
	        { y2: first_y}, // target attributes
	        300 // optional duration in ms, defaults to 400
	    );

		$('header nav').toggleClass('open');
	});
}

/*****************************************************************************************************/
// Borrowed functions
/*****************************************************************************************************/

// Function allows you to animate SVG attributes like you would CSS properties. http://stackoverflow.com/a/17361309
function animate($el, attrs, speed) {
    speed = speed || 400;
    var start = {},
        timeout = 20,
        steps = Math.floor(speed/timeout),
        cycles = steps;
    
    $.each(attrs, function(k,v) {
        start[k] = $el.attr(k);
    });
    
    (function loop() {
        $.each(attrs, function(k,v) {
            var pst = (v - start[k])/steps;
            $el.attr(k, function(i, old) {
                return + old + pst;
            });
        });
      if ( --cycles )
          setTimeout(loop, timeout);
      else
          $el.attr(attrs);
    })();
}
