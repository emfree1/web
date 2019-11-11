$('.count').counterUp({
    delay: 10,
    time: 1000
});
$(document).ready(function() {
    $('.popap-botton').magnificPopup({type:'iframe'});
  });

$(document).ready(function() {
	$('.popap-botton').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});
$('.popap-botton').magnificPopup({
    type: 'iframe',
    
    
    iframe: {
      patterns: {
        dailymotion: {
         
          index: 'youtube.com',
          
          id: function(url) {        
              var m = url.match(/^.+youtube.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
              if (m !== null) {
                  if(m[4] !== undefined) {
                    
                      return m[4];
                  }
                  return m[2];
              }
              return null;
          },
          
          src: 'https://www.youtube.com/embed/tAGnKpE4NCI'
          
        }
      }
    }
    
    
  });
  $('.main-header').parallax({imageSrc: '/path/to/image.jpg'});