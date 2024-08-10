function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    console.log(target);
    var targetPosition = target.getBoundingClientRect().top;
    console.log(targetPosition);
    var startPosition = window.scrollY; // relative to the window not actual element
    console.log(startPosition);
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
     
    }
    // below is taken from https://nicmulvaney.com/easing
    function easeInOutQuad(t,b,c,d) {
        t /= d / 2;
        if (t < 1) return c /  2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b; 
    }
    requestAnimationFrame(animation); // loop through this at 60 fps to make animation nicer
} 


var section1 = document.querySelector(".section1");
section1.addEventListener('click', function() {
    smoothScroll('.section2',1000);
});

var section2 = document.querySelector(".section2");
section2.addEventListener('click', function() {
    smoothScroll('.section1',1000);
});
