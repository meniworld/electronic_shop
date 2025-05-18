document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;

    // Initialize slider
    function initSlider() {
        updateSlider();
        startAutoSlide();
    }

    // Update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Start auto sliding
    function startAutoSlide() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }, 5000); // Change slide every 5 seconds
    }

    // Reset auto slide timer
    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    // Dot click event
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            currentIndex = parseInt(this.getAttribute('data-slide'));
            updateSlider();
            resetAutoSlide();
        });
    });

    // Initialize the slider
    initSlider();
});