const menuToggle = document.getElementById('menuToggle');
const navContainer = document.getElementById('navContainer');
const dropdowns = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('show');
    menuToggle.classList.toggle('active');
});

// Toggle dropdowns only on mobile
dropdowns.forEach(drop => {
    drop.addEventListener('click', (e) => {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            drop.classList.toggle('open');
        }
    });
});

// Close menu when window resized up
window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        navContainer.classList.remove('show');
        menuToggle.classList.remove('active');
        dropdowns.forEach(drop => drop.classList.remove('open'));
    }
});
