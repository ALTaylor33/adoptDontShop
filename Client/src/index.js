import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
=======
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//line 6 was missing. This is why donation and my profile styling were not loading.
>>>>>>> e0327dc333117693a2bd3fdcd1484c8e06238b6c

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
