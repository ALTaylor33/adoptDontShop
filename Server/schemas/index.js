const contactNav = document.getElementsByClassName(".nav");
const search = document.getElementsByClassName (".searchBar");

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




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
  

    import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





