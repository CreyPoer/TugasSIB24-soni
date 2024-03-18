document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    header.classList.add('show');
});
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var navbar = document.getElementById("navbar");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 150) { /* Sesuaikan nilai ini dengan posisi scroll yang diinginkan */
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});


////navigasi wisata
var slideIndexWisata = 1;
showSlides(slideIndexWisata);

function plusSlides(n) {
showSlides(slideIndexWisata += n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("isislide");
if (n > slides.length)
{
    slideIndexWisata = 1;
}
if (n < 1)
{
    slideIndexWisata = slides.length
}
for (i = 0; i < slides.length; i++)
{
    slides[i].style.display = "none";
}
slides[slideIndexWisata-1].style.display = "block";
} 


//////navigasi header
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

