	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.

	var player;

	function onYouTubeIframeAPIReady() {
	    $(document).ready(function () {
	        $('.your-team .singleimage .item').on('click', function (e) {
	            e.preventDefault();
	            var id = $(this).children('.video').children('.vid').text();
	            player = new YT.Player('player', {
	                height: '390',
	                width: '640',
	                videoId: id,
	                events: {
	                    'onReady': onPlayerReady,
	                    'onStateChange': onPlayerStateChange
	                }
	            });
	        });

	        $('.testimonial-info-item .video i').on('click', function (e) {
	            e.preventDefault();
	            var id = $(this).siblings('.vid').text();
	            player = new YT.Player('player', {
	                height: '390',
	                width: '640',
	                videoId: id,
	                events: {
	                    'onReady': onPlayerReady,
	                    'onStateChange': onPlayerStateChange
	                }
	            });
	        });


	    });
	}

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
	    event.target.playVideo();
	}
	// 5. The API calls this function when the player's state changes.
	//    The function indicates that when playing a video (state=1),
	//    the player should play for six seconds and then stop.
	var done = false;

	function onPlayerStateChange(event) {
	    $(document).ready(function () {
	        if (event.data == 0) {
	            $('.your-team-popup').removeClass('open');
	            $('.your-team-popup .video').empty();
	            $('.testimonial-info-popup .video').empty();
	            $('.testimonial-info-popup').removeClass('testimonial-info-popup-open');
	        }
	    });
	}
