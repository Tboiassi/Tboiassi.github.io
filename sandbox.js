var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides")
    for (i = 0; i < slides.length; i++) {
        slides[i].computedStyleMap.display = "none";
    }
    slideIndex++;
    if (slideIndex > slideIndex.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}