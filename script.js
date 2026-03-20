// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar shrink on scroll
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('shadow-sm', window.scrollY > 50);
});
