// ? GETTING STICKY ELEMENTS
const stickyToggleBtn = document.getElementById("toggleStickyNav");
const stickyNav = document.querySelector(".sticky");

// * FUNCTION TO TOGGLE STICKY NAV
function toggleStickyNav() {
    stickyNav.classList.toggle("open");
}

// & EVENT LISTENER FOR STICKY-TOGGLE-BTN CLICK
stickyToggleBtn.addEventListener("click", toggleStickyNav);