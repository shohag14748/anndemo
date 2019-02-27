	
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      
	  var player;
      function onYouTubeIframeAPIReady() {
		  $(document).ready(function(){
			$('.your-team .singleimage .item').on('click', function (e) {
				e.preventDefault();
				var id = $(this).children('.video').children('iframe').attr('src');
				var pos = id.lastIndexOf("/");
				res = id.slice(pos+1, id.length);
				
			
				player = new YT.Player('player', {
				  height: '390',
				  width: '640',
				  videoId: res,
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
			$(document).ready(function(){
        if (event.data == 0) {
				$('.your-team-popup').removeClass('open');
				$('.your-team-popup .video').empty();
				$('.your-team-popup .video').append('<div id="player"></div>');
        }
			});
      }