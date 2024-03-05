document.addEventListener('DOMContentLoaded', () => {
    // Slideshow functionality
    let slides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.opacity = '0';
            slide.classList.remove('active');
            if (idx === index) {
                slide.style.opacity = '1';
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Start the slideshow
    showSlide(currentSlide); // Show the first slide
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Pop-up image functionality
    document.querySelectorAll('.image-container img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.pop-image').style.display = 'block';
            document.querySelector('.pop-image img').src = image.getAttribute('src');
        };
    });

    document.querySelector('.pop-image span').onclick = () => {
        document.querySelector('.pop-image').style.display = 'none';
    };
});
