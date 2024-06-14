
/*preloader*/
document.addEventListener("DOMContentLoaded", function(event) { 
  setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if (preloader) {
      // Add the 'hide' class to the preloader
      preloader.classList.add('hide');

      // After the animation is done, set display to 'none'
      setTimeout(function() {
        preloader.classList.add('none');
      }, 1000); // 1000ms = 1s, should match the length of the fadeOut animation
    }
  }, 3000); // 3000ms = 3s
});

/*preloader*/
/*top menu js*/
const burgerBtnM = document.querySelector('.sidebar__burger');
const sidebarM = document.querySelector('.sidebar');
const topTwoM = document.querySelector('.topTwo');
const topMs = document.querySelectorAll('.topM');

burgerBtnM.addEventListener('click', () => {
  if (sidebarM.classList.contains('active')) {
    topTwoM.classList.add('direction');
    topMs.forEach(topM => {
      topM.classList.add('mWidth');
    });
  } else {
    topTwoM.classList.remove('direction');
    topMs.forEach(topM => {
      topM.classList.remove('mWidth');
    });
  }
});

//Mouse hover vieo play
/*var cip = $(".card__preview").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}*/


//profile tabs





/*Mobile header custom js*/
/*const mainHeader = document.getElementById("mainc-header");

let prevScrollPosition = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPosition = window.pageYOffset;

  if (prevScrollPosition > currentScrollPosition) {
    mainHeader.style.transform = "translateY(0)";
  } else {
    mainHeader.style.transform = "translateY(-100%)";
  }
  prevScrollPosition = currentScrollPosition;
};*/

const mainHeader = document.getElementById("mainc-header");

let prevScrollPosition = window.pageYOffset;
let ticking = false;

window.addEventListener("scroll", () => {
  let currentScrollPosition = window.pageYOffset;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (prevScrollPosition > currentScrollPosition) {
        mainHeader.style.transform = "translateY(0)";
      } else {
        mainHeader.style.transform = "translateY(-100%)";
      }
      prevScrollPosition = currentScrollPosition;
      ticking = false;
    });
  }
  ticking = true;
});



/*const mainHeader = document.getElementById("mainc-header");

let prevScrollPosition = window.pageYOffset;
let isScrolling;

window.addEventListener("scroll", () => {
  let currentScrollPosition = window.pageYOffset;

  // Keep header fixed at the top when scrolled to the top
  if (currentScrollPosition === 0) {
    mainHeader.style.position = "fixed";
    mainHeader.style.top = "0";
  } else {
    mainHeader.style.position = "relative";
    mainHeader.style.top = "auto";
  }

  // Bring back header when scrolling stops
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    if (prevScrollPosition > currentScrollPosition) {
      mainHeader.style.transform = "translateY(0)";
    } else {
      mainHeader.style.transform = "translateY(-100%)";
    }
  }, 200);

  prevScrollPosition = currentScrollPosition;
});*/


/*end*/


function twitter() {
            if (document.getElementById('twitter')) {

                if (document.getElementById('twitter').style.display == 'none') {
                    document.getElementById('twitter').style.display = 'block';
                    document.getElementById('opensea').style.display = 'none';
					document.getElementById('discord').style.display = 'none';
					document.getElementById('insta').style.display = 'none';
                }
                else {
					document.getElementById('opensea').style.display = 'none';
                    document.getElementById('twitter').style.display = 'block';
					document.getElementById('discord').style.display = 'none';
					document.getElementById('insta').style.display = 'none';
                }
            }
}

function opensea() {
            if (document.getElementById('twitter')) {

                if (document.getElementById('opensea').style.display == 'none') {
                    document.getElementById('twitter').style.display = 'none';
                    document.getElementById('opensea').style.display = 'block';
					document.getElementById('discord').style.display = 'none';
					document.getElementById('insta').style.display = 'none';
                }
                else {
					document.getElementById('opensea').style.display = 'none';
                    document.getElementById('twitter').style.display = 'block';
					document.getElementById('discord').style.display = 'none';
					document.getElementById('discord').style.display = 'none';
					document.getElementById('insta').style.display = 'none';
                }
            }
}

