// Parallax init
	// Doesn't need jQuery either
	// var scene = document.getElementById('scene');
	// var parallaxInstance = new Parallax(scene);



// Switching topics with typewriter effect functions
	var TxtType = function(el, toRotate, period) {
	    this.toRotate = toRotate;
	    this.el = el;
	    this.loopNum = 0;
	    this.period = parseInt(period, 10) || 3000;
	    this.txt = '';
	    this.tick();
	    this.isDeleting = false;
	};

	TxtType.prototype.tick = function() {
	    var i = this.loopNum % this.toRotate.length;
	    var fullTxt = this.toRotate[i];

	    if (this.isDeleting) {
	    	this.txt = fullTxt.substring(0, this.txt.length - 1);
	    } else {
	    	this.txt = fullTxt.substring(0, this.txt.length + 1);
	    }

	    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	    var that = this;
	    var delta = 150 - Math.random() * 100;

	    if (this.isDeleting) { delta /= 2; }

	    if (!this.isDeleting && this.txt === fullTxt) {
	        delta = this.period;
	        this.isDeleting = true;
	    } else if (this.isDeleting && this.txt === '') {
	        this.isDeleting = false;
	        this.loopNum++;
	        delta = 500;
	    }

	    setTimeout(function() {
	    	that.tick();
	    }, delta);
	};



