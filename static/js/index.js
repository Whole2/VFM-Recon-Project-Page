document.addEventListener('DOMContentLoaded', function() {
    // Navbar burger toggle (for mobile)
    const burgers = document.querySelectorAll('.navbar-burger');
    burgers.forEach(burger => {
        burger.addEventListener('click', () => {
            const target = burger.dataset.target;
            const menu = document.getElementById(target);
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    });
});
