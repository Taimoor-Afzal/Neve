// --------------- Sticy Navbar ----------------

let navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function () {
    if (this.scrollY > 0) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
});

// ----------------- Responsive Navbar --------------

let navToggler = document.querySelector('.nav-toggler');
let navlinks = document.querySelector('.nav-links');

navToggler.addEventListener("click", abc);
function abc() {
    navToggler.classList.toggle('active')
    navlinks.classList.toggle('open')
}

document.addEventListener("click", function (e) {
    if (e.target.closest(".nav-links")) {
        abc();
    }
});


// ------------------ TextArea Length Counter -----------------

let wordsLeft = document.getElementById('wordsLeft');
let textarea = document.getElementById('textarea');
wordsLeft.innerText = textarea.getAttribute('maxLength');

textarea.addEventListener('keyup', () => {
    wordsLeft.innerText = textarea.getAttribute('maxLength') - (textarea.value.length);
})
