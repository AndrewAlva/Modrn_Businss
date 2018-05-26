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
		// Remove loading screen
			TweenMax.to($('#loaderWrapper'), 0.6, {autoAlpha: 0, display:'none', delay:1, onComplete:insertBodyText});

			function insertBodyText(){
				TweenMax.staggerTo($('.intro-hero'), 1, {autoAlpha: 1}, 0.1);
			}

		// Add smooth scrolling to all nav links
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


		// Hero section content shifting triggers
			var activeHero = "default";

			$("#home-trigger").on('click', function(event) {
				$('.shifting-hero-content').removeClass('media-display');
				TweenMax.to($('#logo-photo'), 0.6, {autoAlpha: 1});

				var tl = new TimelineMax({onComplete:noticeMe});

				switch(activeHero) {
					case "podcast":
						tl.to($('#podcast-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#default-hero-content'), 0.6, {autoAlpha: 1, display:'block'});

						TweenMax.to($('#podcast-photo'), 0.6, {autoAlpha: 0});
						break;


					case "book":
						tl.to($('#book-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#default-hero-content'), 0.6, {autoAlpha: 1, display:'block'});

						TweenMax.to($('#book-photo'), 0.6, {autoAlpha: 0});
						break;


					case "tv":
						tl.to($('#tv-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#default-hero-content'), 0.6, {autoAlpha: 1, display:'block'});

						TweenMax.to($('#tv-photo'), 0.6, {autoAlpha: 0});
						break;
				}

				activeHero = "default";
			});


			$("#podcast-trigger").on('click', function(event) {
				TweenMax.to($('#podcast-photo'), 0.6, {autoAlpha: 1});

				var tl = new TimelineMax({onComplete:noticeMe});

				switch(activeHero) {
					case "default":
						$('.shifting-hero-content').addClass('media-display');
						
						tl.to($('#default-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#podcast-hero-content'), 0.6, {autoAlpha: 1, display:'block'});
						TweenMax.to($('#logo-photo'), 0.6, {autoAlpha: 0});
						break;

					case "book":
						tl.to($('#book-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#podcast-hero-content'), 0.6, {autoAlpha: 1, display:'block'});
						TweenMax.to($('#book-photo'), 0.6, {autoAlpha: 0});
						break;

					case "tv":
						tl.to($('#tv-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#podcast-hero-content'), 0.6, {autoAlpha: 1, display:'block'});
						TweenMax.to($('#tv-photo'), 0.6, {autoAlpha: 0});
						break;
				}

				activeHero = "podcast";
			});



			$("#book-trigger").on('click', function(event) {
				TweenMax.to($('#book-photo'), 0.6, {autoAlpha: 1});

				var tl = new TimelineMax({onComplete:noticeMe});

				switch(activeHero) {
					case "default":
						$('.shifting-hero-content').addClass('media-display');
						tl.to($('#default-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#book-hero-content'), 0.6, {autoAlpha: 1, display:'block'});
						TweenMax.to($('#logo-photo'), 0.6, {autoAlpha: 0});
						break;

					case "podcast":
						tl.to($('#podcast-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#book-hero-content'), 0.6, {autoAlpha: 1, display:'block'});
						TweenMax.to($('#podcast-photo'), 0.6, {autoAlpha: 0});
						break;

					case "tv":
						tl.to($('#tv-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#book-hero-content'), 0.6, {autoAlpha: 1, display:'block'});
						TweenMax.to($('#tv-photo'), 0.6, {autoAlpha: 0});
						break;
				}

				activeHero = "book";
			});



			$("#tv-trigger").on('click', function(event) {
				TweenMax.to($('#tv-photo'), 0.6, {autoAlpha: 1});

				var tl = new TimelineMax({onComplete:noticeMe});

				switch(activeHero) {
					case "default":
						$('.shifting-hero-content').addClass('media-display');
						tl.to($('#default-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#tv-hero-content'), 0.6, {autoAlpha: 1, display:'block'});
						TweenMax.to($('#logo-photo'), 0.6, {autoAlpha: 0});
						break;

					case "book":
						tl.to($('#book-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#tv-hero-content'), 0.6, {autoAlpha: 1, display:'block'});
						TweenMax.to($('#book-photo'), 0.6, {autoAlpha: 0});
						break;

					case "podcast":
						tl.to($('#podcast-hero-content'), 0.6, {autoAlpha: 0, display:'none'})
							.to($('#tv-hero-content'), 0.6, {autoAlpha: 1, display:'block'});
						TweenMax.to($('#podcast-photo'), 0.6, {autoAlpha: 0});
						break;
				}

				activeHero = "tv";
			});



			function noticeMe(){
				console.log("Animation done!");
			}


		// Book timer function
			var timer;
			var book_date_string = "September 1, 2018 00:00:00";
			var book_date = new Date(book_date_string);

			timer = setInterval(function() {
				getTimeLeft(book_date);
			}, 1000);

			function getTimeLeft(customDate) {
				var endDate = customDate;
				var currentDate = new Date();
				var timeLeft = endDate.getTime() - currentDate.getTime();

				if (timeLeft <= 0) {
					clearInterval(timer);
					$(".timer-cta").text("The book is available now!");

					$("#countdown-days").text("00");
					$("#countdown-hours").text("00");
					$("#countdown-mins").text("00");
					$("#countdown-secs").text("00");

				} else {
					var seconds = Math.floor(timeLeft / 1000);
					var minutes = Math.floor(seconds / 60);
					var hours = Math.floor(minutes / 60);
					var days = Math.floor(hours / 24);

					hours %= 24;
					minutes %= 60;
					seconds %= 60;

					$("#countdown-days").text(twoDigitsFormat(days));
					$("#countdown-hours").text(twoDigitsFormat(hours));
					$("#countdown-mins").text(twoDigitsFormat(minutes));
					$("#countdown-secs").text(twoDigitsFormat(seconds));
				}
			}

			function twoDigitsFormat(numberToFormat){
				if(numberToFormat < 10) {
					numberToFormat = "0" + numberToFormat;
				}

				return numberToFormat;
			}
	});

