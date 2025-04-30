const menuToggle = document.getElementById('menuToggle');
const navContainer = document.getElementById('navContainer');
const dropdowns = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('show');
    menuToggle.classList.toggle('active');
});

dropdowns.forEach(drop => {
    drop.addEventListener('click', (e) => {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            drop.classList.toggle('open');
        }
    });
});