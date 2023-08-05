// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINKS

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// SCROLL BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// SCROLL SCROLL TOP
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

// MIXITUP FILTER PORTOFOLIO
const mixer = mixitup('.portofolio__container', {
    selectors: {
        target: '.portofolio__content'
    },
    animation: {
        duration: 400
    }
});


// link active portofolio
const linkPortofolio = document.querySelectorAll('.portofolio__item')

function activePortofolio() {
    if (linkPortofolio) {
        linkPortofolio.forEach(l => l.classList.remove('active-portofolio'))
        this.classList.add('active-portofolio')
    }
}

linkPortofolio.forEach(l => l.addEventListener('click', activePortofolio))

// SWIPER CAROUSEL

const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidePerView: 2,
        },
        1024: {
            slidePerView: 3
        }
    }
}
);

// GASP ANIMATION
gsap.from('.home__img', { opacity: 0, duration: 2, delay: .5, x: 60 })
gsap.from('.home__data', { opacity: 0, duration: 2, delay: .8, y: 25 })
gsap.from('.home__greeting, .home__name, .home__profession,.home__button', { duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2 })