function insta() {
            if (document.getElementById('insta')) {

                if (document.getElementById('insta').style.display == 'none') {
                    document.getElementById('twitter').style.display = 'none';
                    document.getElementById('opensea').style.display = 'none';
					document.getElementById('discord').style.display = 'none';
					document.getElementById('insta').style.display = 'block';
                }
                else {
					document.getElementById('opensea').style.display = 'none';
                    document.getElementById('twitter').style.display = 'block';
					document.getElementById('discord').style.display = 'none';
					document.getElementById('discord').style.display = 'none';
					document.getElementById('insta').style.display = 'none';
                }
            }
}
function discord() {
            if (document.getElementById('discord')) {

                if (document.getElementById('discord').style.display == 'none') {
                    document.getElementById('twitter').style.display = 'none';
                    document.getElementById('opensea').style.display = 'none';
					document.getElementById('discord').style.display = 'block';
					document.getElementById('insta').style.display = 'none';
                }
                else {
					document.getElementById('opensea').style.display = 'none';
                    document.getElementById('twitter').style.display = 'block';
					document.getElementById('discord').style.display = 'none';
					document.getElementById('insta').style.display = 'none';
                }
            }
}

// svg icons support ie11
(function () {
	svg4everybody();
})();

// check if touch device
function isTouchDevice() {
	var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	var mq = function mq(query) {
		return window.matchMedia(query).matches;
	};
	if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
		return true;
	}
	var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
	return mq(query);
}

if (isTouchDevice()) {
	$('body').addClass('touch-device');
}

// page
(function () {
	var page = $('.page'),
	    sidebar = $('.sidebar'),
	    burger = sidebar.find('.sidebar__burger'),
	    close = sidebar.find('.sidebar__close'),
	    header = $('.header'),
	    burgerHeader = header.find('.header__burger'),
	    search = header.find('.header__search'),
	    openSearch = header.find('.header__item_search');
	items = header.find('.header__item'), wrap = header.find('.header__wrap');

	items.each(function () {
		var item = $(this),
		    head = item.find('.header__head'),
		    body = item.find('.header__body');

		head.on('click', function (e) {
			e.stopPropagation();
			e.preventDefault();
			burgerHeader.removeClass('active');
			sidebar.removeClass('visible');
			search.slideUp();
			if (!item.hasClass('active')) {
				items.removeClass('active');
				item.addClass('active');
			} else {
				items.removeClass('active');
			}
		});

		body.on('click', function (e) {
			e.stopPropagation();
		});

		$('body').on('click', function () {
			items.removeClass('active');
		});
	});
	burger.on('click', function () {
		page.toggleClass('toggle');
		sidebar.toggleClass('active');
		setTimeout(function () {
			$('.js-slider').slick('resize');
		}, 400);
	});
	openSearch.on('click', function (e) {
		e.preventDefault();
		burgerHeader.removeClass('active');
		search.slideToggle();
		sidebar.removeClass('visible');
		$('html').removeClass('no-scroll');
		$('body').removeClass('no-scroll');
	});
	/*burgerHeader.on('click', function () {
		burgerHeader.toggleClass('active');
		search.slideUp();
		sidebar.toggleClass('visible');
		$('html').toggleClass('no-scroll');
		$('body').toggleClass('no-scroll');
	});*/
	burgerHeader.on('click', function () {
    burgerHeader.toggleClass('active');
    search.slideUp();
    sidebar.toggleClass('visible');
    $('html').toggleClass('no-scroll');
    $('body').toggleClass('no-scroll');
    $('.page').toggleClass('blur-background'); // Add this line
});

	close.on('click', function () {
		burgerHeader.removeClass('active');
		search.slideUp();
		sidebar.removeClass('visible');
		$('html').removeClass('no-scroll');
		$('body').removeClass('no-scroll');
	});
})();

// global variables
var prevArrow = '<button type="button" class="slick-prev"><svg class="icon icon-arrow-prev"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use></svg></button>',
    nextArrow = '<button type="button" class="slick-next"><svg class="icon icon-arrow-next"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use></svg></button>',
    leftArrow = '<button type="button" class="slick-prev"><svg class="icon icon-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
    rightArrow = '<button type="button" class="slick-next"><svg class="icon icon-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>';

