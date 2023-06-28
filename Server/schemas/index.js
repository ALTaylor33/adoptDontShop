window.addEventListener('DOMContentLoaded', (event) => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');

    let currentIndex = 0;
    const intervalTime = 3000; // Time between slides in milliseconds

    function nextSlide() {
      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = 'block';
    }

    setInterval(nextSlide, intervalTime);
  });