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


document.getElementById('theme-toggle').addEventListener('click', () => {
    // Alterne la classe "dark-mode" sur le body
    document.body.classList.toggle('dark-mode');

    // Change le texte du bouton en fonction du mode actif
    const themeButton = document.getElementById('theme-toggle');
    themeButton.textContent = document.body.classList.contains('dark-mode') ? 'Mode Clair' : 'Mode Sombre';
});
