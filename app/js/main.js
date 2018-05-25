// Waypoints init
	// Doesn't need jQuery
	var waypoint = new Waypoint({
		element: document.getElementById('section-03'),
		handler: function(direction) {
			console.log('Basic waypoint triggered. Direction: ' + direction);
		},
		offset: 300
	});



// Parallax init
	// Doesn't need jQuery either
	// var scene = document.getElementById('scene');
	// var parallaxInstance = new Parallax(scene);



// Header menu smooth click navigation
	// Wait until jQuery has been loaded
	$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $(".nav-click").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function(){
		        // Add hash (#) to URL when done scrolling (default click behavior)
		    	window.location.hash = hash;
		    });
	    } // End if
	  });
	});