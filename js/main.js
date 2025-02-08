document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }

    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);
});

document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) {
        console.error("Progress bar element not found!");
        return;
    }

    function updateScrollProgress() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

        progressBar.style.width = `${scrollPercentage}%`;

        console.log(`Scroll Percentage: ${scrollPercentage}%`);

        let red, green;

        if (scrollPercentage <= 50) {

            green = 255;
            red = Math.floor((scrollPercentage / 50) * 255);
        } else {

            red = 255;
            green = Math.floor(255 - ((scrollPercentage - 50) / 50) * 255);
        }

        progressBar.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
    }

    window.addEventListener('scroll', updateScrollProgress);

    updateScrollProgress();
});