$(document).ready(function () {

	// categories slider
	$('.js-slider-categories').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		speed: 700,
		fade: true
	});

	// slider main page
	(function () {
		var main = $('.js-main'),
		    sliderNav = main.find('.js-main-nav'),
		    sliderFor = main.find('.js-main-for'),
		    progressBar = main.find('.js-main-progress');

		sliderFor.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			var calc = nextSlide / (slick.slideCount - 1) * 100;

			progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc);
		});

		sliderFor.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			fade: true,
			asNavFor: sliderNav,
			speed: 700
		});

		sliderNav.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: sliderFor,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			dots: false,
			focusOnSelect: true,
			speed: 700,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			}]
		});
	})();

	// trending slider
	(function () {
		var main = $('.js-main'),
		    slider = main.find('.js-main-slider'),
		    status = main.find('.js-main-status'),
		    counter = main.find('.js-main-counter');

		slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			var i = (currentSlide ? currentSlide : 0) + 1;
			counter.html('0' + i);
			status.html('<span class="status__number">' + i + '</span>' + '<span class="status__sign">/</span>' + '<span class="status__all">' + slick.slideCount + '</span>');
		});

		slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			dots: true,
			infinite: true,
			speed: 700,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [{
				breakpoint: 768,
				settings: {
					variableWidth: false,
					arrows: true,
					dots: false
				}
			}]
		});
	})();

	// latest video slider
	$('.js-slider-videos').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		speed: 700,
		fade: true
	});

	$('.js-slider-streamers').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		speed: 600,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 9999,
			settings: "unslick"
		}, {
			breakpoint: 1420,
			settings: ""
		}, {
			breakpoint: 1260,
			settings: {
				slidesToShow: 3
			}

		}, {
			breakpoint: 768,
			settings: "unslick"
		}]
	});

	$('.js-slider-games').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		speed: 600,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 9999,
			settings: "unslick"
		}, {
			breakpoint: 1420,
			settings: ""
		}, {
			breakpoint: 1260,
			settings: {
				slidesToShow: 2
			}

		}, {
			breakpoint: 768,
			settings: "unslick"
		}]
	});

	$('.js-slider-view').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		speed: 600,
		responsive: [{
			breakpoint: 9999,
			settings: "unslick"
		}, {
			breakpoint: 1340,
			settings: ""
		}, {
			breakpoint: 1024,
			settings: {
				slidesToShow: 2
			}

		}]
	});

	$(window).on('resize orientationchange', function () {
		$('.js-slider-resize').slick('resize');
	});
});

(function () {
	var player = $('.player'),
	    action = player.find('.player__action'),
	    toggle = player.find('.player__toggle'),
	    chat = player.find('.player__chat'),
	    messenger = $('.messenger'),
	    close = messenger.find('.messenger__close');

	action.on('click', function () {
		$(this).toggleClass('active');
	});

	toggle.on('click', function () {
		$(this).toggleClass('active');
	});

	chat.on('click', function () {
		messenger.addClass('show');
	});

	close.on('click', function () {
		messenger.removeClass('show');
	});
})();

// catalog
(function () {
	$('.catalog__view .catalog__link:first-child').on('click', function (e) {
		e.preventDefault();
		$('.catalog').addClass('view');
		$('.catalog__link').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.catalog').find('.game').addClass('game_line');
	});
	$('.catalog__view .catalog__link:nth-child(2)').on('click', function (e) {
		e.preventDefault();
		$('.catalog').removeClass('view');
		$('.catalog__link').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.catalog').find('.game').removeClass('game_line');
	});

	$('.catalog__nav .catalog__link').on('click', function (e) {
		$('.catalog__nav .catalog__link').removeClass('active');
		$(this).addClass('active');
	});

	$('.game .checkbox').on('change', function () {
		$(this).parents('.game').toggleClass('active');
	});

	var checkboxAll = $('.catalog__sorting .checkbox__input');
	checkboxAll.on('click', function () {
		if ($(this).is(':checked')) {
			$(this).parents('.catalog').find('.game').addClass('active');
			$(this).parents('.catalog').find('.catalog__list .checkbox__input').prop('checked', true).attr('checked', 'checked');
		} else {
			$(this).parents('.catalog').find('.game').removeClass('active');
			$(this).parents('.catalog').find('.catalog__list .checkbox__input').prop('checked', false).removeAttr('checked');
		}
	});
})();

$('.games_add .games__item').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
});

$('.player__burger').on('click', function (e) {
	$(this).parents('.player__playlist').toggleClass('show');
});

$('.trending .card__inner').on('click', function (e) {
	$(this).parents('.card').toggleClass('active');
});

// chat
(function () {
	var chat = $('.chat'),
	    item = chat.find('.chat__item'),
	    head = chat.find('.chat__head'),
	    body = chat.find('.chat__body');
	head.on('click', function () {
		var thisHead = $(this);
		thisHead.parents('.chat__item').toggleClass('active');
		thisHead.parents('.chat__item').find('.chat__body').slideToggle();
	});
})();

// magnificPopup
(function () {
	var link = $('.js-popup-open');
	link.magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		removalDelay: 200,
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
				var sl = $('.js-slider-stories');
				if (!sl.hasClass('init')) {
					sl.addClass('init');
					sl.slick({
						slidesToShow: 3,
						slidesToScroll: 1,
						dots: false,
						arrows: true,
						prevArrow: leftArrow,
						nextArrow: rightArrow,
						centerMode: true,
						speed: 700,
						responsive: [{
							breakpoint: 1024,
							settings: {
								slidesToShow: 1
							}
						}]
					});
				}
			}
		}
	});
})();

