// Mobile Menu Toggle logic[cite: 8]
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Automatically close menu when a link is clicked[cite: 8]
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll shadow for the navigation bar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('header');
    if (window.scrollY > 20) {
        nav.classList.add('scrolled-nav');
    } else {
        nav.classList.remove('scrolled-nav');
    }
});