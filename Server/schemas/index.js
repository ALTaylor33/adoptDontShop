const contactNav = document.getElementsByClassName(".nav");
const search = document.getElementsByClassName (".searchBar");




window.addEventListener('DOMContentLoaded', (event) => {
    const carousel = document.querySelector('.Petcarousel');
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
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');



module.exports = { typeDefs, resolvers };
    setInterval(nextSlide, intervalTime);
  