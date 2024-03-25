const emailInput = document.getElementById('emailInput');
const emailLabel = document.getElementById('emailLabel');
const passwordInput = document.getElementById('passwordInput');
const passwordLabel = document.getElementById('passwordLabel');

emailInput.addEventListener('focus', function() {
    emailLabel.style.display = 'block';
});
passwordInput.addEventListener('focus', function() {
    passwordLabel.style.display = 'block';
});

emailInput.addEventListener('blur', function() {
    if (this.value === '') {
        emailLabel.style.display = 'none';
    }
});
passwordInput.addEventListener('blur', function() {
    if (this.value === '') {
        passwordLabel.style.display = 'none';
    }
});


var slideIndex = 1;
showSlidesheader(slideIndex);
startSlideInterval(); // Mulai interval otomatis

function plusSlidesheader(n) {
showSlidesheader(slideIndex += n);
stopSlideInterval(); // Berhenti interval saat slide bergeser
}

function currentSlide(n) {
showSlidesheader(slideIndex = n);
stopSlideInterval(); // Berhenti interval saat slide dipilih
}

function showSlidesheader(n) {
var i;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active"); 
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].classList.add("active"); 
}

function startSlideInterval() {
    slideInterval = setInterval(function() {
        plusSlidesheader(1); 
    }, 5000); 
}

function stopSlideInterval() {
    clearInterval(slideInterval);
}

window.onload = function() {
    showSlidesheader(slideIndex);
    startSlideInterval();
};