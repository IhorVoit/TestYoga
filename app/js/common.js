  	
$(document).ready(function(){

	$(".portfolio-item").magnificPopup({
		type : 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: false,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 500 // don't foget to change the duration also in CSS
		},
		gallery : {
			enabled : true
		}
	});
	var animationName = 'animated shake';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('.button-try-it').on('click', function(){
			$('.input').addClass(animationName).one(animationEnd,
				function(){
					$(this).removeClass(animationName);
				});
	});
});


$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+100) {
        $(this).addClass('fadeInLeft');
      }
    });
  });

$(window).scroll(function() {
    $('.mov1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+300) {
        $(this).addClass('fadeInRight');
      }
    });
  });
$(window).scroll(function() {
    $('.mov2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+300) {
        $(this).addClass('fadeInRight');
      }
    });
  });

$(document).ready(function(){
	$('.menu a, .top-button, .mobile-menu a').mPageScroll2id({
		offset: 100,
		scrollSpeed: 1500
	});
});

$(document).ready(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".menu-button");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

$(".menu-button").click(function(){
 			if ($(".mobile-menu").is(":visible")) {
 				$(".mobile-menu").fadeOut(700);
 			} else {
 				$(".mobile-menu").fadeIn(700);
 			}; 		
  	});
$(".mobile-menu ul a").click(function(){
	$(".mobile-menu"). fadeOut(700);
	$(".menu-button").toggleClass("is-active");
	});	
});

var slideNow = 1;
var slideCount = $('.slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('.viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('.next-btn').click(function() {
        nextSlide();
    });

    $('.prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('.viewport').width() * (navBtnId);
            $('.slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.viewport').width() * (slideNow);
        $('.slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.viewport').width() * (slideCount - 1);
        $('.slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.viewport').width() * (slideNow - 2);
        $('.slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}


