var videos = document.getElementsByClassName('tVisuals');
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMobile) {
	var options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	};
	var observerMobile = new IntersectionObserver(onIntersection, options); // Changed 'observer' to 'observerMobile'
	for(var i = 0; i < videos.length; i++) {
		observerMobile.observe(videos[i]);
	}

	function onIntersection(entries) {
		entries.forEach(entry => {
			if(entry.isIntersecting) {
				entry.target.play();
			} else {
				entry.target.pause();
			}
		});
	}
} else {
	for(var i = 0; i < videos.length; i++) {
		videos[i].onmouseover = function() {
			this.play();
		}
		videos[i].onmouseout = function() {
			this.pause();
		}
	}
}
