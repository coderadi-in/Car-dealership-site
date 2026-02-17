// ? GETTING DOC ELEMENTS
const openNav = document.querySelector('.menu.open');
const closeNav = document.querySelector('.menu.close');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav li');

// | ADDING TRANSITION DELAY TO NAV LINKS
navLinks.forEach((link, index) => {
    link.style.transitionDelay = `${index * 0.1 + 0.3}s`;
});

// * FUNCTION TO CLOSE NAVBAR
function closeNavBar() {
    navLinks.forEach(navlink => {
        navlink.classList.remove('show');
    })

    setTimeout(() => {
        nav.classList.remove('show');
    }, 500);

    setTimeout(() => {
        nav.style.display = "none";
    }, 1000);
}

// & EVENT LISTENER TO OPEN NAV
openNav.addEventListener('click', () => {
    nav.style.display = "flex";

    setTimeout(() => {
        nav.classList.add('show');
        navLinks.forEach(navlink => {
            navlink.classList.add('show');
        })
    }, 100);
});

// & EVENT LISTENER TO CLOSE NAV
closeNav.addEventListener('click', () => {
    closeNavBar();
});

// & EVENT LISTENERS TO CLOSE NAV WHEN BODY IS CLICKED
document.body.addEventListener('click', (e) => {
    if (nav.classList.contains('show') && !e.target.closest('.nav') && !e.target.closest('.menu.open')) {
        closeNavBar();
    }
});