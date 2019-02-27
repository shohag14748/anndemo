$(function ($) {

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.header-area').addClass('navbar-fixed');
		} else {
			$('.header-area').removeClass('navbar-fixed');
		}
	});

	$(window).on('load', function () {
		$('.mypreloder').fadeOut({}, 1000)
	});

	wow = new WOW({})
		.init();

	$('.toggle-btn').click(function () {
		$(this).toggleClass('active');
		$('.main-nav-menu-area').toggleClass('active');
	})



	$('.texts').textillate({
		loop: true,
		minDisplayTime: 2000,
		initialDelay: 0,
		autoStart: true,
	});

	$('a.target[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});


	$('.brnd').owlCarousel({
		loop: true,
		autoplay: false,
		responsiveClass: true,
		nav: false,
		navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		dots: false,
		margin: 10,
		responsive: {
			0: {
				items: 2,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
			}
		}
	});




	/*$("#sticker").sticky({
	topSpacing:0,className: 'is-sticky'
	});*/


	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li a').click(function (g) {
		var tab = $(this).closest('.tab'),
			index = $(this).closest('li').index();

		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');

		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

		g.preventDefault();
	});




	// Remove svg.radial-progress .complete inline styling
	$('svg.radial-progress').each(function (index, value) {
		$(this).find($('circle.complete')).removeAttr('style');
	});

	// Activate progress animation on scroll
	$(window).scroll(function () {
		$('svg.radial-progress').each(function (index, value) {
			// If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
			if (
				$(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
				$(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
			) {
				// Get percentage of progress
				percent = $(value).data('percentage');
				// Get radius of the svg's circle.complete
				radius = $(this).find($('circle.complete')).attr('r');
				// Get circumference (2πr)
				circumference = 2 * Math.PI * radius;
				// Get stroke-dashoffset value based on the percentage of the circumference
				strokeDashOffset = circumference - ((percent * circumference) / 100);
				// Transition progress for 1.25 seconds
				$(this).find($('circle.complete')).animate({
					'stroke-dashoffset': strokeDashOffset
				}, 1250);
			}
		});
	}).trigger('scroll');







	/*
			-------- particals
		*/
	// ParticlesJS Config.
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 80,
				"density": {
					"enable": true,
					"value_area": 700
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 140,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});


	
	
//	folder
	
	
	$(".folder .item").on('click', function(e) {
		e.preventDefault();
		$(this).slideUp();
		$(this).next().slideDown();
	});
	$(".folder .item:last-child").click(function(e){
		e.preventDefault();
		$(".item:first-child").slideDown();
	});
	var x =$(".folder").parent('.col-lg-3').width();
	var y =$(".folder").parent('.col-lg-3').width()*1.35;
	$(".folder").css({
		width:x,
		height:y,
	});
	$(window).resize(function(){
		var x =$(".folder").parent('.col-lg-3').width();
		var y =$(".folder").parent('.col-lg-3').width()*1.35;
		$(".folder").css({
			width:x,
			height:y,
		});
	});

	
//	Your Team


	$('.your-team-popup').click(function(e) {
		e.preventDefault();
		if($(e.target).closest('.your-team-popup-content').length === 0){
			$('.your-team-popup').removeClass('open');
//			$('.your-team-popup .video').empty();
//			$('.your-team-popup .video').append('<div id="player"></div>');
		}
	});
	$('.your-team .singleimage .item').on('click', function () {
		$('.your-team-popup').addClass('open');
	});
//	$('.your-team .singleimage .item').on('click', function (e) {
//		e.preventDefault();
//		var video = $(this).children('.no-video').clone();
//		$('.your-team-popup .video').prepend(video);
//	});




	
//	counter up
	
	$(window).scroll(function() {
	  var oTop = $('#counter1').offset().top - ($(window).height() * 0.75);
	  if ($(window).scrollTop() > oTop) {
		$('#counter1 .counter-value').each(function() {
		  var $this = $(this),
			countTo = $this.attr('data-count');
		  $({
			countNum: $this.text()
		  }).animate({
			  countNum: countTo
			},

			{

			  duration: 1250,
			  easing: 'swing',
			  step: function() {
				$this.text(Math.floor(this.countNum));
			  },
			  complete: function() {
				$this.text(this.countNum);
				//alert('finished');
			  }

			});
		});
	  }
	});
	$("span.counter").counterUp({
		delay: 10,
		time: 1000,
		offset: 100, 
	  });
	
	
	$('.reph1').mouseenter(function(){$('.rep1').addClass('ripple2');});
	$('.reph1').mouseleave(function(){$('.rep1').removeClass('ripple2');});
	$('.reph2').mouseenter(function(){$('.rep2').addClass('ripple2');});
	$('.reph2').mouseleave(function(){$('.rep2').removeClass('ripple2');});
	$('.reph3').mouseenter(function(){$('.rep3').addClass('ripple2');});
	$('.reph3').mouseleave(function(){$('.rep3').removeClass('ripple2');});
	$('.reph4').mouseenter(function(){$('.rep4').addClass('ripple2');});
	$('.reph4').mouseleave(function(){$('.rep4').removeClass('ripple2');});
	$('.reph5').mouseenter(function(){$('.rep5').addClass('ripple2');});
	$('.reph5').mouseleave(function(){$('.rep5').removeClass('ripple2');});
	$('.reph6').mouseenter(function(){$('.rep6').addClass('ripple2');});
	$('.reph6').mouseleave(function(){$('.rep6').removeClass('ripple2');});
	
	
	
	
	
	
	

})(jQuery);
