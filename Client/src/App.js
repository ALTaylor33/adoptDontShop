import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar';
import AppRouter from './components/appRouter/appRoutes';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <Routes>
        <Route path="*" element={<AppRouter />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