// Functions dependable of jQuery
	// Wait until jQuery has been loaded
	$(document).ready(function(){
		// Remove loading screen
			TweenMax.to($('#loaderWrapper'), 0.6, {autoAlpha: 0, display:'none', delay:1, onComplete:insertBodyText});

			function insertBodyText(){
				// Show hidden elements at hero section
					TweenMax.staggerTo($('.intro-hero'), 1, {autoAlpha: 1}, 0.1);

				// Show hidden elements within viewport (activate InView)
					inviewTransitions();

				// Start switching topics at default hero header
			        var shiftPhrases = $('#mb-topics');
			        for (var i=0; i<shiftPhrases.length; i++) {
			            var toRotate = shiftPhrases[i].getAttribute('data-type');
			            var period = shiftPhrases[i].getAttribute('data-period');
			            if (toRotate) {
			            	new TxtType(shiftPhrases[i], JSON.parse(toRotate), period);
			            }
			        }
			}


		// Waypoints interactions
			// Header-Nav links styled to point in which section user is
				var headerNavPointers = {};
				headerNavPointers.hero = new Waypoint({
					element: $('#section-02'),
					handler: function(){
						$('#about-nav-pointer').removeClass('active');
						$('#book-nav-pointer').removeClass('active');
						$('#founder-nav-pointer').removeClass('active');
						$('#contact-nav-pointer').removeClass('active');
					},
					offset: 300
				});


				headerNavPointers.about = new Waypoint({
					element: $('#section-02'),
					handler: function(direction){
						if(direction == "down"){
							$('#about-nav-pointer').addClass('active');
						} else {
							$('#about-nav-pointer').removeClass('active');
						}
					},
					offset: 200
				});


				headerNavPointers.podcasts = new Waypoint({
					element: $('#section-03'),
					handler: function(direction){
						if(direction == "down"){
							$('#podcast-nav-pointer').addClass('active');
							$('#about-nav-pointer').removeClass('active');
						} else {
							$('#about-nav-pointer').addClass('active');
							$('#podcast-nav-pointer').removeClass('active');
						}
					},
					offset: 200
				});


				headerNavPointers.book = new Waypoint({
					element: $('#section-04'),
					handler: function(direction){
						if(direction == "down"){
							$('#book-nav-pointer').addClass('active');
							$('#podcast-nav-pointer').removeClass('active');
						} else {
							$('#book-nav-pointer').removeClass('active');
							$('#podcast-nav-pointer').addClass('active');
						}
					},
					offset: 200
				});


				headerNavPointers.founder = new Waypoint({
					element: $('#section-05'),
					handler: function(direction){
						if(direction == "down"){
							$('#founder-nav-pointer').addClass('active');
							$('#book-nav-pointer').removeClass('active');
						} else {
							$('#founder-nav-pointer').removeClass('active');
							$('#book-nav-pointer').addClass('active');
						}
					},
					offset: 200
				});


				headerNavPointers.contact = new Waypoint({
					element: $('#section-06'),
					handler: function(direction){
						if(direction == "down"){
							$('#contact-nav-pointer').addClass('active');
							$('#founder-nav-pointer').removeClass('active');
						} else {
							$('#founder-nav-pointer').addClass('active');
							$('#contact-nav-pointer').removeClass('active');
						}
					},
					offset: 400
				});

			// Header-Nav text color change to keep visible on any section
				var headerNavTextColor = {}
				var turnNavWhite = function() {
					$('#header-nav-links').addClass('onBlue');
					$('#header-nav-links').removeClass('onWhite');
				}
				var turnNavBlue = function() {
					$('#header-nav-links').addClass('onWhite');
					$('#header-nav-links').removeClass('onBlue');
				}

				headerNavTextColor.about = new Waypoint({
					element: $('#section-02'),
					handler: function(direction){
						if (direction == "up"){
							turnNavWhite();
							$('#header-nav-links').addClass('onDarkBlue');

							$('#mobile-burger').removeClass('onWhite');
						} else {
							turnNavBlue();
							$('#header-nav-links').removeClass('onDarkBlue');

							$('#mobile-burger').addClass('onWhite');
						}
					},
					offset: 60
				});

				headerNavTextColor.aboutMidBreak = new Waypoint({
					element: $('#blue-about-break'),
					handler: function(direction){
						if (direction == "down"){
							turnNavWhite();
						} else {
							turnNavBlue();
						}
					},
					offset: 60
				});

				headerNavTextColor.aboutPart2 = new Waypoint({
					element: $('#end-about-break'),
					handler: function(direction){
						if (direction == "up"){
							turnNavWhite();
						} else {
							turnNavBlue();
						}
					},
					offset: 60
				});

				headerNavTextColor.contact = new Waypoint({
					element: $('#dark-contact-section'),
					handler: function(direction){
						if (direction == "down"){
							turnNavWhite();
						} else {
							turnNavBlue();
						}
					},
					offset: 60
				});

			// Header-Nav subscribe "cta" button hide/show on Hero section
				var headerNavCtaDisplay = {};
				headerNavCtaDisplay.subscribe = new Waypoint({
					element: $('#section-02'),
					handler: function(direction){
						if (direction == "down"){
							$('#header-cta-subscribe').addClass('show-except-mobile');
						} else {
							$('#header-cta-subscribe').removeClass('show-except-mobile');
						}
					},
					offset: 60
				});

			// Header-Nav subscribe "cta" change color to stay visible on any section
				var headerNavCtaColor = {};
				headerNavCtaColor.aboutMidBreak = new Waypoint({
					element: $('#blue-about-break'),
					handler: function(direction){
						if (direction == "down"){
							$('#header-nav-subscribe').addClass('dark-blue');
							$('#header-nav-subscribe').removeClass('blue');
						} else {
							$('#header-nav-subscribe').addClass('blue');
							$('#header-nav-subscribe').removeClass('dark-blue');
						}
					},
					offset: 60
				});

				headerNavCtaColor.aboutPart2 = new Waypoint({
					element: $('#end-about-break'),
					handler: function(direction){
						if (direction == "up"){
							$('#header-nav-subscribe').addClass('dark-blue');
							$('#header-nav-subscribe').removeClass('blue');
						} else {
							$('#header-nav-subscribe').addClass('blue');
							$('#header-nav-subscribe').removeClass('dark-blue');
						}
					},
					offset: 60
				});

				headerNavCtaColor.contact = new Waypoint({
					element: $('#dark-contact-section'),
					handler: function(direction){
						if (direction == "up"){
							$('#header-nav-subscribe').addClass('blue');
							$('#header-nav-subscribe').removeClass('dark-blue');
						} else {
							$('#header-nav-subscribe').addClass('dark-blue');
							$('#header-nav-subscribe').removeClass('blue');
						}
					},
					offset: 60
				});

			// Reveal items while scrolling
				function inviewTransitions() {
					var inviewElements = $('.listen-inview');

					inviewElements.each(function(el){
						new Waypoint.Inview({
							element: this,
							entered: function(){
								// console.log('Section entering: ' + this.element);
								// TweenMax.staggerTo($(this.element).find('.inview-children'), 0.5, {autoAlpha: 1, y: 0}, 0.05);
								$.each($(this.element).find('.inview-children'), function(index, el) {
									setTimeout(function(){
								       $(el).addClass('active');
								    }, ( index * 90 ));
								});
							},
							exited: function(){
								// TweenMax.staggerTo($(this.element).find('.inview-children'), 0, {autoAlpha: 0, y: 20}, 0);
								$.each($(this.element).find('.inview-children'), function(index, el) {
									setTimeout(function(){
								       $(el).removeClass('active');
								    }, ( index * 90 ));
								});
							},
							offset: 0
						});
					});
				}

				


		// Mobile | Open/close menu
			var mobileMenuOpen = false;
			var toggleMobileMenu = function() {
				$('#mobile-nav-wrapper').toggleClass('open');
				$('#mobile-burger').toggleClass('open');

				$.each($('.mobile-menu-intro'), function(index, el) {
					setTimeout(function(){
				       $(el).toggleClass('show');
				    }, ( index * 90 ));
				});
				
				if(!mobileMenuOpen){
					mobileMenuOpen = true;
				} else {
					mobileMenuOpen = false;
				}
			}

			$('#mobile-menu-trigger').on("click", function(e){
				toggleMobileMenu();
			});
			$('#home-trigger').find('.nav-click').on("click", function(e){
				if(mobileMenuOpen){
					toggleMobileMenu();
				}
			});
			$('#mobile-nav-wrapper').find('.nav-click').on("click", function(e){
				toggleMobileMenu();
			});
		// Header menu smooth scrolling to all nav links
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
					}, 2300, "easeInOutQuint", function(){
				        // Add hash (#) to URL when done scrolling (default click behavior)
				    	// window.location.hash = hash;
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
				// console.log("Animation done!");
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
	

		// Subscribe mini form functionality
		$("#submit-subscribe").on("click", function(){
			if($('#input-subscribe-name').val() == "" || $('#input-subscribe-cellphone').val() == ""){
				alert("You must fill both fields to subscribe!");
			} else {
		  		$.ajax({
		  			url: "/subscribe_tels.php",
		  			type: "POST",
		  			data: { name: $('#input-subscribe-name').val(), tel: $("#input-subscribe-cellphone").val()  },
		  		})
		  		.done(function(e) {
			        console.log("e",e);
			        TweenMax.to($('.subscribe-section'), 0.6, {autoAlpha: 0, display: 'none', onComplete:function(){
			        	$('.subscribe-section').html('<h3 class="intro-title h2"> Thanks for subscribing! </h3> <p class="intro-description h4"> Wait news from us sooon. </p>').fadeIn();
			        	TweenMax.to($('.subscribe-section'), 0.6, {autoAlpha: 1, display: 'block'  });
			        } });
			        
			    });
		  	}
		});


		// Contact form "resize-able" inputs and textarea (pending)
		
	});