// tabs
(function () {
	var tabs = $('.js-tabs');
	tabs.each(function () {
		var thisTabs = $(this),
		    nav = thisTabs.find('.js-tabs-link'),
		    item = thisTabs.find('.js-tabs-item');
		nav.on('click', function () {
			var thisNav = $(this),
			    indexNav = thisNav.index();
			nav.removeClass('active');
			thisNav.addClass('active');
			item.hide();
			item.eq(indexNav).fadeIn();
			return false;
		});
	});
})();

// toggle body theme
(function () {
	var switchTheme = $('.js-switch-theme'),
	    body = $('body');

	switchTheme.on('change', function () {
		if (!body.hasClass('dark')) {
			body.addClass('dark');
			localStorage.setItem('darkMode', "on");
		} else {
			body.removeClass('dark');
			localStorage.setItem('darkMode', "off");
		}
	});
})();

/*$(".chat__container").scrollTop($(".chat__container")[0].scrollHeight);*/

$(document).ready(function () {
	$('.field__select').niceSelect();
});




/*for div clicable*/

let isDragging = false;
let dragTimeout;

function handleClick(url) {
    if (!isDragging) {
        window.open(url, '_blank');
    }
}

const clickableSections = document.querySelectorAll('.clickable-section');

clickableSections.forEach((clickableSection) => {
    clickableSection.addEventListener('mousedown', () => {
        isDragging = false;
        clearTimeout(dragTimeout);
        dragTimeout = setTimeout(() => {
            isDragging = true;
        }, 200);
    });

    clickableSection.addEventListener('mouseup', () => {
        clearTimeout(dragTimeout);
        const url = clickableSection.getAttribute('data-url');
        handleClick(url);
    });

    clickableSection.addEventListener('mouseleave', () => {
        clearTimeout(dragTimeout);
    });
});




/* work buttons as link for other pages. */
/*function navigate(event, page) {
    event.preventDefault();
    const mainDomain = "shibabets.gg";
    
    if (window.location.hostname === mainDomain && (window.location.pathname === '/' || window.location.pathname === '/sports')) {
        showContent(page);
    } else {
        let targetUrl = 'https://' + mainDomain;
        if (page === 'casino') {
            targetUrl += '/';
        } else if (page === 'sports') {
            targetUrl += '/sports';
        }
        window.location.href = targetUrl;
    }
}



function navigate(event, page) {
    event.preventDefault();
    const mainDomain = "shibabets.gg";
    
    if (window.location.hostname === mainDomain) {
        if (page === 'main') {
            showMain();
        } else if (page === 'casino') {
            showContent('casino');
        } else if (page === 'sports') {
            showContent('sports');
        }
    } else {
        let targetUrl = 'https://' + mainDomain;
        if (page === 'main') {
            targetUrl += '/';
        } else if (page === 'casino') {
            targetUrl += '/casino';
        } else if (page === 'sports') {
            targetUrl += '/sports';
        }
        window.location.href = targetUrl;
    }
}*/


function navigate(event, page) {
    event.preventDefault();
    const mainDomain = "shibabets.gg";
    
    // Check the current page
    const currentPath = window.location.pathname;

    if (window.location.hostname === mainDomain && (currentPath === '/' || currentPath === '/casino' || currentPath === '/sports')) {
        let targetPath = '';
        if (page === 'main') {
            targetPath = '/';
        } else if (page === 'casino') {
            targetPath = '/casino';
        } else if (page === 'sports') {
            targetPath = '/sports';
        }
        
        // If the user is already on the target page, do nothing
        if (currentPath === targetPath) {
            return;
        }

        // If the user is on the main domain but not on the target page, switch content
        if (page === 'main') {
            showMain();
        } else if (page === 'casino') {
            showCasino();
        } else if (page === 'sports') {
            showSports();
        }
    } else {
        let targetUrl = 'https://' + mainDomain;
        if (page === 'main') {
            targetUrl += '/';
        } else if (page === 'casino') {
            targetUrl += '/casino';
        } else if (page === 'sports') {
            targetUrl += '/sports';
        }
        window.location.href = targetUrl;
    }
}




dragscroll.reset();

window.onload = function() {
  const sidebar = document.querySelector('.sidebar');
  if(sidebar) {
    sidebar.addEventListener('click', function(e) {
      const rect = e.target.getBoundingClientRect();
      if (e.clientX - rect.left > rect.width / 2) {
        this.classList.remove('visible');
      }
    });
  }
};



