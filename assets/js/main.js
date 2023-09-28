/*==================== HAMBURGER MENU ====================*/
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
});

/*==================== ACTIVE PAGE LINK ====================*/
const navLinkEls = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;

    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navLinkEl.classList.add('active');
    }
});

/*==================== ANIMATION WHEN IN VIEW ====================*/
const progressBars = document.querySelectorAll('.bar__progress');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleProgressBarAnimation() {
    progressBars.forEach((progressBar) => {
        if (isElementInViewport(progressBar)) {
            const percent = progressBar.getAttribute('data-percent');
            progressBar.style.width = percent + '%';
        }
    });
}

window.addEventListener('scroll', handleProgressBarAnimation);