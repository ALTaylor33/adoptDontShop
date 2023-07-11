import React from 'react';
import { client } from "./ApolloClient/client"; //imported client
import { ApolloProvider } from '@apollo/client';//imported ApolloProvider
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar';
import AppRouter from './components/appRouter/appRoutes';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import User from './components/user/user';
import Adoption from './components/adoption/adoption';
import DonationPage from './components/donation/donation';
import Contact from './components/contact/contact';
import SearchResults from './components/searchResults/searchResults';
import NotFound from './components/notFound/notFound';


function App() {
  return (
    
    <Router>
      {/* <Header/> */}
      <Navbar />
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/user" element={<User />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<AppRouter />} /> */}
      </Routes>
      <Footer />
    </Router>
    // </ApolloProvider> 
  );
};

export default App;


