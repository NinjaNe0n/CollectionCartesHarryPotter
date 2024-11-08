document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-cards');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let scrollPosition = 0;

    next.addEventListener('click', () => {
        scrollPosition += 355;
        carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    });

    prev.addEventListener('click', () => {
        scrollPosition -= 355;
        carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    });
});
