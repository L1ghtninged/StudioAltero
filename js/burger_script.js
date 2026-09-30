
const burgerBtn = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mainNav.classList.toggle('active');
});

// Zavřít menu po kliknutí na odkaz
document.querySelectorAll('#mainNav a').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        mainNav.classList.remove('active');
    });
});
