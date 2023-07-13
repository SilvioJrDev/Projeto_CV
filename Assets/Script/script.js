const sections = document.querySelectorAll('.carousel-section');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < sections.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const translateXValue = `translateX(${-100 * currentIndex}%)`;
    sections.forEach(section => {
        section.style.transform = translateXValue;
    });
}