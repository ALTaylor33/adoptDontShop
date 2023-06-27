import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './main';
import Adoption from './adoption';
import Donation from './donation';
import Contact from './Contact';
import NotFound from './NotFound';

const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
  export default AppRouter;