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

/*==================== PORTFOLIO FILTER ====================*/
const filterButtons = document.querySelectorAll('#filter-list button');
const filterableProjects = document.querySelectorAll('#project-list .project__item');

const filterProjects = (e) => {
    document.querySelector('#filter-list .active__filter').classList.remove('active__filter');
    e.target.classList.add('active__filter');

    filterableProjects.forEach(project__item => {
        if(project__item.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return project__item.classList.replace('hidden__project', 'show');
        }

        project__item.classList.add('hidden__project');
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterProjects));

/*==================== RESET ANIMATION ====================*/
document.querySelectorAll('.filter__button').forEach(e => e.addEventListener('click', () => {
	document.querySelector(".load--img").style.animation = 'none';
	document.querySelector(".load--img").offsetWidth;
	document.querySelector(".load--img").style.animation = '0.9s opacityInAnimation ease-out forwards';
}));

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