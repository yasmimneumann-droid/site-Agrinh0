// Efeito de rolagem suave para os links da navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mudança de cor do header ao rolar
const navbar = document.getElementById('navbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.style.background = '#fff';
        navbar.style.padding = '0.5rem 5%';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.padding = '1rem 5%';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
};

// Simulação de Menu Mobile simples
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = '#fff';
});
