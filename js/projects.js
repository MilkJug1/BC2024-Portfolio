// const slideUpFadeInElement = document.querySelectorAll('.slide-up-fade-in');
// console.log("From projects.js file");
// function checkScroll() {
//
//     slideUpFadeInElement.forEach((element) => {
//         const elementTop = element.getBoundingClientRect().top // get the top part of the bounding box of element
//         const windowHeight = window.innerHeight // Get the window height, for some reason never changes :/
//
//         var fadeStart = windowHeight * 0.55; // Start fading in when element is 75% down the viewport
//         var fadeEnd = windowHeight * 0.55; // Fully visible when element is 25% down the viewport
//
//         if (elementTop < windowHeight) {
//
//             var opacity = 1 - (elementTop - fadeEnd) / (fadeStart - fadeEnd);
//             element.style.opacity = Math.min(Math.max(opacity, 0), 1); // Clamp opacity between 0 and 1
//             element.style.transform = "translateY(0)"
//         } else {
//
//             element.style.opacity = 0; // Ensure it stays hidden when above the fadeStart point
//         }
//     });
// }
//
// window.addEventListener('scroll', checkScroll);


const slideUpFadeInElements = document.querySelectorAll('.slide-up-fade-in');

function checkScroll() {
    slideUpFadeInElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        let opacity = 0;
        let translateY = 100;

        if (elementTop < windowHeight && elementBottom > 0) {
            const visibleHeight = Math.min(windowHeight, elementBottom) - Math.max(0, elementTop);
            opacity = visibleHeight / element.offsetHeight;
            translateY = (1 - opacity) * 100;
        }

        element.style.opacity = opacity;
        element.style.transform = `translateY(${translateY}px)`;
    });
}

window.addEventListener('scroll', checkScroll);
