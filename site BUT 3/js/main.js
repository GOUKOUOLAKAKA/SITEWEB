document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner tous les éléments avec la classe fade-in
    const fadeIns = document.querySelectorAll(".fade-in");
    const scaleUps = document.querySelectorAll(".scale-up");
    const slideInLefts = document.querySelectorAll(".slide-in-left");

    // Appliquer les classes d'animation au scroll
    window.addEventListener("scroll", () => {
        fadeIns.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add("active");
            }
        });

        scaleUps.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add("active");
            }
        });

        slideInLefts.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add("active");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Animation classes existantes
    const fadeIns = document.querySelectorAll(".fade-in");
    const scaleUps = document.querySelectorAll(".scale-up");
    const slideInLefts = document.querySelectorAll(".slide-in-left");

    // Appliquer les classes d'animation au scroll
    window.addEventListener("scroll", () => {
        fadeIns.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add("active");
            }
        });

        scaleUps.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add("active");
            }
        });

        slideInLefts.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add("active");
            }
        });
    });

    // Carousel logic
    document.querySelectorAll(".carousel").forEach(carousel => {
        let currentIndex = 0;
        const images = carousel.querySelectorAll(".carousel-image");
        const totalImages = images.length;

        // Display the first image initially
        images[currentIndex].classList.add("active");

        // Function to show image by index
        function showImage(index) {
            images.forEach(img => img.classList.remove("active"));
            images[index].classList.add("active");
        }

        // Event listeners for navigation buttons
        carousel.querySelector(".prev").addEventListener("click", () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
            showImage(currentIndex);
        });

        carousel.querySelector(".next").addEventListener("click", () => {
            currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        });
    });
});
