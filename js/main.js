document.addEventListener('DOMContentLoaded', function() {
    var fadeInElements = document.querySelectorAll('.fade-in-element');

    function adjustElements() {
        var scrollPosition = window.pageYOffset;

        fadeInElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect().top + scrollPosition;
            var viewportHeight = window.innerHeight;
            var fadeStart = elementPosition - viewportHeight * 0.75;
            var fadeEnd = elementPosition - viewportHeight * 0.25;



            // Fade-in effect
            if (scrollPosition > fadeStart && scrollPosition < fadeEnd) {
                var opacity = (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
                element.style.opacity = opacity;
            } else if (scrollPosition >= fadeEnd) {
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0;
            }
        });
    }

    window.addEventListener('scroll', adjustElements);
    adjustElements(); // Initial check in case the elements are already in view on load
});
