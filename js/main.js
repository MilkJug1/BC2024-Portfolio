document.addEventListener('DOMContentLoaded', function() {
    var fadeInElements = document.querySelectorAll('.fade-in-element'); // Grab all elements that have the fade-in-element class

    function adjustOpacity() {
        fadeInElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect().top;
            var viewportHeight = window.innerHeight;
            var fadeStart = viewportHeight * 0.55; // Start fading in when element is 75% down the viewport
            var fadeEnd = viewportHeight * 0.55; // Fully visible when element is 25% down the viewport
            console.log("Fade start" + fadeStart);
            console.log("Fade End")
            if (elementPosition < fadeStart) {
                var opacity = 1 - (elementPosition - fadeEnd) / (fadeStart - fadeEnd);
                element.style.opacity = Math.min(Math.max(opacity, 0), 1); // Clamp opacity between 0 and 1
            } else {
                element.style.opacity = 0; // Ensure it stays hidden when above the fadeStart point
            }
        });
    }

    window.addEventListener('scroll', adjustOpacity);
    adjustOpacity(); // Initial check in case the elements are already in view on load
});
