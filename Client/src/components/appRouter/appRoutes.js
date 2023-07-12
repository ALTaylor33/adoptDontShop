import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../main/main';
import User from '../user/user';
import Adoption from '../adoption/adoption';
import Donation from '../donation/donation';
import Contact from '../contact/contact';
import NotFound from '../notFound/notFound';
import SearchResults from '../searchResults/searchResults'
import Login from '../login'

const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<User />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
  export default AppRouter;