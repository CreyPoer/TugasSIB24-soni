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
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("isislide");
if (n > slides.length)
{
    slideIndex = 1;
}
if (n < 1)
{
    slideIndex = slides.length
}
for (i = 0; i < slides.length; i++)
{
    slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
} 

var slideIndex = 1;
showSlidesheader(slideIndex);

function plusSlidesheader(n) {
showSlidesheader(slideIndex += n);
}

function showSlidesheader(n) {
var i;
var slides = document.getElementsByClassName("slide");
if (n > slides.length)
{
    slideIndex = 1;
}
if (n < 1)
{
    slideIndex = slides.length
}
for (i = 0; i < slides.length; i++)
{
    slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}